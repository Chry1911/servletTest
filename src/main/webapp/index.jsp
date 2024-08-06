<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
   <jsp:include page="common.jsp" />
</head>
<body>
    <div class="login-page">
        <div class="form">
            <form id="loginForm" action="LoginServlet" method="post">
                <input type="text" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button id="login" type="submit">Login</button><br>
            </form>
        </div>
    </div>
</body>
</html>
