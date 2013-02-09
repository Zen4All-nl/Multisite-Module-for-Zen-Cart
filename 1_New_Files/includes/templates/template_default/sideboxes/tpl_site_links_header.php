<?php
/**
 * Top Box Template
 *
 * @package templateSystem
 * @copyright Copyright 2003-2005 Zen Cart Development Team
 * @copyright Portions Copyright 2003 osCommerce
 * @license http://www.zen-cart.com/license/2_0.txt GNU Public License V2.0
 * @version $Id: tpl_site_links.php 0001 2012-21-07 10:23 zen4all $
 */
    $content = "";
  $content .= '<div id="' . str_replace('_', '-', $box_id . 'Content') . '" class="topBox">' . "\n" ;
  $content .=  "\n" . '<ul class="nav_list">' . "\n" ;
  for ($i=0; $i<sizeof($site_links); $i++) {
    $content .= '<li>' . $site_links[$i] . '</li>|' . "\n" ;
  }

  $content .= '</ul>' . "\n" ;
  $content .= '</div>';
?>