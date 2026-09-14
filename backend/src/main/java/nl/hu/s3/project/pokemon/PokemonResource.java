package nl.hu.s3.project.pokemon;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import java.util.List;

@Path("/pokemon")
public class PokemonResource {

    @GET
    public List<Pokemon> getPokemon() {
        return Pokemon.pokemons;
    }
}
