interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    lastLogin?: Date;  // Optional property
  }
  
  const exampleUser: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    lastLogin: new Date(),
  };
  console.log(exampleUser)