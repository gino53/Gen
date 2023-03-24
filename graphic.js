const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['password', '123456', '123456789', 'guest', 'qwerty', '12345678', '111111', '12345', 'col123456', '123123'],
        datasets: [{
            label: 'Top 10 des mots de passe les + utilisés',
            data: [4929113, 1523537, 413056, 376417, 309679, 284946, 229047, 188602, 140505, 127762],
            fill: false,
            borderColor: 'rgb(255, 0, 255)',
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        }
    },
    scales: {
        beginAtZero: true,
        stepSize: 5,
        min: 0,
        max: 5000000,
        callback: function (value, index, values) {
            return value + '%';
        }
    }
});
