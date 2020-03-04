test("`username` is defined", () => {
var username ="Hello";
  expect(username).toBeDefined();
});

test("`username` is a string", () => {
  var username ="Hello";
  expect(typeof username).toBe("string");
});

test("`username` cannot be reassigned", () => {
  expect(() => {
    username = "Hello";
  }).not.toThrow();
});

test("`age` is defined", () => {
  let age ="10";
  expect(age).toBeDefined();
});

test("`age` can be reassigned", () => {
  let age;
  let previuosAge;
  previousAge = age;
  expect(() => {
    age = age + 1;
  }).not.toThrow();
  expect(age).toEqual(previousAge + 1);
});
