<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error page</title>
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
    <div id="dialog"></div>
   
    
    <script>
        $(document).ready(function() {
            showErrorDialog('An error occurred while processing your request.');
        });
    </script>
</html>