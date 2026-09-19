package nl.hu.s3.project.pokemon;

import nl.hu.s3.project.ConnectionFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.util.List;

@Component
public class PokemonRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        PokemonAPI api = new PokemonAPI();
        List<PokemonLink> pokemons = api.getPokemon();


        try(Connection connection = ConnectionFactory.getConnection()){
            PokemonDAO dao = new PokemonDAO(connection);

            if(!dao.selectPokemon().isEmpty()){
                return;
            }

            for (PokemonLink pokemonLink : pokemons) {
                Pokemon pokemon = new Pokemon();
                pokemon.name = pokemonLink.name;
                pokemon.url = pokemonLink.url;
                pokemon.coordinates = generateRandomCoordinates();

                dao.insertPokemon(pokemon);
            }
        }

    }

    private static final double[] HL15 = new double[]{
            52.08419050575246, 5.1756441593170175
    };

    private double[] generateRandomCoordinates() {
        double randomLat = (Math.random() - 0.5) * 0.01 + HL15[0];
        double randomLon = (Math.random() - 0.5) * 0.01 + HL15[1];
        return new double[]{randomLat, randomLon};
    }
}
