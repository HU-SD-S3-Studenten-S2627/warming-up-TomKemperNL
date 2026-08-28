package nl.hu.s3.project.counter.application;

import nl.hu.s3.project.counter.data.CounterRepository;
import nl.hu.s3.project.counter.domain.Counter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FakeCounterRepository implements CounterRepository {
    private final ArrayList<Counter> counters = new ArrayList<>();

    @Override
    public List<Counter> findAll() {
        return Collections.unmodifiableList(counters);
    }

    @Override
    public void remove(Counter counter) {
        this.counters.remove(counter);
    }

    @Override
    public void add(Counter counter) {
        this.counters.add(counter);
    }

    @Override
    public void update(Counter counter) {

    }
}
