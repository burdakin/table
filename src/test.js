function finder() {
    var input, filter, table, tr, td, i, txtValue, j, tds;
    input = document.getElementById("searchNum");
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