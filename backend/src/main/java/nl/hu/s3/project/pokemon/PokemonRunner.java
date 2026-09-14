package nl.hu.s3.project.pokemon;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PokemonRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        PokemonAPI api = new PokemonAPI();
        List<Pokemon> pokemons = api.getPokemon();

        for (Pokemon pokemon : pokemons) {
            pokemon.coordinates = generateRandomCoordinates();
            Pokemon.pokemons.add(pokemon);
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
