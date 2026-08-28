package nl.hu.s3.project.counter.domain;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CounterTest {

    @Test
    void canIncrementCounter() {
        Counter counter = new Counter();
        for(int i = 0; i < 10; i++) {
            counter.increment();
        }
        assertEquals(10, counter.getValue());
    }
}