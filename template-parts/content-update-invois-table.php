<?php session_start();

// for some time store product id;
// $_SESSION['invois_product_id']=51;	

$arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];

// $arr = get_user_meta( 46 , "user_email_details_core")[0];
// $arr = json_decode($arr,true);

// echo "<pre>";
// print_r($arr);
// echo "</pre>";

// die();

$count_details = 0;

foreach ($arr['emails'] as $details) 
{
	
    if(isset($args['filtered_emails'])) // main filter use
    {
        if(!in_array($details['user_email'] , $args['filtered_emails']))
            continue;											
    }
	$count_details++;
	?>
													
	<tr>

	<td class="table-checkbox">
		<div class="table-checkbox-cover">
			<input type="checkbox" onclick="email_details_checkbox_clk('<?php echo $details['user_email']; ?>' , 'check_box_<?php echo $count_details; ?>' )" id="check_box_<?php echo $count_details; ?>" name="invois_table_user_details_chkbox" >
		</div>
	</td>
	<td class="table-maile">
		<a class="table-maile-title"><?php echo $details['user_email']; ?></a>
	</td>
	<td class="table-prenom"><?php echo $details['user_first_name']; ?></td>
	<td class="table-nom"><?php echo $details['user_name']; ?></td>
	<td class="table-number">
		<?php echo $details['user_telephone']; ?>
	</td>
	<td class="table-invites">
		<?php
		$t = isset($details['additional_guest']['yes']) ? array() : "no";
		if(isset($details['additional_guest']['yes']))
		{
			foreach($details['additional_guest']['yes'] as $value)
			{
				foreach($value as $key => $value)
				{
					$t[] = $key."$%$".$value;
				}
			}
			$t = implode("$%^&*$" , $t);
		}
		?>
		<a onclick="popup_open_for_guests_details('<?php echo $t; ?>','<?php echo $details['user_email']; ?>')" class="table-invites-title">+<?php echo isset($details['additional_guest']['yes']) ? count($details['additional_guest']['yes']) : "0";?></a>
														
	</td>

													
	<td class="table-status">
		<?php 
		if( $arr['product_id'][$_SESSION['invois_product_id']."(*)". $_SESSION['unique_product_number'] ][$details['user_email']]['status'] == "yes" )
		{
			?>
			<span class="product-tag envoye">ENVOY??</span>
			<?php
		}
		?>

	</td>
	<td class="table-action">
		<?php 
		
		if( $arr['product_id'][ $_SESSION['invois_product_id']."(*)". $_SESSION['unique_product_number'] ][$details['user_email']]['status'] == "yes" )
		{
			?>
			<!-- <a onclick="popup_after_click_to_send_btn('<?php //echo $details['user_email']; ?>','<?php // echo $count_details; ?>')" class="table-btn theme-btn" id="invois_already_sent_btn_<?php // echo $count_details; ?>" data-overlay="true">RELANCER</a> -->
				<a class="table-btn theme-btn" id="invois_already_sent_btn_<?php echo $count_details; ?>" data-overlay="true">RELANCER</a>
			<?php
		}
		else
		{
			?>
			<!-- <a onclick="popup_after_click_to_send_btn('<?php //echo $details['user_email']; ?>','<?php // echo $count_details; ?>')" class="table-btn theme-btn-secound popup-opener" id="invois_to_send_btn_<?php // echo $count_details; ?>" data-popup-id="envoyermodel" data-overlay="true">ENVOYER</a> -->
				<a class="table-btn theme-btn-secound popup-opener" id="invois_to_send_btn_<?php echo $count_details; ?>" data-popup-id="envoyermodel" data-overlay="true">ENVOYER</a>
			<?php
		}
		?>
		
	</td>

	<td class="table-tag"></td>
	<td onclick="invois_record_delete_from_table('<?php echo $details['user_email']; ?>')" class="table-delete-icon"></td>
	</tr>
													
	<?php
}

?>