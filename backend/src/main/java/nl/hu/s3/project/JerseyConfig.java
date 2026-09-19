package nl.hu.s3.project;

import jakarta.ws.rs.ApplicationPath;
import nl.hu.s3.project.pokemon.PokemonResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(PokemonResource.class);
    }
}
