export const DEFAULT_CHART_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: "Loading...",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(201, 203, 207, 0.7)',
            'rgba(255, 159, 132, 0.7)',
            'rgba(255, 99, 64, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 255, 0.7)',
            'rgba(54, 162, 155, 0.7)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 159, 132)',
            'rgb(255, 99, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 255)',
            'rgb(54, 162, 155)'
        ],
        borderWidth: 1
    }]
};

export const DEFAULT_POPULAR_DATA = {
    labels: ['Chicken', 'Duck', 'Mutton', 'Pork', 'Turkey'],
    datasets: [{
        label: "Popularity",
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
            'rgba(153, 102, 255, 0.7)',
            'rgba(201, 203, 207, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 255, 0.7)',
            'rgba(54, 162, 155, 0.7)'
        ],
        borderColor: [
            'rgba(153, 102, 255)',
            'rgba(201, 203, 207)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 255)',
            'rgb(54, 162, 155)'
        ],
    }]
};