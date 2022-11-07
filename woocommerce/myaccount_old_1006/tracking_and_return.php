<?php
session_start();
/**
 * Template Name: Tracking and Return
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/tracking_and_return.php
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

?>

<!-- Main -->
<main class="main-cover">
      <!-- client progress projects -->
         <section class="client-area-main">
            <div class="container">
               <div class="green_dashboard_tracking">
                  <form class="shipping-right-model tracking-modele">
                     
                     <label class="input-lable">
                        <span class="title-des">MODÈLE EN COURS DE SUIVI</span>
                        <span class="title-mob">MODÈLE EN COURS DE SUIVI</span>
                     </label>
                     <div class="shipping-select form-group">
                        <div id="tracking_select_for_product" >
                           <!-- <img src="assets/images/product-1.png" alt="product"> -->
                        <?php
                    
                    $temparr = array();
                    $temparr2 = array();
                    foreach ($_SESSION['cart_product_ids'] as $value) 
                    {
                        // if($value == $_SESSION['cart_product_ids'][0])
                        if($value == $_SESSION['invois_product_id'])
                        {
                            $temparr[] = array(
                                
                                'id' => $value,
                                'name' => get_the_title($value),
                                'url' => get_the_post_thumbnail_url($value),
                            );
                        }
                        else
                        {
                            $temparr2[] = array(
                                
                                'id' => $value,
                                'name' => get_the_title($value),
                                'url' => get_the_post_thumbnail_url($value),
                            );
                        }
                        
                    }
                    // print_r($temparr2);
                                            
                    get_template_part('template-parts/content' , 'update-all-products-drop-down-menu' , array(
                        'main_product' => $temparr[0],
                        'inner_products' => $temparr2,
                        'page' => 'tracking',
                    ));
                ?>
                        </div>
                     </div>
                     <a href="#" class="theme-btn-secound" title="PERSONNALISER">PERSONNALISER</a>
                  </form>
                  <div class="statistics-main">
                     <div class="statistics-cover">
                        <div class="dashborad_card">
                           <div class="card_heading">
                              <h2 class="card-title sending-icon">SUIVI DES ENVOIS - STATISTIQUES</h2>
                           </div>
                           <div class="card_content">

                           </div>
                        </div>
                     </div>
                     <div class="statistics-cover">
                        <div class="dashborad_card">
                           <div class="card_heading">
                              <h2 class="card-title returns-icon">SUIVI DES RÉPONSES - STATISTIQUES</h2>
                           </div>
                           <div class="card_content">

                           </div>
                        </div>
                     </div>
                     <div class="statistics-actions">
                        <p class="input-lable">ACTIONS</p>
                        <a href="#" class="theme-btn-secound" title="RELANCER NON OUVERTS">RELANCER NON OUVERTS</a>
                        <a href="#" class="theme-btn-secound" title="RELANCER NON RÉPONDUS">RELANCER NON RÉPONDUS</a>
                        <a href="#" class="theme-btn-secound popup-opener" title="GESTIONNAIRE DE TABLES" data-popup-id="managerpopup" data-overlay="true">GESTIONNAIRE DE TABLES</a>
                     </div>
                  </div>
                  <div class="dashboard-table-main">
                     <div class="dashboard-table">
                        <div class="dashboard-table-header popup-header">
                           <h2 class="popup-title user-icon">LISTE DES CONTACTS - NOM DU PROJET</h2>
                        </div>
                        <div class="dashboard-table-contain">
                           <form class="dashboard-table-cover filter-formes">
                              <div class="dashboard-table-form">
                                 <label class="input-lable title-mob">CONTACTS</label>
                                 <div class="form-group">
                                    <select class="projet-select">
                                       <option value="Action sur la sélection">Action sur la sélection</option>
                                       <option value="Envoyer">Envoyer</option>
                                       <option value="Supprimer">Supprimer</option>
                                       <option value="Modifier">Modifier</option>
                                    </select>
                                 </div>
                                 <a href="#" class="theme-btn-secound">APPLIQUER</a>
                              </div>
                              <div class="filter-main-cover">
                                 <h3 class="category-filter-lable">FILTRER PAR :</h3>
                                 <div class="filter-item-cover">
                                    <div class="filter-form-row">
                                       <input type="checkbox" id="fil-tout" class="filter-checkbox">
                                       <label for="fil-tout" class="filter-lable">TOUT</label>
                                    </div>
                                    <div class="filter-form-row">
                                       <input type="checkbox" id="fil-repondu" class="filter-checkbox">
                                       <label for="fil-repondu" class="filter-lable">
                                          RÉPONDU
                                       </label>
                                    </div>
                                    <div class="filter-form-row">
                                       <input type="checkbox" id="fil-ouvert" class="filter-checkbox">
                                       <label for="fil-ouvert" class="filter-lable">
                                          OUVERT
                                       </label>
                                    </div>
                                    <div class="filter-form-row">
                                       <input type="checkbox" id="fil-non-ouvert" class="filter-checkbox">
                                       <label for="fil-non-ouvert" class="filter-lable">
                                          NON OUVERT
                                       </label>
                                    </div>
                                    <div class="filter-form-row">
                                       <input type="checkbox" id="fil-non-recu" class="filter-checkbox">
                                       <label for="fil-non-recu" class="filter-lable">
                                          NON REÇU
                                       </label>
                                    </div>
                                 </div>
                                 <span class="table-line">180 lignes</span>
                              </div>
                           </form>
                           <form class="table-form table-invites">
                              <table class="table table-main" id="order_tracking_table_container">
                                 <thead class="table-thead">
                                    <tr>
                                       <th class="table-checkbox">
                                          <div class="table-checkbox-cover">
                                             <input type="checkbox" onclick="invois_checked_all_users()" id="selectall">
                                          </div>
                                       </th>
                                       <th class="table-maile">E-MAIL</th>
                                       <th class="table-prenom">PRÉNOM</th>
                                       <th class="table-nom">NOM</th>
                                       <th class="table-number">TÉLÉPHONE</th>
                                       <th class="table-invites">+1</th>
                                       <th class="table-tag">TAGS</th>
                                       <th class="table-status">STATUT</th>
                                       <th class="table-participe">PARTICIPE</th>
                                       <th class="table-action">ACTION</th>
                                    </tr>
                                 </thead>
                                 <tbody id="tracking_order_body_contain" class="table-tbody">
                                <?php
                                    if( count(get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
                                    {
                                        get_template_part('template-parts/content' , 'update-tracking-and-return-table');
                                    }  
                                ?>
                                <div class="popup-cover-main invites-table" >
                                    <div class="popup-header">
                                        <h2 class="popup-title user-icon">
                                            INVITÉS SUPPLÉMENTAIRES
                                        </h2>
                                        <span onclick="popup_close_for_guests_details()" class="close-icon">close-icon</span>
                                    </div>
                                    <div class="popup-contain">
                                        <h3 class="popup-title-main">
                                            {{PRÉNOM}} {{NOM}} <br>
                                            A {{NOMBRE}} INVITÉS SUPPLÉMENTAIRES
                                        </h3>
                                        <div class="popup_menu_for_add_addtional_guest_outside">
                                        
                                        </div>
                                    </div>
                                    <div class="popup-footer">
                                        <a onclick="update_guests_details_outside_btn_clk()" class="theme-btn">ENREGISTRER</a>
                                    </div>
                                </div>
                                 
                                 </tbody>
                              </table>
                           </form>

                           
                        </div>
                        <div class="dashboard-table-footer">
                           <div class="table-footer-cover">
                              <button class="theme-btn-secound">
                                 <span class="tabble-btn-toutes">AJOUTER DES CONTACTS</span>
                                 <span class="tabble-btn-ger-tous">GÉRER TOUS LES CONTACTS</span>
                                 </button>
                              <div class="table-footer-icon">
                                 <a href="#" class="download-icon">download</a>
                                 <a href="#" class="print-icon">print</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- client progress projects -->
     </main>
     <main class="main-cover address_book_popup" style="display:none;">
      <!-- client address book -->
         <section class="client-address-main">
            <div class="container">
               <h3 class="main-title">Carnet d’adresses</h3>
               <div class="add-contact-cover">
                  <a href="#" class="theme-btn" title="AJOUTER  UN CONTACT"> AJOUTER  UN CONTACT</a>
                  <a href="#" class="theme-btn" title="IMPORTER DES CONTACTS"> IMPORTER DES CONTACTS</a>
                  <p class="importer-label">fichiers .txt, .csv ou .xls</p>
               </div>
               <div class="address-table-main">
                  <table class="table address-book-table">
                     <thead class="table-thead">
                        <tr>
                           <th class="table-maile information-icon">E-MAIL</th>
                           <th class="table-nom information-icon">NOM</th>
                           <th class="table-prenom">PRÉNOM</th>
                           <th class="table-societe">SOCIETE</th>
                           <th class="table-address1">ADRESSE 1</th>
                           <th class="table-address2">ADRESSE 2</th>
                           <th class="table-cp">CP</th>
                           <th class="table-ville">VILLE</th>
                           <th class="table-pays">PAYS</th>
                        </tr>
                     </thead>
                     <tbody class="table-tbody">
                        <tr>
                           <td class="table-maile">
                              <a href="#" class="table-maile-title">hello@mathieu-dupuis.com</a>
                           </td>
                           <td class="table-nom">Mathieu</td>
                           <td class="table-prenom">Dupuis</td>
                           <td class="table-societe">Entreprise</td>
                           <td class="table-address1">31, Ceci est un numé....</td>
                           <td class="table-address2">Appt 301</td>
                           <td class="table-cp">33300</td>
                           <td class="table-ville">BORDEAUX</td>
                           <td class="table-pays">FRANCE</td>
                        </tr>
                     </tbody>
                  </table>
                  <div class="address-table-tfoot">
                     <div class="form-group">
                        <select class="projet-select">
                           <option value="Lignes1">Lignes par page : 5</option>
                           <option value="Lignes2">Lignes par page : 1</option>
                           <option value="Lignes3">Lignes par page : 2</option>
                           <option value="Lignes4">Lignes par page : 3</option>
                           <option value="Lignes5">Lignes par page : 4</option>
                        </select>
                     </div>
                     <div class="table-bottom-btn">
                        <p class="page-list">1 sur 100</p>
                        <a href="#" class="slick-btn previous disabled">previous</a>
                        <a href="#" class="slick-btn next">next</a>
                     </div>
                     <div class="dashboard-table-footer">
                        <div class="table-footer-cover">
                           <div class="table-footer-icon">
                              <a href="#" class="download-icon">download</a>
                              <a href="#" class="print-icon">print</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <!-- client address book -->
     </main>

     <!-- Table Manager popup -->
     <div class="popup-cover-main manager-popup cs-popup" data-popup="managerpopup">
      <div class="popup-header">
         <h2 class="popup-title gestionn-icon">GESTIONNAIRE DE TABLES</h2>
         <span class="close-icon">close-icon</span>
      </div>
      <div class="popup-contain">
         <p class="manager-popup-contain">Placez vos invités comme vous le souhaitez en créant vos tables.</p>
         <div class="manager-main">
            <ul class="manager-cover">
               <li class="manager-list">
                  <div class="manager-title">
                     <span class="country-list">BRÉSIL</span>
                     <span class="guests-list">6 invités</span>
                  </div>
                  <ul class="guests-cover">
                     <li class="guests-name guests-close-icon">
                        <input type="text" placeholder="Tapez un nom d’invité..." value="Julien Durant">
                     </li>
                     <li class="guests-name">Nom invité 2</li>
                     <li class="guests-name">Nom invité 3</li>
                     <li class="guests-name">Nom invité 4</li>
                     <li class="guests-name">Nom invité 5</li>
                     <li class="guests-name">Nom invité 6</li>
                  </ul>
               </li>
               <li class="manager-list">
                  <div class="manager-title">
                     <span class="country-list">FRANCE</span>
                     <span class="guests-list">6 invités</span>
                  </div>
                  <ul class="guests-cover">
                     <li class="guests-name guests-close-icon">
                        <input type="text" placeholder="Tapez un nom d’invité..." value="Nom invité 7">
                     </li>
                     <li class="guests-name">Nom invité 8</li>
                     <li class="guests-name">Nom invité 9</li>
                     <li class="guests-name">Nom invité 10</li>
                     <li class="guests-name">Nom invité 11</li>
                     <li class="guests-name">Nom invité 12</li>
                  </ul>
               </li>
               <li class="manager-list">
                  <div class="manager-title">
                     <span class="country-list">ESPAGNE</span>
                     <span class="guests-list">6 invités</span>
                  </div>
                  <ul class="guests-cover">
                     <li class="guests-name guests-close-icon">
                        <input type="text" placeholder="Tapez un nom d’invité..." value="Nom invité 13">
                     </li>
                     <li class="guests-name">Nom invité 14</li>
                     <li class="guests-name">Nom invité 15</li>
                     <li class="guests-name">Nom invité 16</li>
                     <li class="guests-name">Nom invité 17</li>
                     <li class="guests-name">Nom invité 18</li>
                     <li class="guests-name">Nom invité 19</li>
                  </ul>
               </li>
               <li class="manager-list manager-search">
                  
                  <ul class="guests-cover">
                     <li class="guests-name">
                        <input type="text" placeholder="Tapez un nom d’invité...">
                     </li>
                  </ul>
               </li>
               <li class="manager-list manager-add-list">
                  <div class="manager-add-cover">manager add list</div>
               </li>
            </ul>
         </div>
      </div>
      <div class="popup-footer dashboard-table-footer">
         <div class="table-footer-cover">
            <a href="#" class="theme-btn">
               ENREGISTRER
            </a>
            <div class="table-footer-icon">
               <a href="#" class="download-icon">download</a>
               <a href="#" class="print-icon">print</a>
            </div>
         </div>
      </div>
   </div>
   <!-- /Table Manager popup -->

      <!-- overlay -->
      <div class="overlay">overlay</div>
      

     
