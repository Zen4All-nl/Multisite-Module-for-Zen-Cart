<?php
//dutch translation Zencart ; v1.3.7 2007-09-11 by Edwin Wiering ; v1.3.5 2006-09-04 by joostvdl ; dutch translation Zencart v1.2.6d 2005-11-12  by dutchguy 
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
//  $Id: ezpages.php 2827 2006-01-08 19:46:40Z ajeh $
//
define('HEADING_TITLE', 'EZ-Pagina\'s');
define('TABLE_HEADING_PAGES', 'Pagina titel');
define('TABLE_HEADING_ACTION', 'Actie');
define('TABLE_HEADING_VSORT_ORDER', 'Sidebox sorteervolgorde');
define('TABLE_HEADING_HSORT_ORDER', 'Footer sorteervolgorde');
define('TEXT_PAGES_TITLE', 'Pagina titel:');
define('TEXT_PAGES_HTML_TEXT', 'HTML Inhoud:');
define('TABLE_HEADING_DATE_ADDED', 'Datum toegevoegd:');
define('TEXT_PAGES_STATUS_CHANGE', 'Statuswijziging: %s');
define('TEXT_INFO_DELETE_INTRO', 'Wilt u deze pagina verwijderen?');
define('SUCCESS_PAGE_INSERTED', 'Succes: de pagina is toegevoegd.');
define('SUCCESS_PAGE_UPDATED', 'Succes: de pagina is gewijzigd.');
define('SUCCESS_PAGE_REMOVED', 'Succes: de pagina is verwijderd.');
define('SUCCESS_PAGE_STATUS_UPDATED', 'Succes: de status van deze pagina is gewijzigd.');
define('ERROR_PAGE_TITLE_REQUIRED', 'Fout: Paginatitel is verplicht.');
define('ERROR_UNKNOWN_STATUS_FLAG', 'Fout: onbekende status.');
define('ERROR_MULTIPLE_HTML_URL', 'Fout: U heeft meerdere instellingen opgegeven terwijl er slechts één per link is toegestaan ...<br />Kies uit: HTML inhoud -or- Interne Link URL -or- Externe Link URL');

define('TABLE_HEADING_ID', 'ID');
define('TABLE_HEADING_STATUS_HEADER', 'Header:');
define('TABLE_HEADING_STATUS_SIDEBOX', 'Sidebox:');
define('TABLE_HEADING_STATUS_FOOTER', 'Footer:');
define('TABLE_HEADING_STATUS_TOC', 'Inhoudsopgave:');
define('TABLE_HEADING_CHAPTER', 'Hoofdstuk:');

define('TABLE_HEADING_PAGE_OPEN_NEW_WINDOW', 'Open een nieuw venster:');
define('TABLE_HEADING_PAGE_IS_SSL', 'Pagina via SSL:');

define('TEXT_DISPLAY_NUMBER_OF_PAGES', 'Toon <b>%d</b> tot <b>%d</b> (van <b>%d</b> pagina\'s)');
define('IMAGE_NEW_PAGE', 'Nieuwe Pagina');
define('TEXT_INFO_PAGE_IMAGE', 'Afbeelding');
define('TEXT_INFO_CURRENT_IMAGE', 'Huidige afbeelding:');
define('TEXT_INFO_PAGES_ID', 'ID: ');
define('TEXT_INFO_PAGES_ID_SELECT', 'Kies een pagina ...');

define('TEXT_HEADER_SORT_ORDER', 'Volgorde:');
define('TEXT_SIDEBOX_SORT_ORDER', 'Volgorde:');
define('TEXT_FOOTER_SORT_ORDER', 'Volgorde:');
define('TEXT_TOC_SORT_ORDER', 'Volgorde:');
define('TEXT_CHAPTER', 'Vorig/volgend hoofdstuk:');
define('TABLE_HEADING_CHAPTER_PREV_NEXT', 'Hoofdstuk:&nbsp;<br />');

define('TEXT_HEADER_SORT_ORDER_EXPLAIN', 'Header-sorteervolgorde gebruikt voor het genereren van de pagina\'s in een enkele HEADER-regel; De waarde van de sorteervolgorde moet groter dan nul zijn teneinde deze pagina op regelbasis te tonen');
define('TEXT_SIDEBOX_ORDER_EXPLAIN', 'Sidebox-sorteervolgorde gebruikt voor het genereren van de pagina\'s in een verticale volgorde;sorteervolgorde gebruikt voor het genereren van de pagina\'s inteneinde deze pagina\'s onder elkaar te tonen, anders wordt het beschouwd als HTML tekst for speciale doeleinden');
define('TEXT_FOOTER_ORDER_EXPLAIN', 'Footer-sorteervolgorde gebruikt voor het genereren van de pagina\'s in een enkele FOOTER-regel; De waarde van de sorteervolgorde moet groter dan nul zijn teneinde deze pagina op regelbasis te tonen');
define('TEXT_TOC_SORT_ORDER_EXPLAIN', 'Inhoudsopgave-sorteervolgorde gebruikt voor het genereren van de pagina\'s op regelbasis (header/footer, etc) of onder elkaar, gebasserd op individuele instellingen; De waarde van de sorteervolgorde moet groter dan nul zijn teneinde deze pagina te tonen');
define('TEXT_CHAPTER_EXPLAIN', 'De (vorige/volgende) hoofdstukken zijn op volgorde van de inhoudsopgave. Links in de inhoudsopgave bestaan uit de pagina\'s die overeenkomen met het hoofdstuknummer en op volgorde volgens de inhoudsopgave');

define('TEXT_ALT_URL', 'Interne Link URL:');
define('TEXT_ALT_URL_EXPLAIN', 'Indien ingevuld, zal de pagina-inhoud genegeerd worden en wordt de INTERNE alternatieve URL gebruikt<br />Bijvoorbeeld naar Recensies: index.php?main_page=reviews<br />Bijvoorbeeld naar Mijn Account: index.php?main_page=account en met SSL geactiveerd');

define('TEXT_ALT_URL_EXTERNAL', 'Externe Link URL:');
define('TEXT_ALT_URL_EXTERNAL_EXPLAIN', 'Indien ingevuld, zal de pagina-inhoud genegeerd worden en wordt de EXTERNE alternatieve URL gebruikt<br />Bijvoorbeeld naar de externe link: http://www.sashbox.net');

define('TEXT_SORT_CHAPTER_TOC_TITLE_INFO', 'Sorteervolgorde: ');
define('TEXT_SORT_CHAPTER_TOC_TITLE', 'Hoofdstuk/Inhoudsopgave');
define('TEXT_SORT_HEADER_TITLE', 'Header');
define('TEXT_SORT_SIDEBOX_TITLE', 'Sidebox');
define('TEXT_SORT_FOOTER_TITLE', 'Footer');
define('TEXT_SORT_PAGE_TITLE', 'Pagina titel');
define('TEXT_SORT_PAGE_ID_TITLE', 'Pagina ID, Titel');

define('TEXT_PAGE_TITLE', 'Titel:');
define('TEXT_WARNING_MULTIPLE_SETTINGS', '<strong>WAARSCHUWING: Meerdere Link Definities</strong>');

// Multi site
define('EZPAGE_MULTI_FILTER','Multisite Filter');
define('EZPAGE_MULTI_EXPLAIN','Zie Multisite Notes, Geef de sites op als &lt;!--Sitenaam 1-Sitenaam--&gt;');
?>
