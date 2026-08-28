package nl.hu.s3.project.counter.domain;

import jakarta.persistence.*;

@Entity
public class Counter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "current_value", nullable = false)
    private int value;

    public Long getId() {
        return id;
    }

    public int getValue() {
        return value;
    }

    public void increment() {
        this.value++;
    }

    @Override
    public String toString() {
        return "Counter{" +
                "id=" + id +
                ", value=" + value +
                '}';
    }

    public void setDatabaseGeneratedId(long id) {
        this.id = id;
    }

    public static Counter fromDatabase(long id, int value) {
        Counter counter = new Counter();
        counter.id = id;
        counter.value = value;
        return counter;
    }
}
