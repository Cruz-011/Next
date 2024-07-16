document.getElementById('start').addEventListener('click', function() {
    console.log('Start button clicked');
});

document.getElementById('pause').addEventListener('click', function() {
    console.log('Pause button clicked');
});

document.getElementById('stop').addEventListener('click', function() {
    console.log('Stop button clicked');
});

document.getElementById('adiconar-playlist').addEventListener('click', function() {
    console.log('Adicionar à Playlist do Spotify');
});

const combinedData = {
    labels: ['1s', '2s', '3s', '4s', '5s', '6s'],
    datasets: [
        {
            label: 'Batimento Cardíaco',
            data: [70, 72, 75, 73, 74, 76],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: true
        },
        {
            label: 'Música',
            data: [60, 62, 65, 63, 64, 66],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true
        }
    ]
};

const combinedConfig = {
    type: 'line',
    data: combinedData,
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Tempo (s)'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Valores'
                }
            }
        }
    }
};

const combinedChart = new Chart(
    document.getElementById('combinedChart'),
    combinedConfig
);
