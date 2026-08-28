export class LocalCounterService {

  value = 0;
  increment() {
    this.value++;
    return Promise.resolve({ value: this.value });
  }

  getCount() {
    return Promise.resolve({ value: this.value });
  }
}
