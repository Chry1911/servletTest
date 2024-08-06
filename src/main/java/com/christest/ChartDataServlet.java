package com.christest;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

public class ChartDataServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/chris_test?serverTimezone=UTC", "root", "Lugano2011");
            ps = conn.prepareStatement("SELECT chart_data_description, chart_data_value FROM chart_data");
            rs = ps.executeQuery();

            List<DataPoint> dataPoints = new ArrayList<>();
            while (rs.next()) {
                String category = rs.getString("chart_data_description");
                int value = rs.getInt("chart_data_value");
                dataPoints.add(new DataPoint(category, value));
            }

            Gson gson = new Gson();
            String jsonData = gson.toJson(dataPoints);
            out.print(jsonData);
            out.flush();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    private class DataPoint {
        private String category;
        private int value;

        public DataPoint(String category, int value) {
            this.category = category;
            this.value = value;
        }

        public String getCategory() {
            return category;
        }

        public int getValue() {
            return value;
        }
    }
}