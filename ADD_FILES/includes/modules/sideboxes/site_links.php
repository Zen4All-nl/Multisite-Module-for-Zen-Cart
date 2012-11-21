<?php
/**
 * This sidebox display the other sites where the customers can buy items from.
 * It allow to do inter-sites orders buy keeping the same session over the other sites.
 * site_links add the zenid to the end of these links and allow to keep the sessions over other sites.
 */

// test if box should display

  unset($more_information);

// test if links should display

	//Title of the box (Should be moved to a language file if multi_language site...
	define('BOX_HEADING_SITE_LINKS','Partners');
	//Syntax:
	//add_site_link(DISPLAYED NAME OF THE SITE , URL OF THE SITE);
    add_site_link('Example Shop -- Edit site_links.php...','http://www.example.com');

// only show if links are active
  if (sizeof($more_information) > 0) {
    require($template->get_template_dir('tpl_more_information.php',DIR_WS_TEMPLATE, $current_page_base,'sideboxes') . '/tpl_more_information.php');

    $title =  BOX_HEADING_SITE_LINKS;
    $title_link = false;
    require($template->get_template_dir($column_box_default, DIR_WS_TEMPLATE, $current_page_base,'common') . '/' . $column_box_default);
  }
  
  function add_site_link($site_name,$url='',$session=true) {
	global $default_server_name, $more_information;
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
		$more_information[] = '<a href="'.$url.'">'.$site_name.'</a>';
	}
  }
?>