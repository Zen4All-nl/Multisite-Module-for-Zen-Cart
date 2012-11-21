<?php
//
// +----------------------------------------------------------------------+
// |zen-cart Open Source E-commerce                                       |
// +----------------------------------------------------------------------+
// | Copyright (c) 2003 The zen-cart developers                           |
// |                                                                      |
// | http://www.zen-cart.com/index.php                                    |
// |                                                                      |
// | Portions Copyright (c) 2003 osCommerce                               |
// +----------------------------------------------------------------------+
// | This source file is subject to version 2.0 of the GPL license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available through the world-wide-web at the following url:           |
// | http://www.zen-cart.com/license/2_0.txt.                             |
// | If you did not receive a copy of the zen-cart license and are unable |
// | to obtain it through the world-wide-web, please send a note to       |
// | license@zen-cart.com so we can mail you a copy immediately.          |
// +----------------------------------------------------------------------+
// $Id: categories_ul_generator.php 2004-07-11  DrByteZen $
//      based on site_map.php v1.0.1 by networkdad 2004-06-04
//


class zen_categories_ul_generator {
    var $root_category_id = CATEGORIES_ROOT,
    $max_level = 7,
    $data = array(),
    $root_start_string = '',
    $root_end_string = '',
    $parent_start_string = '',
    $parent_end_string = '',
    
    $parent_group_start_string = '<ul%s>',
    $parent_group_end_string = '</ul>',
    
    $child_start_string = '<li%s>',
    $child_end_string = '</li>',
    
    $spacer_string = '
	',
    $spacer_multiplier = 1;
    
    var $document_types_list = ' (3) ';// acceptable format example: ' (3, 4, 9, 22, 18) '
    
    function zen_categories_ul_generator($load_from_database = true)
    {
        global $languages_id, $db;
        $this->data = array();
        $categories_query = "select c.categories_id, cd.categories_name, c.parent_id
from " . TABLE_CATEGORIES . " c, " . TABLE_CATEGORIES_DESCRIPTION . " cd

where c.categories_id = cd.categories_id
and c.categories_status=1 " .
        " and cd.language_id = '" . (int)$_SESSION['languages_id'] . "' " .
        " order by c.parent_id, c.sort_order, cd.categories_name";
        $categories = $db->Execute(cat_filter($categories_query));
        while (!$categories->EOF) {
            $this->data[$categories->fields['parent_id']][$categories->fields['categories_id']] = array('name' => $categories->fields['categories_name'], 'count' => 0);
            $categories->MoveNext();
        }
    }
    
    function buildBranch($parent_id, $level = 0, $submenu=false, $parent_link='')
    {    
        $result = sprintf($this->parent_group_start_string, ($submenu==true) ? ' class="level'. ($level+1) . '"' : '' );
        
        if (($this->data[$parent_id])) {
            foreach($this->data[$parent_id] as $category_id => $category) {
                 $category_link = $parent_link . $category_id; 
				
				if (($this->data[$category_id])) {
				$result .= sprintf($this->child_start_string, ($submenu==true) ? ' class="submenu"' : '');
				} 
				
				else {
                     if (($this->data[$category_id]) && ($submenu==false)) {
                          $result .= sprintf($this->parent_group_start_string, ($submenu==true) ? ' class="level'. ($level+1) . '"' : '');
                          $result .= sprintf($this->child_start_string, ($submenu==true) ? ' class="submenu"' : '');
                    
                            } else {
                              $result .= sprintf($this->child_start_string, '');
                            }
							
						}
                
                if ($level == 0) {
                    $result .= $this->root_start_string;
                }
                $result .= str_repeat($this->spacer_string, $this->spacer_multiplier * 1) . '<a href="' . zen_href_link(FILENAME_DEFAULT, 'cPath=' . $category_link) . '">';
                $result .= $category['name'];
                $result .= '</a>';
                
                if ($level == 0) {
                    $result .= $this->root_end_string;
                }
                
                if (($this->data[$category_id])) {
                    $result .= $this->parent_end_string;
                }
                
                if (($this->data[$category_id]) && (($this->max_level == '0') || ($this->max_level > $level+1))) {
                    $result .= $this->buildBranch($category_id, $level+1, $submenu, $category_link . '_');
                    
                }
                $result .= $this->child_end_string;
                
            }
        }
        
        $result .= $this->parent_group_end_string;
        
        return $result;
    }
    
    function buildTree($submenu=false)
    {
        return $this->buildBranch($this->root_category_id, '', $submenu);
    }
}
?>
