// type IF<A extends boolean, B, C> = A extends true ? B : C;

// type value1 = IF<true, number, boolean>;
// type value2 = IF<false, number, boolean>;

const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
};

console.log(user.firstName);
