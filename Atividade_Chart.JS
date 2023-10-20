<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade Chart.JS</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<style>
    canvas {
        margin-top: 80px;
    }
</style>
<body>
    <div>
        <canvas id="linhas" width="500" height="100"></canvas>
    </div>
    <div>
        <canvas id="barras" width="500" height="100"></canvas>
    </div>
</body>
</html>

<script>
    const ctx = document.getElementById('linhas');
    const ctx2 = document.getElementById('barras');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [
        {
          label: 'Temperatura',
          data: [30, 29, 28, 25, 22, 23],
          borderWidth: 1,
          backgroundColor: [
            '#CF0E0E'
          ],
          borderColor: [
            '#CF0E0E'
          ],
          borderWidth: 1
        },    
        {
          label: 'Umidade',
          data: [80, 82, 80, 85, 80, 83],
          backgroundColor: [
            '#00A8FF'
          ],
          borderColor: [
            '#00A8FF'
          ],
          borderWidth: 1
        }]
    },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
        {
          label: 'Temperatura Média',
          data: [22, 24, 27, 23, 20, 18],
          borderWidth: 1,
          backgroundColor: [
            '#CF0E0E'
          ],
          borderWidth: 1
        },    
        {
          label: 'Umidade Média',
          data: [90, 89, 93, 87, 88, 82],
          backgroundColor: [
            '#00A8FF'
          ],
          borderWidth: 1
        }]
    },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  </script>
