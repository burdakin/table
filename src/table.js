$(document).ready(function () {
    $.getJSON("build/json/os.json", function (data) {
        var os_data = " ";
        $.each(data, function (key,value) {
            os_data += '<tr>';
            os_data += '<td>' +value.Number+'</td>';
            os_data += '<td>' +value.Name+'</td>';
            os_data += '<td>' +value.Priority+'</td>';
            os_data += '<td>' +value.Status+'</td>';
            os_data += '<td>' +value.Creation_date+'</td>';
            os_data += '<td>' +value.Finish_date+'</td>';
            os_data += '<td>' +value.Creator+'</td>';
            os_data += '</tr>';
        });
        $('#os-table').append(os_data)
    });
});