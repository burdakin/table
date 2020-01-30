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

function initDatePicker() {
    const beforeDP = flatpickr("#before-date", {onChange: filterByDateStart});
    const afterDP = flatpickr("#after-date", {onChange: filterByDateEnd});
}

function filterByDate(selectedDates, field) {
    let table, tr, td, i, txtValue, tds;

    table = document.getElementById("os-table");
    const th = document.getElementById(field);

    let index = getElementIndex(th);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("td");
            td = tds[index];
            if (td) {
                txtValue = td.textContent || td.innerText;
                let d1 = new Date(txtValue);
                let d2 = selectedDates[0];
                let same = d2 ? d1.getTime() === d2.getTime() : true;
                if (same) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
    }
}

function filterByDateStart(selectedDates) {
    filterByDate(selectedDates, 'Creation_date')
}

function filterByDateEnd(selectedDates) {
    filterByDate(selectedDates, 'Finish_date')
}

function getElementIndex(node) {
    let index = 0;
    while ( (node = node.previousElementSibling) ) {
        index++;
    }
    return index;
}


function find() {
    let input, filter, table, tr, td, i, txtValue, j, tds;
    input = document.getElementById("search-num");
    filter = input.value.toUpperCase();
    table = document.getElementById("os-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("td");
        for (j = 0; j < tds.length; j++) {
            td = tds[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

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

function renderRow(row) {
    return `<tr>
                <td>${row.Number}</td>
                <td>${row.Name}</td>
                <td>${row.Priority}</td>
                <td>${row.Status}</td>
                <td>${row.Creation_date}</td>
                <td>${row.Finish_date}</td>
                <td>${row.Creator}</td>
            </tr>`;
}

function render(data) {
    let rows = '';
    data.forEach(function (row) {
        rows += renderRow(row);
    });
    document.getElementById('os-table').insertAdjacentHTML('beforeend', rows)
}
