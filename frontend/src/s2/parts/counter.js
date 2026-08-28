import { CounterService } from "../../services/counter-service.js";
import {LocalCounterService} from "../../services/local-counter-service.js";

export class Counter {
    constructor(element){
        this.element = element;
        this.counterService = new LocalCounterService(); //Zonder Backend
        // this.counterService = new CounterService(); //Met Backend
        this.value = 0;
    }

    init(){
        this.resultSpan = this.element.querySelector('.result');
        this.incrementButton = this.element.querySelector('.increment');

        this.incrementButton.addEventListener('click', () => {
            this.counterService.increment().then((result) => {
                this.value = result.value;
                this.render();
            });
        });

        this.render();
        this.counterService.getCount().then((result) => {
            this.value = result.value;
            this.render();
        });
    }

    render(){
        this.resultSpan.textContent = this.value;
    }
}