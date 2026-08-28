package nl.hu.s3.project.counter.application;

import nl.hu.s3.project.counter.data.CounterRepository;
import nl.hu.s3.project.counter.domain.Counter;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class CounterService {

    private final CounterRepository counterRepository;

    public CounterService(CounterRepository counterRepository) {
        this.counterRepository = counterRepository;
    }

    private Counter getCounter() {
        List<Counter> counters = counterRepository.findAll();
        if (counters.isEmpty()) {
            Counter counter = new Counter();
            counterRepository.add(counter);
            return counter;
        } else {
            if (counters.size() > 1) {
                counters.sort(Comparator.comparingLong(Counter::getId));
                for (int i = 1; i < counters.size(); i++) {
                    Counter counter = counters.get(i);
                    counterRepository.remove(counter);
                }
            }
            return counters.get(0);
        }
    }

    public CounterDTO incrementCounter(int times) {
        Counter counter = this.getCounter();
        for (int i = 0; i < times; i++) {
            counter.increment();
        }
        counterRepository.update(counter);
        return new CounterDTO(counter.getValue());
    }

    public CounterDTO getSingleCounter() {
        Counter counter = this.getCounter();
        return new CounterDTO(counter.getValue());
    }
}