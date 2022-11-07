<?php

/**
 * Orders
 *
 * Shows orders on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/orders.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.7.0
 */

defined('ABSPATH') || exit;
// require get_template_directory() . '/woocommerce/myaccount/my_account_navigation.php';
do_action('woocommerce_before_account_orders', $has_orders); ?>

<?php if ($has_orders) : ?>
   
   <body class="client_commandes_factures">

<!-- if script not working -->
 <noscript>
    <div class="no-script-msg">Javascript is disabled in your browser. Some functionalities will not work properly. Please enable it.</div>
</noscript>
   <section class="client-commandes-factures">
      <div class="dashboard_container container">
         <div class="comm-main">
            <div class="client-heading">
               <h2 class="main-title">Mes Commandes</h2>
            </div>
            <div class="comm-select">
               <div class="form-group">
                  <div class="select-main">
                  <form action="" method="post">
                     <select class="select-inner order_sorting" name="order_sorting[]" id="order_sorting">
                        <option value="default">TRIER PAR</option>
                        <option value="new_to_old">TRIER PAR : Du plus récent au plus ancien </option>
                        <option value="old_to_new">TRIER PAR : Du plus ancien au plus récent </option>
                     </select>
                  </form>
                  </div>
               </div>
               <form>
                  <div class="form-group comm-search">
                     <label class="search-label">RECHERCHER</label>
                     <input type="search" placeholder="Numéro de facture" class="form-input order_no_filter">
                  </div>
               </form>
            </div>
         </div>
         <div class="order_main_cls">
         <?php
         $order_sort = $_POST['order_sorting'];  
         
         foreach ($customer_orders->orders as $customer_order) {
            $order = wc_get_order($customer_order);
            $orders_id = $order->get_id();
            // $order = wc_get_order( $order_id ); 
            $user_id   = $order->get_user_id();
            $order_new_date = date_format($order->get_date_created(),"d/m/Y");
            // Iterating through each "line" items in the order
         ?>
            <div class="comm-box" data-order-id="<?php echo $order->get_order_number(); ?>">
               <div class="comm-heading">
                  <p class="comm-text">COMMANDE <a href="<?php echo esc_url($order->get_view_order_url()); ?>">
                        <?php echo "#" . $order->get_order_number(); ?>
                     </a></p>
                  <p class="comm-text">PASSÉE LE <?php echo $order_new_date; ?></time></p>
               </div>

               <div class="scroll-bar">
                  <table class="table comm-table">
                     <thead class="table-thead">
                        <tr>
                           <th class="model">MODÈLE</th>
                           <th class="number">NOMBRE INVITÉS</th>
                           <th class="price">PRIX HT</th>
                           <th class="tva">TVA 20%</th>
                           <th class="price-tcc">PRIX TTC</th>
                        </tr>
                     </thead>
                     <?php

                     foreach ($order->get_items() as $item_id => $item) {

                        // Get an instance of corresponding the WC_Product object
                        $product        = $item->get_product();
                        $product_id = $product->get_id();
                        $active_price   = $product->get_price(); // The product active raw price
                        $regular_price  = $product->get_sale_price(); // The product raw sale price
                        $sale_price     = $product->get_regular_price(); // The product raw regular price
                        $product_name   = $item->get_name(); // Get the item name (product name)
                        $item_quantity  = $item->get_quantity(); // Get the item quantity
                        $item_subtotal  = $item->get_subtotal(); // Get the item line total non discounted
                        $item_subto_tax = $item->get_subtotal_tax(); // Get the item line total tax non discounted
                        $item_total     = $item->get_total(); // Get the item line total discounted
                        $item_currency_symbol = get_woocommerce_currency_symbol();
                        $item_total_tax = $item->get_total_tax(); // Get the item line total  tax discounted
                        // $item_taxes     = $item->get_taxes(); // Get the item taxes array
                        // $item_tax_class = $item->get_tax_class(); // Get the item tax class
                        // $item_tax_status = $item->get_tax_status(); // Get the item tax status
                        // $item_downloads = $item->get_item_downloads(); // Get the item downloads
                        $item_url = $product->get_permalink();
                     ?>
                        <tbody class="table-tbody">
                           <tr>
                              <td class="model"><?php echo $product_name; ?></td>
                              <td class="number">10</td>
                              <td class="price"><?php echo $active_price . " " . $item_currency_symbol; ?></td>
                              <td class="tva"><?php echo $item_subto_tax . " " . $item_currency_symbol;; ?></td>
                              <td class="price-tcc"><?php echo $item_subtotal . " " . $item_currency_symbol; ?></td>
                           </tr>
                        </tbody>
                     <?php
                     } ?>
                  </table>
               </div>
               <div class="comm-footer">
                  <div class="comm-btn">
                  <div class="theme-btn order_invoice_btn">
                     <?php echo do_shortcode('[wcpdf_download_invoice link_text="TÉLÉCHARGER LA FACTURE" order_id='.$orders_id.']'); ?>
                  </div>
                     <a href="<?php echo $item_url; ?>" class="theme-btn-secound" title="ajouter un contact">VOIR LE PROJET</a>
                  </div>
                  <div class="comm-total">
                     <p class="total-text">TOTAL TTC</p>
                     <span class="total-number"><?php echo $item_total . " " . $item_currency_symbol; ?></span>
                  </div>
               </div>
            </div>
         <?php
         }
         ?>
         </div>
      </div>
   </section>

   

   <!-- Optional JavaScript -->
   <script src="assets/js/jquery-2.2.4.min.js"></script>
   <script src="assets/js/slick.js"></script>
   <script src="assets/js/custom.js"></script>
   </body>
   <?php do_action('woocommerce_before_account_orders_pagination'); ?>

   <?php if (1 < $customer_orders->max_num_pages) : ?>
      <div class="woocommerce-pagination woocommerce-pagination--without-numbers woocommerce-Pagination">
         <?php if (1 !== $current_page) : ?>
            <a class="woocommerce-button woocommerce-button--previous woocommerce-Button woocommerce-Button--previous button" href="<?php echo esc_url(wc_get_endpoint_url('orders', $current_page - 1)); ?>"><?php esc_html_e('Previous', 'woocommerce'); ?></a>
         <?php endif; ?>

         <?php if (intval($customer_orders->max_num_pages) !== $current_page) : ?>
            <a class="woocommerce-button woocommerce-button--next woocommerce-Button woocommerce-Button--next button" href="<?php echo esc_url(wc_get_endpoint_url('orders', $current_page + 1)); ?>"><?php esc_html_e('Next', 'woocommerce'); ?></a>
         <?php endif; ?>
      </div>
   <?php endif; ?>

<?php else : ?>
   <div class="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info">
      <a class="woocommerce-Button button" href="<?php echo esc_url(apply_filters('woocommerce_return_to_shop_redirect', wc_get_page_permalink('shop'))); ?>"><?php esc_html_e('Browse products', 'woocommerce'); ?></a>
      <?php esc_html_e('No order has been made yet.', 'woocommerce'); ?>
   </div>
<?php endif; ?>

<?php do_action('woocommerce_after_account_orders', $has_orders); ?>