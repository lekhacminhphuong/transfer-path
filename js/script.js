
google.charts.load("current", { packages: ["sankey"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = new google.visualization.DataTable();
    var x = "test";
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    // Class List Tooltip
    data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } })

    data.addRows([
        ['SCC', 'Informatics', 3, createCustomHTMLContent('Prerequisite Courses for Informatics', info)],
        ['SCC', 'Computer Science', 2, createCustomHTMLContent('Prerequisite Courses for Computer Science', cse)],
        ['SCC', 'Math', 2, createCustomHTMLContent('Prerequisite Courses for Mathematics', math)],
        ['SCC', 'Chemistry', 2, createCustomHTMLContent('Prerequisite Courses for Chemistry', chem)],
        ['Informatics', 'UX Desginer', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Informatics', 'Data Analyst', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Informatics', 'Project Manager', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Informatics', 'Software Engineer', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Informatics', 'Data Scientist', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Computer Science', 'Software Engineer', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Computer Science', 'Data Scienctist', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Math', 'Math Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Math', 'Math Professor', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Chemistry', 'Chemistry Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Chemistry', 'Chemistry Professor', 1, 'Class: CSC142, STAT146, MATH152']
    ]);
    // Set Chart Color
    var colors = ['red'];
    // Set chart options
    var options = {
        height: 700,
        sankey: {
            node: {
                nodePadding: 40,
                width: 20,
                colors: colors,
                label: {
                    fillOpacity: 0.05,
                    color: colors,
                    fontSize: 20,
                    bold: true
                }
            },
            link: {
                colorMode: 'solid',
                colors: color1
            }
        },
        tooltip: { isHtml: true },

    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
}

createCustomHTMLContent = (heading, data) => {
    const toolTip = `<div class="card border-0">
    
    <div class="card-body">
    <div class="card-title"><h5>${heading}<h5></div>
        <ul>
        ${createList(data)}
        </ul>
    </div>
    </div>`
    return toolTip;
}

createList = (data) => {
    let list = ""
    data.map(item => {
        list += "<li><b>" + item.name + "</b>: " + item.courses + "</li>"
    })
    return list + "</ul>"
}