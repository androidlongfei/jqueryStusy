$(document).on('click', '#common', function () {
    sendAjax()
})

function sendAjax() {
    $.ajax({
        type: 'GET',

        url: 'http://localhost:3800/api/v1/employees ',

        data: '',

        success: function (data) {
            layer.open({
                content: '移动版和PC版不能同时存在同一页面' + JSON.stringify(data),
                btn: '我知道了'
            });
        },

        dataType: 'json'
    })
}
