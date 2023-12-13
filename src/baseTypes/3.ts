let some: unknown;
some = "Text";
let str: string;

function checkType(variable: unknown) {
  if (typeof variable === "string") {
    str = variable;
  }
}

checkType(some);

export {};
