package nl.hu.s3.project.counter.application;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CounterServiceImplTest {

    @Test
    public void canUseSingletonCounter(){
        CounterService counterService = new CounterService(new FakeCounterRepository());

        counterService.incrementCounter(5);

        CounterDTO counter = counterService.getSingleCounter();
        assertEquals(5, counter.value());
    }

}