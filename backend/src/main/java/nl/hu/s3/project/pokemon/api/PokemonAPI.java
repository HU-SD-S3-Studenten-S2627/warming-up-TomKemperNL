package nl.hu.s3.project.pokemon.api;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.client.RestClient;

public class PokemonAPI {
    public List<Link> getPokemon(int nr) {
        RestClient client = RestClient.create("https://pokeapi.co/api/v2");
        PokemonAPIResponse response =
                client.get()
                        .uri("/pokemon?limit={limit}", nr)
                        .retrieve()
                        .body(PokemonAPIResponse.class);

        return Arrays.asList(response.results);
    }

    public PokemonAPIDetails getPokemonDetails(String name) {
        RestClient client = RestClient.create("https://pokeapi.co/api/v2");
        PokemonAPIDetails response = client.get().uri("/pokemon/" + name).retrieve().body(PokemonAPIDetails.class);
        return response;
    }
}
