<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <jsp:include page="common.jsp" />
    <style>
        .sr-dialog-success .sr-dialog-content {
            color: green;
        }
        .sr-dialog-error .sr-dialog-content {
            color: red;
        }
        .sr-dialog-warning .sr-dialog-content {
            color: orange;
        }
        .sr-dialog-info .sr-dialog-content {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Chart Page</h1>
    <label for="chart-type-label">Select Chart Type:</label>
    
    <select id="chart-type">
        <option value="column">Column</option>
        <option value="pie">Pie</option>
    </select>
    <br>
    
    <div id="chart-container"></div>
    
    <!--  called only here the scripts for chart -->
    <script src="vendor/jquery-srchart-0.0.1.js"></script>
    <script src="js/chart.js"></script>
    
    <div id="dialog"></div>
    
    <br><br>
    
    <button id="test-success">Test Success</button>
    <button id="test-error">Test Error</button>
    <button id="test-info">Test Info</button>
    <button id="test-warning">Test Warning</button>
    
    <script>
    $(document).ready(function() {
        // Event listener for success button
        $('#test-success').on('click', function() {
            showSuccessDialog('This is a success message.');
        });

        // Event listener for error button
        $('#test-error').on('click', function() {
            showErrorDialog('This is an error message.');
        });

        // Event listener for info button
        $('#test-info').on('click', function() {
            showInfoDialog('This is an info message.');
        });

        // Event listener for warning button
        $('#test-warning').on('click', function() {
            showWarningDialog('This is a warning message.');
        });
    });
    </script>
</body>
</html>