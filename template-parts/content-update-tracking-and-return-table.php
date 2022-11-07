<?php session_start();

// for some time store product id;
// $_SESSION['invois_product_id']=51;	

// die();

$arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];

// echo "svklkdmnsoklfvn".$_SESSION['invois_product_id'];


// echo "sdjsdkljdssdk";
$count_details = 0;

?>

<tr>
	<td class="table-checkbox">
		<div class="table-checkbox-cover">
			<input type="checkbox" id="1">
		</div>
	</td>
	<td class="table-maile">A@A.A</td>
	<td class="table-prenom">AAA</td>
	<td class="table-nom">AAAAAA</td>
	<td class="table-number">451534</td>
	<td class="table-invites">+2</td>
	<td class="table-tag filter-item-cover">
		<div class="filter-form-row">
			<input type="checkbox" id="fil-carte" class="filter-checkbox">
			<label for="fil-carte" class="filter-lable">famille</label>
		</div>
	</td>
	<td class="table-status">
		<div id="status_cropdown_id_custom_1" class="status-drop">
			<p class="status-drop-list active">
				<span class="product-tag envoye">RÉPONDU</span>
				<!-- <a onclick="open_product_status_dropdown('status_cropdown_id_custom_1')" class="product-tag-dropdown-select">choose</a> -->
			</p>
			<ul class="status-drop-inner">
				<li class="status-drop-list">
					<span class="product-tag cours-envoi">OUVERT</span>
				</li>
				<li class="status-drop-list">
					<span class="product-tag cours-design">NON OUVERT</span>
				</li>
				<li class="status-drop-list">
					<span class="product-tag non">NON REÇU</span>
				</li>
			</ul>
		</div>
	</td>
	<td class="table-participe">
		<span class="product-tag envoye">OUI</span>
	</td>
	<td class="table-action"><a href="#" class="table-btn theme-btn disabled">RELANCER</a></td>
</tr>

<?php
return;
foreach ($arr['emails'] as $details) {

	$count_details++;
	if ($arr['product_id'][$_SESSION['invois_product_id']][$details['user_email']]['status'] == "yes") {
?>
		<tr>

			<td class="table-checkbox">
				<div class="table-checkbox-cover">
					<input type="checkbox" onclick="email_details_checkbox_clk('<?php echo $details['user_email']; ?>' , 'check_box_<?php echo $count_details; ?>' )" id="check_box_<?php echo $count_details; ?>" name="invois_table_user_details_chkbox">
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
				if (isset($details['additional_guest']['yes'])) {
					foreach ($details['additional_guest']['yes'] as $value) {
						foreach ($value as $key => $value) {
							$t[] = $key . "$%$" . $value;
						}
					}
					$t = implode("$%^&*$", $t);
				}
				?>
				<a onclick="popup_open_for_guests_details('<?php echo $t; ?>','<?php echo $details['user_email']; ?>')" class="table-invites-title">+<?php echo isset($details['additional_guest']['yes']) ? count($details['additional_guest']['yes']) : "0"; ?></a>

			</td>

			<td class="table-tag"></td>

			<td class="table-status">
				<?php

				if ($arr['product_id'][$_SESSION['invois_product_id']][$details['user_email']]['status'] == "yes") {
				?>
					<!-- <span class="product-tag envoye"></span> -->
				<?php
				}
				?>

			</td>
			<td class="table-participe"></td>
			<td class="table-action">
				<?php
				if ($arr['product_id'][$_SESSION['invois_product_id']][$details['user_email']]['status'] == "yes") {
				?>
					<a onclick="popup_after_click_to_send_btn('<?php echo $details['user_email']; ?>','<?php echo $count_details; ?>')" class="table-btn theme-btn" id="invois_already_sent_btn_<?php echo $count_details; ?>" data-overlay="true">RELANCER</a>
				<?php
				}

				?>

			</td>

		</tr>

<?php
	}
}

?>