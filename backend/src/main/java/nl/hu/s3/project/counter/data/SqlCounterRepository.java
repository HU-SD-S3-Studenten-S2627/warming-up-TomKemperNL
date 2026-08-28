package nl.hu.s3.project.counter.data;

import nl.hu.s3.project.counter.domain.Counter;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.*;
import java.util.List;

@Component
@Profile("s2")
public class SqlCounterRepository implements CounterRepository {

    private final DataSource dataSource;

    public SqlCounterRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public List<Counter> findAll() {
        try (Connection con = dataSource.getConnection()) {
            PreparedStatement stmt = con.prepareStatement("SELECT id, current_value FROM counter");
            ResultSet results = stmt.executeQuery();

            List<Counter> counters = new java.util.ArrayList<>();
            while (results.next()) {
                Counter counter = Counter.fromDatabase(results.getLong("id"), results.getInt("current_value"));
                counters.add(counter);
            }
            return counters;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void remove(Counter counter) {
        try (Connection con = dataSource.getConnection()) {
            PreparedStatement stmt = con.prepareStatement("DELETE FROM counter WHERE id = ?");
            stmt.setLong(1, counter.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void add(Counter counter) {
        try (Connection con = dataSource.getConnection()) {
            PreparedStatement stmt = con.prepareStatement("INSERT INTO counter (current_value) VALUES (?)", Statement.RETURN_GENERATED_KEYS);
            stmt.setInt(1, counter.getValue());
            stmt.executeUpdate();

            ResultSet keyResults = stmt.getGeneratedKeys();
            if (keyResults.next()) {
                counter.setDatabaseGeneratedId(keyResults.getLong(1));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void update(Counter counter) {
        try (Connection con = dataSource.getConnection()) {
            PreparedStatement stmt = con.prepareStatement("UPDATE counter SET current_value = ? WHERE id = ?");
            stmt.setInt(1, counter.getValue());
            stmt.setLong(2, counter.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
