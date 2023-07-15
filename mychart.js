// author aierken



var label_string = ['C/C++', 'Python', 'JavaScript', 'Java', 'Matlab', 'SQL', 'PHP', 'C#'];
var label_data = [90, 90, 80, 40, 70, 95, 55, 74];

// Light theme options
var lightOptions = {
    scales: {
        r: {
            min: 0, // MIN
            borderWidth: 3,
            angleLines: {
                color: 'rgba(0, 0, 0, 0.4)'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.4)'
            },
            pointLabels: {
                font: {
                    size: 20,
                    color: 'black' // Color for light theme
                }
            },
            ticks: {
                color: 'black', // Color for light theme
                backdropColor: 'rgba(0, 0, 0, 0)', // Transparent backdrop color
                stepSize: 25,

            }
        }
    }
};


// Dark theme options
var darkOptions = {
    scales: {

        r: {
            min: 0, // MIN

            angleLines: {
                color: 'rgba(255, 255, 255, 0.4)'
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.4)'
            },
            pointLabels: {
                font: {
                    size: 20,
                    color: 'white' // Color for dark theme
                }
            },
            ticks: {
                color: 'white', // Color for dark theme
                backdropColor: 'rgba(0, 0, 0, 0)', // Transparent backdrop color
                stepSize: 25,
                borderWidth: 2,


            }
        }
    }
};

// Initial chart configuration
var initialData = {
    labels: label_string,
    datasets: [
        {
            data: label_data,
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            borderWidth: 3,
        }
    ]
};

// Chart options
var chartOptions = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            // enabled: false
        }
    },
    scales: {
        r: {
            angleLines: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                display: false,
                backdropColor: 'rgba(0, 0, 0, 0)' // Transparent backdrop color
            }
        }
    }
};

// Create the initial radar chart
var radarChart = new Chart(document.getElementById('radar-chart'), {
    type: 'radar',
    data: initialData,
    options: chartOptions
});

// Function to toggle the chart data and theme
function toggleChart() {
    var theme = document.documentElement.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';

    if (theme === 'theme-dark') {
        // Dark theme data
        var darkData = {
            labels: label_string,
            datasets: [
                {
                    data: label_data,
                    borderColor: 'rgba(255, 255, 255, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'

                }
            ]
        };



        // Update the chart data and options for dark theme
        radarChart.data = darkData;
        radarChart.options = Object.assign({}, chartOptions, darkOptions);
        radarChart.update();
    } else {
        // Light theme data
        var lightData = {
            labels: label_string,
            datasets: [
                {
                    data: label_data,
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    borderWidth: 3,
                }
            ]
        };



        // Update the chart data and options for light theme
        radarChart.data = lightData;
        radarChart.options = Object.assign({}, chartOptions, lightOptions);
        radarChart.update();
    }
}

// MutationObserver to detect changes in theme class
var observer = new MutationObserver(toggleChart);
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

toggleChart();


var label_string2 = ['OpenGL', 'AWS', 'TensorFlow', 'MongoDB', 'Pillow', 'Flask', 'Linux', 'Node.js'];
var label_data2 = [85, 65, 88, 75, 90, 85, 95, 75];

// Initial chart configuration for the second chart
var initialData2 = {
    labels: label_string2,
    datasets: [
        {
            data: label_data2,
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            borderWidth: 3,
        }
    ]
};

// Create the initial radar chart for the second chart
var radarChart2 = new Chart(document.getElementById('radar-chart2'), {
    type: 'radar',
    data: initialData2,
    options: chartOptions
});

// Function to toggle the second chart data and theme
function toggleChart2() {
    var theme = document.documentElement.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';

    if (theme === 'theme-dark') {
        // Dark theme data for the second chart
        var darkData2 = {
            labels: label_string2,
            datasets: [
                {
                    data: label_data2,
                    borderColor: 'rgba(255, 255, 255, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    pointBorderColor: '#fff',
                }
            ]
        };

        // Update the second chart data and options for dark theme
        radarChart2.data = darkData2;
        radarChart2.options = Object.assign({}, chartOptions, darkOptions);
        radarChart2.update();
    } else {
        // Light theme data for the second chart
        var lightData2 = {
            labels: label_string2,
            datasets: [
                {
                    data: label_data2,
                    borderColor: 'rgba(0, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    borderWidth: 3,
                }
            ]
        };

        // Update the second chart data and options for light theme
        radarChart2.data = lightData2;
        radarChart2.options = Object.assign({}, chartOptions, lightOptions);
        radarChart2.update();
    }
}

// MutationObserver to detect changes in theme class for the second chart
var observer2 = new MutationObserver(toggleChart2);
observer2.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

toggleChart2();

