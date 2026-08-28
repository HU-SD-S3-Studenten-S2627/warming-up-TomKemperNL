import '../parts/counter.js';
import {Counter} from "../parts/counter.js";

const counters = document.querySelectorAll('.counter');
counters.forEach(counterElement => {
    let counter = new Counter(counterElement);
    counter.init();
});