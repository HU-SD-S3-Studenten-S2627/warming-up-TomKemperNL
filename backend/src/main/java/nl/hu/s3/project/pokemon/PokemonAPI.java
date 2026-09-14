package nl.hu.s3.project.pokemon;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.client.RestClient;

public class PokemonAPI {
    public List<Pokemon> getPokemon() {
        RestClient client = RestClient.create("https://pokeapi.co/api/v2");
        PokemonAPIResponse response = client.get().uri("/pokemon").retrieve().body(PokemonAPIResponse.class);
        return Arrays.asList(response.results);
    }
}
