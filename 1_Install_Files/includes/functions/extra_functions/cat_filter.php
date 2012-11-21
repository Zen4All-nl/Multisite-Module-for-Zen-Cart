<?php
/**
 * Multisite Module function
 * Modify the queries of Zen-cart in order to filter the products/categories
 *
 * @param String $sql
 * @return String
 */
function cat_filter($sql) { // only allow selected products/categories
  if(!defined('ALLOW_CAT_FILTER')||(ALLOW_CAT_FILTER!='no')) {
    // define('ALLOW_CAT_FILTER','no') will desactivate the category filter
    $sql = preg_replace('/\s\s+/', ' ', $sql);
    $sql2 = $sql;
    $sql_lower = strtolower($sql);
    $str_pos_products = strpos($sql_lower,TABLE_PRODUCTS . ' p');
    $str_pos_desc = strpos($sql_lower,TABLE_CATEGORIES_DESCRIPTION.' cd');
    $str_pos_where = strpos($sql_lower,'where');
    $fix = 0;
    if(($str_pos_where===false)&&($str_pos_products!==false)) {
    // There is a the table products in "FROM" and there is no "WHERE"
      $fix = 1;
    } elseif(($str_pos_desc!==false)&&($str_pos_desc<$str_pos_where)) {
    // There is a "categories_description cd" before "WHERE"
      $fix = 2;
    } elseif (($str_pos_products!==false)&&($str_pos_products<$str_pos_where)) {
    // There is "products p" before "WHERE"
      $fix = 1;
    } elseif($sql == "select categories_id from " . TABLE_CATEGORIES . " where categories_status=1 limit 1") {
    // Special Query for the file includes/modules/sideboxes/categories.php
        $sql = "select c.categories_id from ".TABLE_CATEGORIES." c INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
         ON (c.categories_id = cd.categories_id
         AND cd.language_id=".$_SESSION['languages_id']."
           AND cd.categories_description LIKE '%-".SITE_NAME."-%') where categories_status=1 limit 1";
    } elseif($sql == "select products_id from " . TABLE_FEATURED . " where status= 1 limit 1") {
    // Special Query for the categories sideboxe/Featured Products
      $sql = "SELECT f.products_id FROM " . TABLE_FEATURED . " f
      INNER JOIN ".TABLE_PRODUCTS." p ON (f.products_id=p.products_id)
      INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
      ON (p.master_categories_id = cd.categories_id
      AND cd.language_id=".$_SESSION['languages_id']."
      AND cd.categories_description LIKE '%-".SITE_NAME."-%')
      WHERE status=1 limit 1";
    } elseif($sql == "select s.products_id from " . TABLE_SPECIALS . " s where s.status= 1 limit 1") {
    // Special Query for the categories sideboxe/Special Products
      $sql = "SELECT s.products_id FROM " . TABLE_SPECIALS . " s
      INNER JOIN ".TABLE_PRODUCTS." p ON (s.products_id=p.products_id)
      INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
      ON (p.master_categories_id = cd.categories_id
      AND cd.language_id=".$_SESSION['languages_id']."
      AND cd.categories_description LIKE '%-".SITE_NAME."-%')
      WHERE status=1 limit 1";
    } else { // Query with categories but not descriptions
      $str_pos_cats = strpos($sql_lower,TABLE_CATEGORIES . ' c');
      if($str_pos_cats!==false&&$str_pos_cats<$str_pos_where) {
        $add_pos = $str_pos_products + strlen(TABLE_CATEGORIES . ' c');
        $str_pos_coma = strpos($sql_lower,',',$add_pos);
        if($str_pos_coma!==false) {
          $add_pos = $str_pos_coma;
        } 
        if(($str_pos_where!==false)&&(($str_pos_coma===false)||($str_pos_where<$str_pos_coma))) {
          $add_pos = $str_pos_where;
        }
        $sql = substr($sql,0,$add_pos).
          " INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
            ON (c.categories_id = cd.categories_id
            AND cd.language_id=".$_SESSION['languages_id']."
            AND cd.categories_description LIKE '%-".SITE_NAME."-%') ".
          substr($sql,$add_pos);
      }
    }
    if($fix==1) {
      if(preg_match("/^select p2c.categories_id from ".TABLE_PRODUCTS." p, ".TABLE_PRODUCTS_TO_CATEGORIES." p2c ".
                   "where p.products_id = '[0-9]+' and p.products_status = '1' ".
                   "and p.products_id = p2c.products_id limit 1$/",$sql)) {
        $sql = str_replace(TABLE_PRODUCTS_TO_CATEGORIES." p2c ",TABLE_PRODUCTS_TO_CATEGORIES." p2c
          INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
          ON (p2c.categories_id=cd.categories_id
          AND cd.language_id=".$_SESSION['languages_id']."
          AND cd.categories_description LIKE '%-".SITE_NAME."-%')
          INNER JOIN ".TABLE_CATEGORIES." as c ON (cd.categories_id=c.categories_id AND c.categories_status=1)",$sql);
            } else {
        $add_pos = $str_pos_products + strlen(TABLE_PRODUCTS . ' p');
        $str_pos_coma = strpos($sql_lower,',',$add_pos);
        if($str_pos_coma!==false) {
          $add_pos = $str_pos_coma;
        } 
        if(($str_pos_where!==false)&&(($str_pos_coma===false)||($str_pos_where<$str_pos_coma))) {
          $add_pos = $str_pos_where;
        }
        $sql = substr($sql,0,$add_pos).
            " INNER JOIN ".TABLE_CATEGORIES_DESCRIPTION." cd
              ON (p.master_categories_id = cd.categories_id
              AND cd.language_id=".$_SESSION['languages_id']."
              AND cd.categories_description LIKE '%-".SITE_NAME."-%') ".
            substr($sql,$add_pos);
             }
    } else if ($fix == 2) {
      $sql = substr($sql,0,$str_pos_where + 6).
        " cd.categories_description LIKE '%-".SITE_NAME."-%'
        AND cd.language_id=".$_SESSION['languages_id']." AND ".
        substr($sql,$str_pos_where + 6);
    }
  }
  if($sql==$sql2) {
    $fh = fopen(DIR_FS_LOGS.'/multisite_logs.txt','a');
    fwrite($fh, "Query not changed:\n".$sql2."\n\n");
    fclose($fh);
  }
  return $sql;
}
?>