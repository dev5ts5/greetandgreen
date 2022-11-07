<?php
/**
 *
 * @package Botega_Scratch_Theme
 */

get_header(); ?>

    <?php
    if ( have_posts() ) : while ( have_posts() ): the_post(); ?>

    <div id="post-<?php the_ID(); ?>" class="post_main_container">
        <div class="post-excerpt"><?php the_content(); ?></div>
    </div>

    <?php endwhile;
    endif;
    ?>

<?php get_footer(); ?>