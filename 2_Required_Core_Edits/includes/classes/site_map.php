<?php
/**
 * site_map.php
 *
 * @package general
 * @copyright Copyright 2003-2016 Zen Cart Development Team
 * @copyright Portions Copyright 2003 osCommerce
 * @license http://www.zen-cart.com/license/2_0.txt GNU Public License V2.0
 * @version $Id: Author: DrByte  Sat Oct 17 22:52:38 2015 -0400 Modified in v1.5.5 $
 */
if (!defined('IS_ADMIN_FLAG')) {
  die('Illegal Access');
}
/**
 * site_map.php
 *
 * @package general
 */
 class zen_SiteMapTree {
// bof Multi site
   var $root_category_id = CATEGORIES_ROOT,
// bof Multi site
       $max_level = 0,
       $data = array(),
       $root_start_string = '',
       $root_end_string = '',
       $parent_start_string = '',
       $parent_end_string = '',
       $parent_group_start_string = "\n<ul>",
       $parent_group_end_string = "</ul>\n",
       $child_start_string = '<li>',
       $child_end_string = "</li>\n",
       $spacer_string = '',
       $spacer_multiplier = 1;

   function __construct($load_from_database = true) {
     global $languages_id, $db;
     $this->data = array();
     $categories_query = "select c.categories_id, cd.categories_name, c.parent_id
                      from " . TABLE_CATEGORIES . " c, " . TABLE_CATEGORIES_DESCRIPTION . " cd
                      where c.categories_id = cd.categories_id
                      and cd.language_id = '" . (int)$_SESSION['languages_id'] . "'
                      and c.categories_status != '0'
                      order by c.parent_id, c.sort_order, cd.categories_name";
// bof Multi site
         $categories = $db->Execute(cat_filter($categories_query));
// bof Multi site
         while (!$categories->EOF) {
           $this->data[$categories->fields['parent_id']][$categories->fields['categories_id']] = array('name' => $categories->fields['categories_name'], 'count' => 0);
           $categories->MoveNext();
         }
   }

   function buildBranch($parent_id, $level = 0, $parent_link = '') {
    $result = $this->parent_group_start_string;

    if (isset($this->data[$parent_id])) {
      foreach ($this->data[$parent_id] as $category_id => $category) {
        $category_link = $parent_link . $category_id;
        $result .= $this->child_start_string;
        if (isset($this->data[$category_id])) {
          $result .= $this->parent_start_string;
        }

        if ($level == 0) {
          $result .= $this->root_start_string;
        }
        $result .= str_repeat($this->spacer_string, $this->spacer_multiplier * $level) . '<a href="' . zen_href_link(FILENAME_DEFAULT, 'cPath=' . $category_link) . '">';
        $result .= $category['name'];
        $result .= '</a>';

        if ($level == 0) {
          $result .= $this->root_end_string;
        }

        if (isset($this->data[$category_id])) {
          $result .= $this->parent_end_string;
        }

//        $result .= $this->child_end_string;

       if (isset($this->data[$category_id]) && (($this->max_level == '0') || ($this->max_level > $level+1))) {
         $result .= $this->buildBranch($category_id, $level+1, $category_link . '_');
       }
       $result .= $this->child_end_string;

     }
   }

    $result .= $this->parent_group_end_string;

    return $result;
  }
   function buildTree() {
     return $this->buildBranch($this->root_category_id);
   }
 }
