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

