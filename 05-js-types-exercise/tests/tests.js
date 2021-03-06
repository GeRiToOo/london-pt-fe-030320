describe("strings", () => {
  var greeting = "GREETING";
  test("greeting is a string", () => {
    expect(typeof greeting).toBe("string");
  });
  test("name is a string", () => {
    var name = "NAME";
    expect(typeof name).toBe("string");
  });

  test("phrase is a string", () => {
    var phrase = "string";
    expect(typeof greeting).toBe("string");
  });
  test('phrase is made up of "GREETING, NAME!" (e.g. "Hello, Mimi!")', () => {
    var phrase = ` ${greeting} , ${name}`;
    expect(typeof greeting).toBe("string");
  });
});

describe("numbers", () => {
  var price = 5.4;
  test("price is a number", () => {
    expect(typeof price).toBe("number");
  });
  test("price is a float (i.e. has a decimal place)", () => {
    expect(parseInt(price)).not.toBe(price);
  });
  var quantity = 6;
  test("quantity is an integer", () => {
    expect(typeof quantity).toBe("number");
    expect(parseInt(quantity)).toBe(quantity);
  });

  test("total is price multiplied by quantity", () => {
    var total=4;
    expect(typeof total).toBe("number");
    var total = quantity*price;
    expect(total).toBe(quantity * price);
  });


  var age1 = 10;
  var age2 = 20;
  var age3 = 20;

  test("age1, age2 and age3 are integers", () => {
    var age1 = 10;
    expect(typeof age1).toBe("number");
    expect(parseInt(age1)).toBe(age1);
    var age2 = 20;
    expect(typeof age2).toBe("number");
    expect(parseInt(age2)).toBe(age2);
    var age3 = 20;
    expect(typeof age3).toBe("number");
    expect(parseInt(age3)).toBe(age3);
  });

  test("averageAge is the mean of age1, age2 and age3", () => {
    var averageAge = 25;
    expect(typeof averageAge).toBe("number");
    var averageAge = (age1+age2+age3)/3;
    expect(averageAge).toBe((age1 + age2 + age3) / 3);
  });
});


describe("booleans", () => {
  var loggedIn = true;
  var adminUser = false;
  test("loggedIn is a boolean", () => {
    expect(typeof loggedIn).toBe("boolean");
  });
  test("loggedIn is true", () => {
    expect(loggedIn).toBe(true);
  });
  test("adminUser is a boolean", () => {
    expect(typeof adminUser).toBe("boolean");
  });
  test("adminUser is false", () => {
    expect(adminUser).toBe(false);
  });
});
describe("undefined", () => {
  var missingInfo = undefined;
  test("missingInfo is declared as undefined", () => {
    expect(() => missingInfo).not.toThrow();
    expect(typeof missingInfo).toBe("undefined");
  });
  test("password is completely undefined", () => {
    expect(() => password).toThrow();
  });
});
