function update_packeg_value_clk() {
    alert("hello");
    return false;
}

function filter_product_chkbox() {
    var filter_value = [];
    if (document.getElementById('fil-tout').checked == true)
        filter_value.push("all");
    if (document.getElementById('fil-envoye').checked == true)
        filter_value.push("sent");
    if (document.getElementById('fil-non-envoye').checked == true)
        filter_value.push("notsent");

    jQuery('body').addClass('ajax_loader');
    jQuery.ajax({
        url: my_ajax_object_for_main_filter_invoise_table.ajax_url,

        cache: false,
        type: 'POST',
        data: {
            'action': 'for_main_filter_invoise_table_action',
            'filter': filter_value,

        },
        success: function(result) {
            result = result.slice(0, -1);
            console.log(result);
            $('#user_email_details_table_container').DataTable().destroy();
            $('#user_email_details_table_container').find('tbody').html(result);
            update_table();
            jQuery('body').removeClass('ajax_loader');
        }
    });

}

function select_package(key, price) {
    jQuery('.table-cho-tr').removeClass('active');
    jQuery('#table_tr_id_' + key).addClass('active');
    document.getElementById('product_price_email_template').innerHTML = parseFloat(document.getElementById('product_price_email_template').innerHTML) + parseFloat(price);
    jQuery('.close-icon').click();

}

function table_pagination_net_btn_clk()
{
    document.getElementById('selectall').checked = false;
}


