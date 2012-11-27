ALTER TABLE `orders` DROP `order_site`;
ALTER TABLE `ezpages` DROP `ezpages_description`;

DELETE FROM admin_pages WHERE page_key = 'toolsMultiSite' LIMIT 1;