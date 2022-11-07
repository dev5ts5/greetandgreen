<?php
/**
 * Template Name: Checkout Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */
// include 'yourtheme/woocommerce/myaccount/my-account-custom-navigation.php';
// include 'woocommerce/myaccount/my-account-custom-navigation.php';

    echo do_shortcode('[woocommerce_checkout]');
    $billing_firstname =WC()->checkout->get_value('billing_first_name');
    $billing_lastname =WC()->checkout->get_value('billing_last_name');
    $billing_company =WC()->checkout->get_value('billing_company');
    $billing_address1 =WC()->checkout->get_value('billing_address_1');
    $billing_address2 =WC()->checkout->get_value('billing_address_2');
    $billing_city =WC()->checkout->get_value('billing_city');
    $billing_country =WC()->checkout->get_value('billing_country');
    $billing_postcode =WC()->checkout->get_value('billing_postcode');
?>
<!-- Main -->
