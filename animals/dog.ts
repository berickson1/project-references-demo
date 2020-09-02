import Animal from ".";
import { makeRandomName } from "../core/utilities";
//import { foo } from "./foo";
//foo();

export interface Dog extends Animal {
  woof(): void;
  name: string;
}

export function createDog(): Dog {
  return {
    size: "medium",
    woof: function (this: Dog) {
      console.log(`${this.name} says "Woof"!`);
      // COMPILER ERROR
      //thisDoesntCompile();
    },
    name: makeRandomName(),
  };
}
