// json2html.js

export default function json2html(data) {
    // Start building the table with the required data attribute
    let html = '<table data-user="mahendarchikkolla@gmail.com">';

    // Extract headers from data keys, ensuring all columns are represented
    const headers = [...new Set(data.flatMap(Object.keys))];

    // Generate table header
    html += "<thead><tr>" + headers.map(header => `<th>${header}</th>`).join('') + "</tr></thead>";

    // Generate table body
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>" + headers.map(header => `<td>${row[header] ?? ''}</td>`).join('') + "</tr>";
    });
    html += "</tbody></table>";

    return html;
}
