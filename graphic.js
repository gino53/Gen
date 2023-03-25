const ctx = document.getElementById('myChart').getContext('2d');
const chartLabelsColor = () => {
    const isDarkMode = document.documentElement.getAttribute("data-bs-theme") === "dark";
    return isDarkMode ? "whitesmoke" : "#222";
};
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['password', '123456', '123456789', 'guest', 'qwerty', '12345678', '111111', '12345', 'col123456', '123123'],
        datasets: [{
            data: [4929113, 1523537, 413056, 376417, 309679, 284946, 229047, 188602, 140505, 127762],
            fill: false,
            borderColor: chartLabelsColor(),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Top 10 des mots de passe les plus utilisés',
                align: 'start',
                padding: {
                    bottom: 20
                },
                color: chartLabelsColor()
            }
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            x: {
                ticks: {
                    color: chartLabelsColor()
                },
                grid: {
                    display: false
                },
                border: {
                    color: 'rgba(176, 176, 176, 0.5)'
                }
            },
            y: {
                ticks: {
                    color: chartLabelsColor()
                },
                grid: {
                    display: false
                },
                border: {
                    color: 'rgba(176, 176, 176, 0.5)'
                },
                beginAtZero: true,
                stepSize: 5,
                min: 0,
                max: 5000000,
                callback: function (value, index, values) {
                    return value + '%';
                }
            },
        }
    }
});

window.addEventListener('resize', function () {
    myChart.resize();
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const datasetIndex = 0;
        const myDataset = myChart.data.datasets[datasetIndex];
        myDataset.borderColor = chartLabelsColor();
        myChart.data.datasets.borderColor = chartLabelsColor();
        myChart.options.plugins.title.color = chartLabelsColor();
        myChart.options.scales.x.ticks.color = chartLabelsColor();
        myChart.options.scales.y.ticks.color = chartLabelsColor();
        myChart.update();
    });
    observer.observe(document.documentElement, { attributes: true });
});
