$(document).ready(function() {
    function loadChart(chartType) {
        // Fetch data from the server
		console.log("--- here to fetch datas from the server --- ");
		
        $.ajax({
            url: 'ChartDataServlet',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
				console.log("--- Data --- " + data);
				console.log("--- Chart Type --- " + chartType);
				
                // Initialize the chart widget with the fetched data
                $('#chart-container').srchart({
                    chart_type: chartType, // Set the selected chart type
                    data: data,
                    debug: true
                });
            },
            error: function(error) {
                console.log("Error fetching data: ", error);
            }
        });
    }

    // Initial load with default chart type
    loadChart($('#chart-type').val());

    // Reload chart on chart type change
    $('#chart-type').change(function() {
        loadChart($(this).val());
    });
});