<?php


if(isset($_SESSION['current_user_main'])){
    $prot = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http';
    $server = $_SERVER['SERVER_NAME'];
    $url_main = $prot.'://'.$server;
?>

<div class="green_dashboard_navigation">
    <ul class="dashboard-nav">
        <li class="dashboard-nav-list wishlist-icon">
            <a href="<?php echo $url_main.'/liste-de-souhaits/'; ?>" class="dashboard-nav-title">Wishlist</a>
        </li>
        <li class="dashboard-nav-list projects-icon">
            <a href="<?php echo $url_main.'/mon-compte/cart-product/'; ?>" class="dashboard-nav-title">Projets en Cours</a>   
        </li>
        <li class="dashboard-nav-list sending-icon">
            <a href="<?php echo $url_main.'/mon-compte/invois_main_html/'; ?>" class="dashboard-nav-title">Envois</a>  
        </li>
        <li class="dashboard-nav-list returns-icon">
            <a href="<?php echo $url_main.'/mon-compte/tracking-return/'; ?>" class="dashboard-nav-title">Suivi et Retours</a>
        </li>
    </ul>
</div>
<?php }
 
?>