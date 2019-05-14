
var chart, data, options, colors;
var collegeName = "Seattle Central College";
google.charts.load("current", { packages: ["sankey"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    drawPath();

    // Set Chart Color
    colors = [
        '#a6cee3',         // Custom color palette for sankey nodes.
        '#1f78b4',         // Nodes will cycle through this palette
        '#b2df8a',         // giving each node its own color.
        '#33a02c'
    ]
    // Set chart options
    options = {
        height: 700,
        sankey: {
            node: {
                nodePadding: 40,
                width: 20,
                colors: colors,
                label: {
                    color: "000",
                    fontSize: 15,
                    bold: true
                },
                colorMode: 'unique'
            },
            link: {
                colorMode: 'gradient',
                colors: colors
            },
            interactivity: true,
        },
        tooltip: { isHtml: true },
    };
    // Instantiate and draw our chart, passing in some options.
    chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);


    // Add our over/out handlers.
    google.visualization.events.addListener(chart, 'onmouseover', chartMouseOver);

    google.visualization.events.addListener(chart, 'onmouseover', chartMouseOut);

    google.visualization.events.addListener(chart, 'select', selectHandler);

}

chartMouseOver = (e) => {
    chart.setSelection([e]);
    console.log(e)
}
chartMouseOut = (e) => {
    chart.setSelection([{ 'row': null, 'column': null }]);
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
        list += "<li><b>" + item.name + "</b> " + item.courses + "</li>"
    })
    return list + "</ul>"
}

drawPath = () => {
    data = new google.visualization.DataTable();
    var x = "test";
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    // Class List Tooltip
    data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } })

    data.addRows([
        [collegeName, 'Informatics', 5, createCustomHTMLContent('Prerequisite Courses for Informatics', info)],
        [collegeName, 'Computer Science', 2, createCustomHTMLContent('Prerequisite Courses for Computer Science', cse)],
        [collegeName, 'Math', 2, createCustomHTMLContent('Prerequisite Courses for Mathematics', math)],
        [collegeName, 'Chemistry', 2, createCustomHTMLContent('Prerequisite Courses for Chemistry', chem)],
        ['Informatics', 'UX Desginer', 1, createCustomHTMLContent('UX Designer Skills', uxDesigner)],
        ['Informatics', 'Data Analyst', 1, createCustomHTMLContent('Data Analyst Skills', dataAnalyst)],
        ['Informatics', 'Project Manager', 1, createCustomHTMLContent('Project Manager Skills', projectManager)],
        ['Informatics', 'Software Engineer', 1, createCustomHTMLContent('Software Engineer Skills', softwareEngineer)],
        ['Informatics', 'Data Scientist', 1, createCustomHTMLContent('Data Scientist Skills', dataScientist)],
        ['Computer Science', 'Software Engineer', 1, createCustomHTMLContent('Software Engineer Skills', softwareEngineer)],
        ['Computer Science', 'Data Scienctist', 1, createCustomHTMLContent('Data Scientist Skills', dataScientist)],
        ['Math', 'Math Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Math', 'Math Professor', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Chemistry', 'Chemistry Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
        ['Chemistry', 'Chemistry Professor', 1, 'Class: CSC142, STAT146, MATH152']
    ]);
}


$(document).ready(function () {
    $('.dropdown-menu a.college').on("click", function (e) {
        e.preventDefault();
        collegeName = e.target.innerText;
        chart.clearChart()
        drawPath();
        chart.draw(data, options);
    });
});