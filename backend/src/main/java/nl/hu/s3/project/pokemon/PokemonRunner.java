package nl.hu.s3.project.pokemon;

import nl.hu.s3.project.ConnectionFactory;
import nl.hu.s3.project.pokemon.api.PokemonAPI;
import nl.hu.s3.project.pokemon.api.Link;
import nl.hu.s3.project.pokemon.api.PokemonAPIDetails;
import nl.hu.s3.project.pokemon.api.StatsDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.util.List;

@Component
public class PokemonRunner implements CommandLineRunner {
    @Autowired
    private ConnectionFactory connectionFactory;

    @Override
    public void run(String... args) throws Exception {
        PokemonAPI api = new PokemonAPI();
        List<Link> pokemons = api.getPokemon(5);

        try(Connection connection = this.connectionFactory.getConnection()){
            PokemonDAO dao = new PokemonDAO(connection);

            if(!dao.selectPokemon().isEmpty()){
                return;
            }

            for (Link pokemonLink : pokemons) {
                PokemonAPIDetails apiDetails = api.getPokemonDetails(pokemonLink.name);

                PokemonDetails pokemon = new PokemonDetails();
                pokemon.name = pokemonLink.name;
                pokemon.url = pokemonLink.url;
                pokemon.coordinates = generateRandomCoordinates();
                pokemon.imgUrl = apiDetails.sprites.front_default;
                StatsDetail attackStat = null;
                StatsDetail defenseStat = null;
                for(StatsDetail stat : apiDetails.stats){
                    if(stat.stat.name.equals("attack")){
                        attackStat = stat;
                    }
                    if(stat.stat.name.equals("defense")){
                        defenseStat = stat;
                    }
                }
                if(attackStat != null){
                    pokemon.attack = attackStat.base_stat;
                }
                if(defenseStat == null){
                    pokemon.defense = defenseStat.base_stat;
                }


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
