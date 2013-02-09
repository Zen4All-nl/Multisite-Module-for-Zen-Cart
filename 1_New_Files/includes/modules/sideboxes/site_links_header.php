<?php
/**
 * sit_links_header.php
 * This sidebox display the other sites where the customers can buy items from.
 * It allow to do inter-sites orders buy keeping the same session over the other sites.
 * site_links add the zenid to the end of these links and allow to keep the sessions over other sites.
 */

$site_header_status = $db->Execute("select layout_box_name from " . TABLE_LAYOUT_BOXES . " where (layout_box_status=1 or layout_box_status_single=1) and layout_template ='" . $template_dir . "' and layout_box_name='site_links_header.php'");

  if ($site_header_status->RecordCount() != 0) {
    $show_site_links_header= true;
  }

// test if box should display

  unset($site_links);

// test if links should display

  //Syntax:
  //add_header_site_link(DISPLAYED NAME OF THE SITE , URL OF THE SITE);
    add_header_site_link('Design \'75','http://design75.nl');
    add_header_site_link('Handgrepen','http://handgreepzoeker.nl');
    add_header_site_link('Ladegeleiders','http://ladegeleiderzoeker.nl');
    add_header_site_link('Meubelvoeten','http://meubelvoetzoeker.nl');
    add_header_site_link('Laden','http://kantenklareladen.nl');
// only show if links are active
  if (($show_site_links_header == true) & (sizeof($site_links) > 0)) {
    require($template->get_template_dir('tpl_site_links_header.php',DIR_WS_TEMPLATE, $current_page_base,'sideboxes') . '/tpl_site_links_header.php');

    $title =  BOX_HEADING_SITE_LINKS;
    $title_link = false;
    require($template->get_template_dir('tpl_box_header.php',DIR_WS_TEMPLATE, $current_page_base,'common'). '/tpl_box_header.php');
  }
  
  function add_header_site_link($site_name,$url='',$session=true) {
  global $default_server_name, $site_links;
  if(($site_name!=$default_server_name)&&("http://$default_server_name"!=$url)) {
    if($url=='') {
      $url = "http://$site_name";
    }
    if($session && zen_not_null(zen_session_id())) {
      if(strpos($url,'?')===false) {
        $separator = '?';
      } else {
        $separator = '&';
      }
      $url .= $separator . zen_session_name() . '=' . zen_session_id();
    }
    $site_links[] = '<a href="'.$url.'">'.$site_name.'</a>';
  }
  }
?>