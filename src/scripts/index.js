"use strict";
function init() {
    initDatePicker();
    loadJSON(afterLoadSuccess);
}

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function afterLoadSuccess(response) {
   let data = JSON.parse(response);
    render(data);
}
