
var ctx = document.getElementById('myChart');
var labels = ["Ram", "Memory", "Price","Phone"]
var data = {
    labels: labels,
    datasets: [
        {
            data: [60, 50, 45,120],
            backgroundColor: [
                '#32ff7e',
                '#ff3838',
                '#fff200',
                '#3d3d3d'
            ],
            borderWidth: [2,2,2,2]
        }
    ]
};

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {       
        title: {
            display: true,
            position: "top",
            text: "Pie Chart",
            fontSize: 16,
            fontColor: 'red',
            fontWeight: 600
        },
        legend: {
            display: true,
            position: "bottom",
            fontSize: 14,
            fontWeight: 600
        },
        responsive: true
    }
});