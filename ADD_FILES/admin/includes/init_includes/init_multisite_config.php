<?php
  if (!defined('IS_ADMIN_FLAG')) {
    die('Illegal Access');
  }
  $zc150 = (PROJECT_VERSION_MAJOR > 1 || (PROJECT_VERSION_MAJOR == 1 && substr(PROJECT_VERSION_MINOR, 0, 3) >= 5));

  if ($zc150) { // continue Zen Cart 1.5.0
    // add configuration menu
// Make sure configuration group can be displayed in admin menu
    if (!zen_page_key_exists('toolsMultiSite')) {
      zen_register_admin_page('toolsMultiSite','BOX_TOOLS_MULTISITE','FILENAME_MULTISITE','','tools','Y','100');
          
        $messageStack->add('Enabled Multisite Tools menu.', 'success');
      }
    }
// Now that the menu item has been created/registered, can stop the wasteful process of having
// this script run again by removing it from the auto-loader array
@unlink(DIR_FS_ADMIN . DIR_WS_INCLUDES . 'auto_loaders/config.multisite.php'); 