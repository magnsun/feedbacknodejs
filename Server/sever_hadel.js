user_info =
    {
        system_info: [
            {'browesr': browser},
            {'brower-version': version},
            {'cookies': cookieEnabled},
            {'os': os},
            {'os-version': osVersion}
        ]
}

$.ajax({
    url: 'http://127.0.0.1:4560',
    data: {"info" : JSON.stringify(user_info)},
    type: 'POST',
    jsonCallback: 'callback',
    success: function(data) {
        var ret = jQuery.parseJSON(data);
        $('#lblResponse').html(ret.msg);
        console.log('success');
    },
    error: function(xhr, status, error) {
        console.log('Error:' + error.message);
        $('#lblResponse').html('Error connecting to the server.');
    }
});