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
                ['SCC', 'Informatics', 3, "CSE 142, STAT 220, STAT 221, STAT 311, QMETH 201 or QSCI 381"],
                ['SCC', 'Computer Science', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Foster', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Math', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SCC', 'Chemistry', 2, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'UX Desginer', 1, ' '],
                ['Informatics', 'Data Analyst', 1, ' '],
                ['Informatics', 'Project Manager', 1, ' '],
                ['Informatics', 'Software Engineer', 1, ' '],
                ['Informatics', 'Data Scienctist', 1, ' '],
                ['Computer Science', 'Software Engineer', 1, ' '],
                ['Computer Science', 'Data Scienctist', 1, ' '],
                ['Foster', "Accountant", 1, ' '],
                ['Foster', "Maketing Manager", 1, ' '],
                ['Math', 'Math Researcher', 1, ' '],
                ['Math', 'Math Professor', 1, ' '],
                ['Chemistry', 'Chemistry Researcher', 1, ' '],
                ['Chemistry', 'Chemistry Professor', 1, ' ']
            ]);
            // Set Chart Color
            var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
            // Set chart options
            var options = {
                height: 600,
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

        function drawChartSouth() {
            var data = new google.visualization.DataTable();
            var x = "test";
            data.addColumn('string', 'From');
            data.addColumn('string', 'To');
            data.addColumn('number', 'Weight');
            // Class List Tooltip
            data.addColumn({ type: 'string', role: 'tooltip' });
            data.addRows([
                ['SOUTH', 'Informatics', 3, "CSE 142, STAT 220, STAT 221, STAT 311, QMETH 201 or QSCI 381"],
                ['SOUTH', 'Computer Science', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SOUTH', 'Foster', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SOUTH', 'Math', 2, 'Class: CSC142, STAT146, MATH152'],
                ['SOUTH', 'Chemistry', 2, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'UX Desginer', 1, ' '],
                ['Informatics', 'Data Analyst', 1, ' '],
                ['Informatics', 'Project Manager', 1, ' '],
                ['Informatics', 'Software Engineer', 1, ' '],
                ['Informatics', 'Data Scienctist', 1, ' '],
                ['Computer Science', 'Software Engineer', 1, ' '],
                ['Computer Science', 'Data Scienctist', 1, ' '],
                ['Foster', "Accountant", 1, ' '],
                ['Foster', "Maketing Manager", 1, ' '],
                ['Math', 'Math Researcher', 1, ' '],
                ['Math', 'Math Professor', 1, ' '],
                ['Chemistry', 'Chemistry Researcher', 1, ' '],
                ['Chemistry', 'Chemistry Professor', 1, ' ']
            ]);
            // Set Chart Color
            var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
            // Set chart options
            var options = {
                height: 600,
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

        function drawChartNorth() {
            var data = new google.visualization.DataTable();
            var x = "test";
            data.addColumn('string', 'From');
            data.addColumn('string', 'To');
            data.addColumn('number', 'Weight');
            // Class List Tooltip
            data.addColumn({ type: 'string', role: 'tooltip' });
            data.addRows([
                ['NORTH', 'Informatics', 3, "CSE 142, STAT 220, STAT 221, STAT 311, QMETH 201 or QSCI 381"],
                ['NORTH', 'Computer Science', 2, 'Class: CSC142, STAT146, MATH152'],
                ['NORTH', 'Foster', 2, 'Class: CSC142, STAT146, MATH152'],
                ['NORTH', 'Math', 2, 'Class: CSC142, STAT146, MATH152'],
                ['NORTH', 'Chemistry', 2, 'Class: CSC142, STAT146, MATH152'],
                ['Informatics', 'UX Desginer', 1, ' '],
                ['Informatics', 'Data Analyst', 1, ' '],
                ['Informatics', 'Project Manager', 1, ' '],
                ['Informatics', 'Software Engineer', 1, ' '],
                ['Informatics', 'Data Scienctist', 1, ' '],
                ['Computer Science', 'Software Engineer', 1, ' '],
                ['Computer Science', 'Data Scienctist', 1, ' '],
                ['Foster', "Accountant", 1, ' '],
                ['Foster', "Maketing Manager", 1, ' '],
                ['Math', 'Math Researcher', 1, ' '],
                ['Math', 'Math Professor', 1, ' '],
                ['Chemistry', 'Chemistry Researcher', 1, ' '],
                ['Chemistry', 'Chemistry Professor', 1, ' ']
            ]);
            // Set Chart Color
            var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
            // Set chart options
            var options = {
                height: 600,
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