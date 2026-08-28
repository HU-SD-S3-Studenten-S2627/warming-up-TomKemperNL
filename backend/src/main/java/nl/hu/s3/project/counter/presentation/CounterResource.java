package nl.hu.s3.project.counter.presentation;

import jakarta.ws.rs.*;
import nl.hu.s3.project.counter.application.CounterDTO;
import nl.hu.s3.project.counter.application.CounterService;
import nl.hu.s3.project.counter.application.IncrementDTO;
import org.springframework.beans.factory.annotation.Autowired;

@Path("/counter")
public class CounterResource {

    private CounterService counterService;

    @Autowired
    public CounterResource(CounterService counterService) {
        this.counterService = counterService;
    }

    @GET
    @Produces("application/json")
    public CounterDTO getCounterValue() {
        return counterService.getSingleCounter();
    }

    @POST
    @Produces("application/json")
    @Consumes("application/json")
    public CounterDTO incrementCounter(IncrementDTO counterDTO) {
        return counterService.incrementCounter(counterDTO.increment());
    }
}
