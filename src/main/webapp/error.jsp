<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error page</title>
<jsp:include page="common.jsp" />
</head>
<body>
   <!-- Bootstrap Modal Structure -->
    <div class="modal fade" id="srDialogModal" tabindex="-1" role="dialog" aria-labelledby="srDialogModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="srDialogModalLabel">Message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="srDialogModalMessage"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="srDialogModalOkButton">OK</button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        $(document).ready(function() {
            showErrorDialog('An error occurred while processing your request.');
        });
    </script>
</html>