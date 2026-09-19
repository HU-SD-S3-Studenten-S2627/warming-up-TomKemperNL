package nl.hu.s3.project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
    private static boolean usePostGres = false;

    public static Connection getConnection() throws SQLException {
        if (usePostGres) {
            return DriverManager.getConnection("jdbc:postgresql://localhost:15432/hu-s3-project", "hu-s3-project-dbadmin", "hu-s3-project-pwd");
        }else{
            return DriverManager.getConnection("jdbc:h2:mem:testdb", "sa", "");
        }
    }
}
