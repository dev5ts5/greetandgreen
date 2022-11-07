<?php session_start();
    $arr = get_option("package_details" );
    // echo "<pre>";
    // print_r($arr);
    // echo "</pre>";
?>
<thead class="table-thead">
<tr>
    <th class="memberships"><?php echo key($arr['heading']);  ?></th>
    <th class="cards"><?php echo $arr['heading']['DESTINATAIRES'][0]; ?></th>
    <th class="video"><?php echo $arr['heading']['DESTINATAIRES'][1]; ?></th>
    <th class="video-clips"><?php echo $arr['heading']['DESTINATAIRES'][2]; ?></th>
    <th class="choose-package"></th>
</tr>

</thead>

<tbody class="table-tbody">

    <?php
    $terms = get_the_terms ( $_SESSION['invois_product_id'], 'product_cat' )[0];
    // print_r($terms->name);
    
    foreach($arr['body'] as $key => $value)
    {
        if($terms->name == "CARTES")
            $price = $value['cartes'];
        if($terms->name == "VIDÉOS")
            $price = $value['videos'];
        if($terms->name == "CLIPS")
            $price = $value['clips'];
    ?>
        <?php
        if($key == "0-10")
        {
        ?>
        <tr class="table-cho-tr active" id="table_tr_id---<?php echo "$key"; ?>">
        <?php
        }
        else
        {
        ?>
        <tr class="table-cho-tr" id="table_tr_id---<?php echo "$key"; ?>">
        <?php
        }
        ?>
            <td class="memberships"><?php echo $key; ?></td>
            <td class="cards"><?php echo $value['cartes']; ?>€</td>
            <td class="video"><?php echo $value['videos']; ?>€</td>
            <td class="video-clips"><?php echo $value['clips']; ?>€</td>
            <td class="choose-package" onclick="select_package('<?php echo $key; ?>' , '<?php echo $price; ?>' )">
                <input class="radio-input" type="radio" id="table_tr_id---<?php echo "$key"; ?>---rdbtn" name="yes-no-btn" value="yes">
                <label class="radio-lable" for="choisir1">Choisir ce package</label>
            </td>
        </tr>
    <?php
    }
    ?>
    
</tbody>