function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

function greetArray(users: string[]): string {
  return users.map(user => greeter(user)).join(', ');
}

console.log(greetArray(user)); // Output: Hello, Jane, Hello, Doe