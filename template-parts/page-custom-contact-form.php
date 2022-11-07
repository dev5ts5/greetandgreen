<?php 
/* Template Name: Contact Form */ 

?>
<?php get_header(); ?>


  <body class="client_progress_projects">

    <!-- if script not working -->
     <noscript>
        <div class="no-script-msg">Javascript is disabled in your browser. Some functionalities will not work properly. Please enable it.</div>
    </noscript>
     <!-- Main -->
     <main class="main-cover">
      
      <!-- contact -->
      <section class="client-edit-profile contact-page">
         <div class="container">
            <div class="contact-main">
               <div class="client-heading">
                  <p class="user_line">Besoin d’aide supplémentaire ?</p>
                  <h2 class="main-title">Nous contacter</h2>
               </div>
               <div class="contact-form">
                  <form class="edit-profile-form">
                  <?php 
                     echo do_shortcode('[contact-form-7 id="274" title="Contact Form 1"]');
                  ?>

               <!-- <div class="client-edit-group">
                        <div class="form-group">
                           <input type="text" placeholder="NOM" class="form-input">
                        </div>
                        <div class="form-group">
                           <input type="text" placeholder="PRÉNOM" class="form-input">
                        </div>
                     </div>
                     <div class="form-group">
                        <input type="email" placeholder="E-MAIL" class="form-input">
                     </div>
                     <div class="form-group">
                        <input type="tel" placeholder="TEL" class="form-input">
                     </div>
                     <div class="form-group">
                        <div class="select-main">
                           <select class="select-inner">
                              <option value="FRANCE">OBJET</option>
                              <option value="English">OBJET</option>
                              <option value="FRANCE">OBJET</option>
                           </select>
                        </div>
                     </div>
                     <div class="form-group">
                        <textarea name="Message" placeholder="MESSAGE" class="contact-textarea"></textarea>
                     </div>
                     <input class="contact-btn" type="submit" value="ENVOYER"> -->
                  </form>
                  <div class="contact-images">
                     <div class="con-img theme-img">
                        <img src="https://dev.greetandgreen.com/wp-content/uploads/2022/06/contact.png" alt="contact">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
       <!-- contact -->
     </main>
  </body>
</html>
<?php
get_footer();
?>
