let someValue: unknown = "Hello, TypeScript!";
// Using `as` syntax
let strLength: number = (someValue as string).length;

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;
