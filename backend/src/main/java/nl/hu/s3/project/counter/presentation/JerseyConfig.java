package nl.hu.s3.project.counter.presentation;

import jakarta.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@ApplicationPath("/api")
@Profile("s2")
@Configuration
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(CounterResource.class);
    }
}
