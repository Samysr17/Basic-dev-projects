const fs = require("fs");

// converting a JS object to JSON
const user = {
  id: 2,
  completeName: "Hello WOrld",
  age: 10,
};

const data = JSON.stringify(user);

try {
  // reading a JSON file synchronously
  fs.writeFile("data.json", data);
} catch (error) {
  // logging the error
  console.error(error);

  throw error;
}

// logging the outcome
console.log("data.json written correctly");