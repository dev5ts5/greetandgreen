<?php


// if(isset($_SESSION['current_user_main'])){
?>

<div class="green_dashboard_navigation">
    <ul class="dashboard-nav">
        <li class="dashboard-nav-list wishlist-icon">
            <a href="<?php echo "https://" . $_SERVER['SERVER_NAME'] . "/liste-de-souhaits/"; ?>" class="dashboard-nav-title">Wishlist</a>
        </li>
        <li class="dashboard-nav-list projects-icon">
            <a href="<?php echo "https://" . $_SERVER['SERVER_NAME'] . "/mon-compte/cart-product/"; ?>" class="dashboard-nav-title">Projets en Cours</a>   
        </li>
        <li class="dashboard-nav-list sending-icon">
            <a id="envois_main_header" href="<?php echo "https://" . $_SERVER['SERVER_NAME'] . "/mon-compte/invois_main_html/"; ?>" class="dashboard-nav-title">Envois</a>  
        </li>
        <li class="dashboard-nav-list returns-icon">
            <a href="<?php echo "https://" . $_SERVER['SERVER_NAME'] . "/mon-compte/tracking_and_return/"; ?>" class="dashboard-nav-title">Suivi et Retours</a>
        </li>
    </ul>
</div>
<?php 
// }
 
?>