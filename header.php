<?php

/**
 * The header for our theme.
 *
 * @package Botega_Scratch_Theme
 *
 */
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php wp_head(); ?>
</head>





<!-- login popup contain start -->

<!-- signup choix popup -->

<?php
session_start();
if (isset($_SESSION['loggedin_user'])) 
{
  $loggedin_user = $_SESSION['loggedin_user']['ID'];
}
else
{
  $loggedin_user = '0';
}
?>
<div class="popup-cover-main cs-popup sign-comm signup-choix" id="choices_for_login_id" data-popup="signchoix">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">POUR CONTINUER, CRÉEZ VOTRE COMPTE !</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain signup-contain">
    <div class="choix-main-cover">
        <div class="choix-img">
          <img src="<?php echo site_url().'/wp-content/uploads/login/choix-icon.png'; ?>" alt="choix-image">
        </div>
        <div class="choix-cover">
          <a href="<?php echo site_url(); ?>/wp-login.php?loginSocial=facebook" rel="nofollow" aria-label="Continue with <b>Facebook</b>" data-plugin="nsl" data-action="connect" data-provider="facebook" class="choix-list choix-fb">
              <img src="<?php echo site_url().'/wp-content/uploads/login/facebook.png'; ?>" alt="facebook">
              <span>Inscription avec Facebook</span>
          </a>
          


          



          <?php
          
          // if(class_exists('NextendSocialLogin', false)){
          //   echo NextendSocialLogin::renderButtonsWithContainer();
          // }

          ?>


          <a class="choix-list choix-ma popup-opener"  data-overlay="true" href="<?php echo site_url(); ?>/wp-login.php?loginSocial=google" rel="nofollow" aria-label="Continue with <b>Google</b>" data-plugin="nsl" data-action="connect" data-provider="google">
            <!-- <span class="nsl-button nsl-button-default nsl-button-google" style="background-color:#dc4e41;"> -->
              <img src="<?php echo site_url().'/wp-content/uploads/login/google.png'; ?>" alt="google">
              <span>Inscription avec Google</span>
            <!-- </span> -->
          </a>

          
          <a class="choix-list choix-ma popup-opener" data-popup-id="signupmodel" data-overlay="true">
              <img src="<?php echo site_url().'/wp-content/uploads/login/mail.svg'; ?>" alt="mail">
              <span>Inscription avec l’e-mail</span>
          </a>
        </div>
        <p class="already-register">
          Déjà inscrit ?
          <a onclick="login_email_popup()" class="login-lable">Connectez-vous !</a>
        </p>
    </div>
    <div class="choix-review">
        <div class="choreview">
          <div class="choixreview-list">
              <div class="choixreview-cover">
                <div class="choretop">
                    <img src="<?php echo site_url().'/wp-content/uploads/login/trustpilot-logo.svg'; ?>" alt="trustpilot">
                    <p class="reviscro-lable">
                      TrustScore <strong>4.8 | </strong>
                      <a class="reviscro-count">267 reviews</a>
                    </p>
                </div>
                <div class="chorebottom">
                    <h2 class="chorebotitle">The experience was great</h2>
                    <p class="chorebotcont">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
              <div class="choixreview-cover">
                <div class="choretop">
                    <img src="<?php echo site_url().'/wp-content/uploads/login/trustpilot-logo.svg'; ?>" alt="trustpilot">
                    <p class="reviscro-lable">
                      TrustScore <strong>4.8 | </strong>
                      <a class="reviscro-count">267 reviews</a>
                    </p>
                </div>
                <div class="chorebottom">
                    <h2 class="chorebotitle">The experience was great</h2>
                    <p class="chorebotcont">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
              <div class="choixreview-cover">
                <div class="choretop">
                    <img src="<?php echo site_url().'/wp-content/uploads/login/trustpilot-logo.svg'; ?>" alt="trustpilot">
                    <p class="reviscro-lable">
                      TrustScore <strong>4.8 | </strong>
                      <a class="reviscro-count">267 reviews</a>
                    </p>
                </div>
                <div class="chorebottom">
                    <h2 class="chorebotitle">The experience was great</h2>
                    <p class="chorebotcont">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
              <div class="choixreview-cover">
                <div class="choretop">
                    <img src="<?php echo site_url().'/wp-content/uploads/login/trustpilot-logo.svg'; ?>" alt="trustpilot">
                    <p class="reviscro-lable">
                      TrustScore <strong>4.8 | </strong>
                      <a class="reviscro-count">267 reviews</a>
                    </p>
                </div>
                <div class="chorebottom">
                    <h2 class="chorebotitle">The experience was great</h2>
                    <p class="chorebotcont">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
              <div class="choixreview-cover">
                <div class="choretop">
                    <img src="<?php echo site_url().'/wp-content/uploads/login/trustpilot-logo.svg'; ?>" alt="trustpilot">
                    <p class="reviscro-lable">
                      TrustScore <strong>4.8 | </strong>
                      <a class="reviscro-count">267 reviews</a>
                    </p>
                </div>
                <div class="chorebottom">
                    <h2 class="chorebotitle">The experience was great</h2>
                    <p class="chorebotcont">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
    <p class="sign-bottitle">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  </div>
</div>
<!-- signup choix popup -->




<!-- signup mail model popup -->
<div class="popup-cover-main cs-popup sign-comm signup-main" data-popup="signupmodel">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">POUR CONTINUER, CRÉEZ VOTRE COMPTE !</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain signup-contain">
    <div class="signup-cover sigfirst-step">
        <div class="signup-main-form">
          <h2 class="popup-title-main">Inscription via e-mail</h2>
          <p class="signup-mess">
              <span class="signup-step">1/2</span>
              Rentrez d’abord votre adresse e-mail
          </p>
          <!-- <form action='#' onsubmit="return entered_email_form_action(this)" class="signup-form"> -->
          <div class="signup-form">
              <div class="firststep">
                <div class="form-group">
                    <label class="input-lable">VOTRE E-MAIL</label>
                    <input oninput="login_entered_email_tb()" id='login_entered_email_tb_id' type="email" placeholder="Votre e-mail ici" class="form-input">
                    <!-- add not valide tag -->
                    <p id="login_entered_email_not_valid" class="not-valide">E-mail non valide</p>
                </div>
              </div>
              <div class="signup-bottom">
                <div class="continu-btn">
                    <!-- add disable -->
                    <button id="login_entered_email_btn" type='submit' onclick="login_entered_email()" class="disable theme-btn">CONTINUER</button>
                </div>
                <div class="other-regis">
                    <a onclick="back_to_ohter_choice()" class="otheregis">< Autres moyens d’inscription</a>
                </div>
              </div>
          </div>
          <!-- </form> -->
        </div>
    </div>
    <p class="sign-bottitle">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  </div>
</div>
<!-- signup mail model popup -->

<!-- signup pass model popup -->
<div class="popup-cover-main cs-popup sign-comm signup-main" id="login_password_popup" data-popup="signupmodel2">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">POUR CONTINUER, CRÉEZ VOTRE COMPTE !</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain signup-contain">
    <div class="signup-cover sigsecount-step">
        <div class="signup-main-form">
          <h2 class="popup-title-main">Inscription via e-mail</h2>
          <p class="signup-mess">
              <span class="signup-step">2/2</span>
              Maintenant, créez votre mot de passe.
              <span class="carac-text">(8 caractères minimum)</span>
          </p>
          <div class="signup-form">
              <div class="secoundstep">
                <div id="login_show_pass" class="form-group">
                    <label class="input-lable">MOT DE PASSE</label>
                    <input type="password" class="form-input" id="login_pass_enter_id" oninput="login_pass_enter()">
                    <!-- add not valide tag -->
                    <p class="not-valide">
                      <!-- <span id="login_minimum_char_id" class="strong-orange">8 caractères minimum</span> -->
                      <span id="login_minimum_char_id" class="">8 caractères minimum</span>
                      <strong id="count_pass_char" class="success">1/8</strong>
                    </p>
                    <span onclick="login_pass_show_hide()" id="login_pass_show_hide_id" class="password-icon"></span>
                </div>
                <div class="form-group">
                    <label class="input-lable">CONFIRMATION DU MOT DE PASSE</label>
                    <input oninput="login_cpass()" id="login_cpass_id" type="password" class="form-input">
                    <p id="login_pass_not_match" class="not-valide">
                      Les mots de passe ne correspondent pas
                    </p>
                    <span onclick="login_cpass_show_hide()" id="login_cpass_show_hide_id" class="password-icon"></span>
                </div>
              </div>
              <div class="signup-bottom">
                <div class="continu-btn">
                    <!-- add disable -->
                    <a onclick="login_pass_enter_complete()" class="theme-btn">CONTINUER</a>
                </div>
                <div class="other-regis">
                    <a onclick="back_to_ohter_choice()" class="otheregis">< Autres moyens d’inscription</a>
                </div>
              </div>
          </div>
        </div>
    </div>
    <p class="sign-bottitle">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
  </div>
</div>
<!-- signup pass model popup -->

<!-- signup confirm model popup -->
<div class="popup-cover-main cs-popup sign-comm signup-main" id="login_confirm_popup_container" data-popup="signupmodel3">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">POUR CONTINUER, CRÉEZ VOTRE COMPTE !</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain signup-contain">
    <div class="signup-cover">
        <div class="signup-confirmation">
          <h2 class="popup-title-main">Confirmation d’inscription </h2>
          <p class="signup-mess signstep-fir">
              Ça y est, vous avez créé votre compte. <br> Afin d’y accéder, veuillez confirmer votre adresse <br> via l’e-mail que nous vous avons envoyé
          </p>
          <div class="continu-btn">
              <a onclick="login_confirm_btn()" class="theme-btn">C’EST BON</a>
          </div>
          <div class="resend-link">
              <a href="#" class="otheregis">Renvoyer le lien</a>
          </div>
        </div>
    </div>
  </div>
</div>
<!-- signup confirm model popup -->

<!-- signup confirm-optionnel model popup -->
<div class="popup-cover-main cs-popup sign-comm signup-main" id="login_fname_lname_popup" data-popup="signupmodel4">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">POUR CONTINUER, CRÉEZ VOTRE COMPTE !</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain signup-contain">
    <div class="signup-cover">
        <div class="signup-confirmopti">
          <h2 class="popup-title-main">C’est confirmé ! <br> Bienvenue </h2>
          <p class="signup-mess signstep-fir">
              Avant de commencer, <br> renseignez votre nom et prénom.
          </p>
          <div class="signupcop-form">
              <div class="signupcopstep">
                <div class="form-group">
                    <label class="input-lable">MOT DE PASSE</label>
                    <div class="comopt">
                      <input type="text" oninput="login_flname_input()" id="login_name" class="form-input" placeholder="Nom">
                    </div>
                    <div class="comopt">
                      <input type="text" oninput="login_flname_input()" id="login_fname" class="form-input" placeholder="Prénom">
                    </div>
                </div>
              </div>
              <div class="signup-bottom">
                <div class="continu-btn">
                    <!-- add disable -->
                    <a onclick="login_flname_sub_clk()" id="login_flname_sub" class="theme-btn disable">ENREGISTRER ET CONTINUER</a>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
<!-- signup confirm-optionnel model popup -->



<!-- login mail model popup -->
<div id="login_email_main_container" class="popup-cover-main cs-popup sign-comm signup-main" data-popup="loginmodel">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">CONNEXION</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain login-contain">
    <div class="signup-cover sigfirst-step">
        <div class="signup-main-form">
          <h2 class="popup-title-main">Connexion via e-mail</h2>

          <p class="signup-mess">
              Rentrez simplement l’e-mail associé <br> à votre compte. Nous enverrons un Lien Magique sur votre <br> boîte de réception pour vous connecter.
          </p>

          <p id="login_wrong_pass_email" style="color:red; text-align: center; display: none;" > votre mot de passe ou email était erroné. </p>

          <div class="signup-form">
              <div class="firststep">
                <div class="form-group">

                    <label class="input-lable">VOTRE E-MAIL</label>
                    <input type="email" placeholder="Votre e-mail ici" id="login_email_id" class="form-input" oninput="login_email_pass_enter()" >
                    <!-- add not valide tag -->



                    <!-- <p class="not-valide">E-mail non valide</p> -->



                </div>
                <div id="login_show_pass" class="form-group">
                  <label class="input-lable">MOT DE PASSE</label>
                  <input type="password" class="form-input" id="login_email_pass_enter_id" oninput="login_email_pass_enter()" >
                  <!-- add not valide tag -->
                  
                  <span onclick="login_email_pass_show_hide()" id="login_email_pass_show_hide_id" class="password-icon"></span>
                </div>
              </div>
              
              <div class="signup-bottom">
                <div class="continu-btn">
                    <!-- add disable -->
                    <a id="login_email_entered_submit_id" onclick="login_email_entered_submit()" class="theme-btn disable">CONTINUER</a>
                </div>
                <div class="other-regis">
                    <a href="#" class="otheregis">< Autres moyens de connexion</a>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
<!-- login mail model popup -->

<!-- login confirm model popup -->
<div class="popup-cover-main cs-popup sign-comm signup-main" data-popup="loginmodel2">
  <div class="popup-header">
    <h2 class="popup-title signus-icon">CONNEXION</h2>
    <span class="close-icon">close-icon</span>
  </div>
  <div class="popup-contain login-contain">
    <div class="signup-cover">
        <div class="signup-confirmation">
          <h2 class="popup-title-main">C’est envoyé !</h2>
          <p class="signup-mess signstep-fir">
              Le lien magique vous a été envoyé. <br> Consultez votre boîte de réception et cliquez sur le lien dans <br> l’email que nous vous avons fait parvenir.
          </p>
          <div class="continu-btn">
              <a href="#" class="theme-btn">C’EST BON</a>
          </div>
          <div class="resend-link">
              <a href="#" class="otheregis">Renvoyer le lien</a>
          </div>
        </div>
    </div>
  </div>
</div>
<!-- login confirm model popup -->





<div class="overlay">overlay</div>

<!-- login popup contain end -->




<body v_id="<?php echo $_SESSION['v_id']; ?>" user_ids="<?php echo $loggedin_user; ?>" <?php body_class(); ?>>
  <header class="header user-profile">
    <div class="top-head">
      <div class="container">

        <div class="country">
          <select class="coun-title">
            <option value="1">FRANÇAIS</option>
            <option value="2">FRANÇAIS</option>
            <option value="3">FRANÇAIS</option>
          </select>
        </div>
      </div>
    </div>
    <div class="bottom-head">
      <div class="container">
        <div class="bottom-head-row">
          <div class="bottom-head-col main-logo">
            <a href="https://dev.greetandgreen.com/" class="main_logo" title="Greet & Green">
              <img src="https://dev.greetandgreen.com/wp-content/uploads/2022/06/logo.svg" alt="Greet & Green">
              <span class="font-none">Greet & Green</span>
            </a>
          </div>
          <div class="bottom-head-col top-menu cs-popup" data-popup="togglemenu">
            <div class="head-menu">
              <nav class="main-menu">
                <ul class="menu-top">

                  <?php wp_nav_menu(array('theme_location' => 'max_mega_menu_1')); ?>
                </ul>
              </nav>
            </div>
            <div class="account-btn">
                <!-- <a href="#" class="theme-btn-secound head-btn menu-b2b-btn" title="B2B">B2B</a> -->
                <a class="theme-btn-secound head-btn menu-b2b-bt "  title="B2B">B2B</a>

                <?php
                if( is_user_logged_in() ){
                  $user = wp_get_current_user();
                  $user_id = $user->ID;
                  $attachment_id = get_user_meta($user_id, 'image', true);
                  $original_image_url = wp_get_attachment_url($attachment_id);
                  $my_account_menu =wc_get_account_menu_items();
                  
                  if($original_image_url == '')
                    $original_image_url = site_url().'/wp-content/uploads/login/guest-user.jpg';
                  
                  
                  ?>
                  <div class="user_img theme-img popup-opener" data-popup-id="togglemenu">
                  <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" class="user_profile">
                    <img src="<?php echo $original_image_url; ?>" alt="user-icon">
                  </a>
                </div>
                <div class="menu_items user-dropdown">
                  <ul class="menu-top">

                  
                <?php
                  $site_url =  get_site_url();
                  foreach($my_account_menu as $key => $value){
                    ?>
                      <li class="my_account_menu_item menu-list <?php echo $key; ?>"><a href='<?php echo $site_url."/mon-compte/".$key; ?>'><?php echo $value; ?></a></li>
                    <?php
                  }
                ?>
                </ul>
            </div>
                  <?php
                  
              } else {
                  ?>
                  <!-- <div class="user_login"><a href="<?php //echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" class="theme-btn-secound head-btn menu-b2b-btn" title="M’INSCRIRE / ME CONNECTER">M’INSCRIRE / ME CONNECTER</a></div> -->



                  <!-- <div class="user_login"><a onclick="login_main_container_open()"  class="theme-btn-secound head-btn menu-b2b-btn" title="M’INSCRIRE / ME CONNECTER">M’INSCRIRE / ME CONNECTER</a></div> -->

                  <div class="user_login"><a data-popup-id="signchoix" data-overlay="true" class="theme-btn-secound head-btn menu-b2b-btn popup-opener" title="M’INSCRIRE / ME CONNECTER">M’INSCRIRE / ME CONNECTER</a></div>


                  <?php
              }
                
                ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
<?php

if ( is_home() ) {
  ?>
  <div class="container123">
    <div class="row">
      <?php
} else {
    ?>
    <div class="container">
      <div class="row">
        <?php
}

?>









