<?php
/**
 * Multisite for Zen-Cart
 * 
 * This file should be in includes/admin/multisite.php
 * 
 */
require 'includes/application_top.php';
/**
 * Save cats/sites
 */
$action = $_GET['action'] ?? '';
$mode = $_GET['mode'] ?? '';

if ($mode == 'categories_sites' && isset($_GET['action']) && ($_GET['action'] == 'save')) {
  if (isset($_GET['site'])) {
    $site_param = '&site=' . $_GET['site'];
  } else {
    $site_param = '';
  }
  if (isset($_POST['site'])) {
    foreach ($_POST['site'] as $multisite_cat_id => $multisite_sites) {
      $multisite_query = $db->Execute("SELECT categories_description, language_id
                                       FROM " . TABLE_CATEGORIES_DESCRIPTION . " cd
                                       WHERE categories_id = " . (int)$multisite_cat_id);
      foreach ($multisite_query as $item) {
        $multisite_cat_desc = preg_replace('/<!--(.|\s)*?-->/', '', $item['categories_description']);
        while ($multisite_cat_desc['0'] == "\n") {
          $multisite_cat_desc = substr($multisite_cat_desc, 1);
        }
        if ($multisite_sites != '') {
          $multisite_cat_desc = "<!--$multisite_sites-->\n$multisite_cat_desc";
        }
        //echo $multisite_cat_id.' -> '.$multisite_cat_desc."\n";
        $sql = "UPDATE " . TABLE_CATEGORIES_DESCRIPTION . "
                SET categories_description = :multisiteCategoriesDescription
                WHERE language_id = " . (int)$item['language_id'] . "
                AND categories_id = " . (int)$multisite_cat_id;
        $sql = $db->bindVars($sql, ':multisiteCategoriesDescription', $multisite_cat_desc, 'string');
        $db->Execute($sql);
      }
    }
  }
  zen_redirect(zen_href_link(FILENAME_MULTISITE, 'mode=' . $mode . $site_param));
}
?>

<!doctype html>
<html <?php echo HTML_PARAMS; ?>>
  <head>
    <?php require DIR_WS_INCLUDES . 'admin_html_head.php'; ?>
    <script>
      function add_to_all_cats() {
        const new_site = $('#txt_site').val();
        if (new_site != '') {
          let form_elements = document.forms['editMultiSites'].elements;
          for (let element_id in form_elements) {
            if ((form_elements[element_id].name) && (form_elements[element_id].name.substr(0, 5) == 'site[')) {
              if (form_elements[element_id].value == '') {
                form_elements[element_id].value = new_site;
              } else {
                let split_sites = form_elements[element_id].value.split('-');
                let found = false;
                for (var i in split_sites) {
                  if (split_sites[i] == new_site) {
                    found = true;
                  }
                }
                if (!found) {
                  split_sites[split_sites.length] = new_site;
                }
                split_sites.sort();
                form_elements[element_id].value = split_sites.join('-');
              }
            }
          }
          $('#txt_site').val('');
        }
      }
      function remove_from_all_cats() {
        const rmv_site = $('#txt_site').val();
        if (rmv_site != '') {
          let form_elements = document.forms['editMultiSites'].elements;
          for (let element_id in form_elements) {
            if ((form_elements[element_id].name) && (form_elements[element_id].name.substr(0, 5) == 'site[')) {
              const split_sites = form_elements[element_id].value.split('-');
              let split_result = new Array();
              let j = 0;
              for (let i in split_sites) {
                if (split_sites[i] != rmv_site) {
                  split_result[j] = split_sites[i];
                  j++;
                }
              }
              split_result.sort();
              form_elements[element_id].value = split_result.join('-');
            }
          }
          $('#txt_site').val('');
        }
      }
    </script>
  </head>
  <body>
    <!-- header //-->
    <?php require DIR_WS_INCLUDES . 'header.php'; ?>
    <!-- header_eof //-->

    <!-- body //-->
    <div class="container-fluid">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="panel-title"><?php echo MULTISITE_TITLE; ?></h1>
        </div>
        <div class="panel-body">
          <div class="col-sm-12">
            <a href="<?php echo zen_href_link(FILENAME_MULTISITE, 'mode=display_config'); ?>" class="btn btn-info" role="button"><?php echo MULTISITE_CONFIG_LINK; ?></a>&nbsp;&nbsp;<a href="<?php echo zen_href_link(FILENAME_MULTISITE, 'mode=categories_sites'); ?>" class="btn btn-info" role="button"><?php echo MULTISITE_RELATIONS_LINK; ?></a>
          </div>
          <div class="col-sm-12">
            <?php
            switch ($mode) {
              case 'display_config':
                $config_query = $db->Execute("SELECT cg.configuration_group_title,c.configuration_key,c.configuration_value,c.configuration_title
                                              FROM " . TABLE_CONFIGURATION . " c
                                              LEFT JOIN " . TABLE_CONFIGURATION_GROUP . " cg ON c.configuration_group_id = cg.configuration_group_id
                                              ORDER BY cg.sort_order, c.sort_order");
                $current_group_title = '';
                $textAreaContent = '';
                foreach ($config_query as $item) {
                  if ($item['configuration_group_title'] != $current_group_title) {
                    $current_group_title = $item['configuration_group_title'];
                    $textAreaContent .= "\n/**\n";
                    $textAreaContent .= " * $current_group_title\n";
                    $textAreaContent .= " */\n";
                  }
                  $textAreaContent .= "define('" . ($item['configuration_key'] . "','" . $item['configuration_value'] . "'); //" . str_replace("\n", ' ', $item['configuration_title']) . "\n");
                }
                ?>

                <p><?php echo MULTISITE_CONFIG_TEXT; ?></p>
                <br><br>
                <?php echo zen_draw_textarea_field('code', '', '100', '40', $textAreaContent, 'class="form-control" style="width:90%;"'); ?>
                <?php
                break;
              case 'categories_sites':
                if (!isset($_GET['action']) || ($_GET['action'] != 'save')) {
                  ?>

                  <h2><?php echo MULTISITE_CATEGORIE_TITLE; ?></h2>

                  <p><?php echo MULTISITE_CATEGORIE_TEXT; ?></p>
                  <div class="form-horizontal row">
                    <div class="form-group">
                      <?php echo zen_draw_label(MULTISITE_CATEGORIE_ADD_LABEL, 'txt_site', 'class="col-sm-3 control-label"'); ?>
                      <div class="col-sm-9 col-md-6"><?php echo zen_draw_input_field('txt_size', '', 'id="txt_site" class="form-control"'); ?></div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-offset-3 col-sm-9 col-md-6">
                        <button type="button" onclick="add_to_all_cats();" class="btn btn-primary"><?php echo MULTISITE_BUTTON_ADD_ALL; ?></button>
                        <button type="button" onclick="remove_from_all_cats();" class="btn btn-primary"><?php echo MULTISITE_BUTTON_REMOVE_ALL; ?></button>
                        <span class="help-block"><?php echo MULTISITE_CATEGORIE_REMINDER_TEXT; ?></span>
                      </div>
                    </div>
                  </div>
                  <br><br>
                  <?php
                  $multisite_category_tree = zen_get_category_tree();
                  //print_r($multisite_category_tree);exit;
                  $multisite_list = [];
                  if (isset($_GET['site'])) {
                    $filter = ' AND cd.categories_description LIKE "%-' . $_GET['site'] . '-%" ';
                    $site_param = '&amp;site=' . $_GET['site'];
                  } else {
                    $filter = '';
                    $site_param = '';
                  }
                  $total_cats = count($multisite_category_tree) - '1';
                  foreach ($multisite_category_tree as $multisite_key => $multisite_category) {
                    if ($multisite_category['id'] == '0') {
                      unset($multisite_category_tree[$multisite_key]); //remove the top category
                    } else {
                      $multisite_query = $db->Execute("SELECT cd.categories_description,c.categories_status
                                                       FROM " . TABLE_CATEGORIES_DESCRIPTION . " cd
                                                       INNER JOIN " . TABLE_CATEGORIES . " c ON cd.categories_id = c.categories_id
                                                       WHERE c.categories_id = " . $multisite_category['id'] . "
                                                       " . $filter);
                      $sites = [];
                      if ($multisite_query->EOF) {
                        unset($multisite_category_tree[$multisite_key]);
                      } else {
                        foreach ($multisite_query as $item) {
                          $multisite_cat_desc = $item['categories_description'];
                          preg_match_all('/<!--(.|\s)*?-->/', $multisite_cat_desc, $multisite_comments, PREG_PATTERN_ORDER);
                          $multisite_cat_sites = [];
                          if (is_array($multisite_comments)) {
                            foreach ($multisite_comments['0'] as $multisite_comment) {
                              $multisite_comment = preg_replace('/\s\s+|/', '', $multisite_comment);
                              $multisite_cat_sites[] = substr($multisite_comment, 4, count($multisite_comment) - 4); //remove html comment
                            }
                          }
                          //Add to the list of all sites
                          $multisite_cat_sites_implode = implode('-', $multisite_cat_sites);
                          $new_sites = explode('-', $multisite_cat_sites_implode);
                          foreach ($new_sites as $site) {
                            if ($site != '') {
                              $sites[$site] = '1';
                            }
                          }
                        }
                        //print_r($sites);exit;
                        ksort($sites);
                        $multisite_cat_sites = [];
                        foreach ($sites as $site => $value) {
                          $multisite_cat_sites[] = $site;
                        }
                        $multisite_category_tree[$multisite_key]['sites'] = implode('-', $multisite_cat_sites);
                        $multisite_category_tree[$multisite_key]['status'] = $multisite_query->fields['categories_status'];
                        $multisite_category_tree[$multisite_key]['cPath_parent'] = MultisiteGetcPath($multisite_category['id']);
                        if ($multisite_category_tree[$multisite_key]['cPath_parent'] == '0') {
                          $multisite_category_tree[$multisite_key]['cPath'] = $multisite_category['id'];
                        } else {
                          $multisite_category_tree[$multisite_key]['cPath'] = $multisite_category_tree[$multisite_key]['cPath_parent'] . '_' . $multisite_category['id'];
                        }
                        foreach ($sites as $site => $value) {
                          if (!isset($multisite_list[$site])) {
                            $multisite_list[$site] = '1';
                          } else {
                            $multisite_list[$site]++;
                          }
                        }
                      }
                    }
                  }
                  arsort($multisite_list);
                  $display_sites = [];
                  $display_sites[] = '<a href="' . zen_href_link(FILENAME_MULTISITE, 'mode=' . $mode) . '" class="btn btn-primary" role="button">' . MULTISITE_CATEGORIE_ALL_TEXT . ' (' . $total_cats . ')</a>';
                  foreach ($multisite_list as $site => $cat_number) {
                    $display_sites[] = '<a href="' . zen_href_link(FILENAME_MULTISITE, 'mode=' . $mode . '&site=' . $site) . '" class="btn btn-primary" role="button">' . $site . ' (' . $cat_number . ')</a>';
                  }
                  ?>
                  <div class="col-sm-12">
                    <?php echo implode(' - ', $display_sites); ?>
                  </div>
                  <div class="row"><?php echo zen_draw_separator('pixel_trans.gif', '100%', '5px'); ?></div>
                  <?php echo zen_draw_form('editMultiSites', FILENAME_MULTISITE, 'mode=' . $mode . '&action=save' . $site_param, 'post', 'enctype="multipart/form-data" class="form-horizontal"'); ?>
                  <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary"><?php echo IMAGE_SAVE; ?></button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th><?php echo TABLE_HEADING_MULTISITE_ACTION; ?></th>
                        <th><?php echo TABLE_HEADING_MULTISITE_CATEGORIE; ?></th>
                        <th><?php echo TABLE_HEADING_MULTISITE_SITE; ?></th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php foreach ($multisite_category_tree as $multisite_category) { ?>
                        <tr>
                          <td>
                            <?php if ($multisite_category['status'] == '1') { ?>
                              <a target="_blank" href="<?php echo zen_href_link(FILENAME_CATEGORY_PRODUCT_LISTING, 'action=setflag_categories&flag=0&cID=' . $multisite_category['id'] . '&cPath=' . $multisite_category['cPath_parent']); ?>"><?php echo zen_image(DIR_WS_IMAGES . 'icon_green_on.gif', IMAGE_ICON_STATUS_ON); ?></a>
                            <?php } else { ?>
                              <a target="_blank" href="<?php echo zen_href_link(FILENAME_CATEGORY_PRODUCT_LISTING, 'action=setflag_categories&flag=1&cID=' . $multisite_category['id'] . '&cPath=' . $multisite_category['cPath_parent']); ?>"><?php echo zen_image(DIR_WS_IMAGES . 'icon_red_on.gif', IMAGE_ICON_STATUS_OFF); ?></a>
                            <?php } ?>
                            &nbsp;<a href="<?php echo zen_href_link(FILENAME_CATEGORIES, 'mode=edit_category&cPath=' . $multisite_category['cPath_parent'] . '&cID=' . $multisite_category['id']); ?>"><?php echo zen_image(DIR_WS_IMAGES . 'icon_edit.gif', ICON_EDIT); ?></a>
                          </td>
                          <td>
                            <a href="<?php echo zen_href_link(FILENAME_CATEGORIES, 'cPath=' . $multisite_category['cPath']); ?>"><?php echo str_replace(' ', '&nbsp;', str_replace('&nbsp;&nbsp;&nbsp;', '_&nbsp;', $multisite_category['text'])); ?></a>
                          </td>
                          <td>
                            <input class="multisite_sites" type="text" name="site[<?php echo $multisite_category['id']; ?>]" value="<?php echo $multisite_category['sites']; ?>"/>
                          </td>
                        </tr>
                      <?php } ?>
                    </tbody>
                  </table>
                  <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary"><?php echo IMAGE_SAVE; ?></button>
                  </div>
                  <?php echo '</form>'; ?>
                  <?php
                }
                break;
            }
            ?>
          </div>
          <!-- body_text_eof //-->
        </div>
      </div>
    </div>
    <!-- body_eof //-->

    <!-- footer //-->
    <?php require DIR_WS_INCLUDES . 'footer.php'; ?>
    <!-- footer_eof //-->
  </body>
</html>
<?php
require DIR_WS_INCLUDES . 'application_bottom.php';
