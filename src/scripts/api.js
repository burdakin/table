function loadJSON(callback) {
    let request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', 'https://vk.com/doc16738174_533641298?hash=a7366cc1159270c800&dl=08c5585786109fd5a0', true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == "200") {
            callback(request.responseText);
        }
    };
    request.send(null);
}
