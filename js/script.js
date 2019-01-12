google.charts.load("current", { packages: ["sankey"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = new google.visualization.DataTable();
            var x = "test";
            data.addColumn('string', 'From');
            data.addColumn('string', 'To');
            data.addColumn('number', 'Weight');
            // Class List Tooltip
            data.addColumn({ type: 'string', role: 'tooltip' });

            data.addRows([
                ['SCC', 'Informatics', 3, x],
                ['SCC', 'Computer Science', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Foster', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Math', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Chemistry', 2, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'UX Desginer', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'Data Analyst', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'Project Manager', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Computer Science', 'Software Engineer', 1, 'Class: MATH 124, MATH 125, MATH 126, PHYSICS 121, CSE 142, CSE 143, CHEM 142 or 145'],
                ['Computer Science', 'Data Scienctist', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Foster', "Accountant", 1, 'Class: CSC142, STAT146, MATH152'],
                ['Foster', "Maketing Manager", 1, 'Class: CSC142, STAT146, MATH152'],
                ['Math', 'Math Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Math', 'Math Professor', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Chemistry', 'Chemistry Researcher', 1, 'Class: CSC142, STAT146, MATH152'],
                ['Chemistry', 'Chemistry Professor', 1, 'Class: CSC142, STAT146, MATH152']
            ]);
           // Set Chart Color
            var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
            // Set chart options
            var options = {
                height: 700,
                sankey: {
                    node: {
                        width: 20,
                        colors: colors,
                        label: {
                            color: colors,
                            fontSize: 15,
                            bold: true
                        }
                    },
                    link: {
                        colorMode: 'gradient',
                        colors: colors
                    }
                }
            };
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
            chart.draw(data, options);
        }