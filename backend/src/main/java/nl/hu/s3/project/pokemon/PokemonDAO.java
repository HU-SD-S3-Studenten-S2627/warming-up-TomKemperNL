package nl.hu.s3.project.pokemon;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PokemonDAO {

    private final Connection connection;

    public PokemonDAO(Connection connection) {
        this.connection = connection;
    }

    public List<Pokemon> selectPokemon() throws SQLException {
        PreparedStatement statement = this.connection.prepareStatement("""
            select name, url, lat, lng from pokemon
        """);
        List<Pokemon> pokemons = new ArrayList<>();
        ResultSet results = statement.executeQuery();
        while (results.next()) {
            Pokemon pokemon = new Pokemon();
            pokemon.name = results.getString("name");
            pokemon.url = results.getString("url");
            Double lat = results.getDouble("lat");
            Double lng = results.getDouble("lng");
            if(lat != null && lng != null){
                pokemon.coordinates = new double[]{results.getDouble("lat"), results.getDouble("lng")};
            }
            pokemons.add(pokemon);
        }
        return pokemons;
    }

    public void insertPokemon(Pokemon pokemon) throws SQLException {
        PreparedStatement statement = this.connection.prepareStatement("""
            insert into pokemon(name, url, lat, lng)values(?,?,?,?)
        """);
        statement.setString(1, pokemon.name);
        statement.setString(2, pokemon.url);
        statement.setDouble(3, pokemon.coordinates[0]);
        statement.setDouble(4, pokemon.coordinates[1]);
        statement.executeUpdate();
    }
}
