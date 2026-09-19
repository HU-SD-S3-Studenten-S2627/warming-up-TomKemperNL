package nl.hu.s3.project.pokemon;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import nl.hu.s3.project.ConnectionFactory;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@Path("/pokemon")
public class PokemonResource {

    @GET
    public List<Pokemon> getPokemon() throws SQLException {
        try (Connection connection = ConnectionFactory.getConnection()) {

            PokemonDAO dao = new PokemonDAO(connection);
            return dao.selectPokemon();
        }
    }
}
