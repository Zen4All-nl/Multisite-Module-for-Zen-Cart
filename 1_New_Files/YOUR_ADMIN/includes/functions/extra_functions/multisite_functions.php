<?php

/**
 * retrieve full cPath from category ID
 * 
 * @global object $db
 * @staticvar array $parent_cache
 * @param int $cID
 * @return string
 */
function MultisiteGetcPath(int $cID = 0): string
{
  global $db;
  static $parent_cache = [];
  $cats[] = '';
  $parent = $db->Execute("SELECT parent_id, categories_id
                          FROM " . TABLE_CATEGORIES . "
                          WHERE categories_id = " . (int)$cID);
  foreach ($parent as $item) {
    if ($item['parent_id'] != '0') {
      $parent_cache[(int)$item['categories_id']] = (int)$item['parent_id'];
      $cats[] = $parent->fields['parent_id'];
      if (isset($parent_cache[(int)$item['parent_id']])) {
        $item['parent_id'] = $parent_cache[(int)$item['parent_id']];
      } else {
        $parent = $db->Execute("SELECT parent_id, categories_id
                                FROM " . TABLE_CATEGORIES . "
                                WHERE categories_id = " . (int)$item['parent_id']);
      }
    }
  }
  $cats = array_reverse($cats);
  $cPath = implode('_', $cats);
  if ($cPath == '') {
    $cPath = '0';
  }
  return $cPath;
}
