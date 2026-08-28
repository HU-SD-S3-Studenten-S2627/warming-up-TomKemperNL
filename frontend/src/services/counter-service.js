export class CounterService {
  path = "/api/counter";

  increment() {
    return fetch(this.path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ increment: 1 }),
    }).then((response) => response.json());
  }

  getCount() {
    return fetch(this.path).then((response) => response.json());
  }
}
