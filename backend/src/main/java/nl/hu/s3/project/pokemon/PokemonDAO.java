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

    public void insertPokemon(PokemonDetails pokemon) throws SQLException {
        PreparedStatement statement = this.connection.prepareStatement("""
            insert into pokemon(name, url, lat, lng, imgUrl, attack, defense)values(?,?,?,?, ?, ?, ?)
        """);
        statement.setString(1, pokemon.name);
        statement.setString(2, pokemon.url);
        statement.setDouble(3, pokemon.coordinates[0]);
        statement.setDouble(4, pokemon.coordinates[1]);
        statement.setString(5, pokemon.imgUrl);
        statement.setInt(6, pokemon.attack);
        statement.setInt(7, pokemon.defense);
        statement.executeUpdate();
    }

    public PokemonDetails selectPokemon(String name) throws SQLException {
        PreparedStatement statement = this.connection.prepareStatement("""
            select name, url, lat, lng, imgUrl, attack, defense from pokemon where name = ?
        """);
        statement.setString(1, name);

        ResultSet results = statement.executeQuery();
        if (results.next()) {
            PokemonDetails pokemon = new PokemonDetails();
            pokemon.name = results.getString("name");
            pokemon.url = results.getString("url");
            pokemon.imgUrl = results.getString("imgUrl");
            pokemon.attack = results.getInt("attack");
            pokemon.defense = results.getInt("defense");
            Double lat = results.getDouble("lat");
            Double lng = results.getDouble("lng");
            if(lat != null && lng != null){
                pokemon.coordinates = new double[]{results.getDouble("lat"), results.getDouble("lng")};
            }
            return pokemon;
        }
        return null;
    }
}
