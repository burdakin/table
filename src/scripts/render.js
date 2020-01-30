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
