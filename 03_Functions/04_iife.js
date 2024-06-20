// Immediately Invoked Function Expressions (IIFE)

function dbConnection() {
  console.log("Database connected!");
}
// dbConnection();

//iife

(function dbConnection() {
  console.log("Database connected!");
})();

// (function definition)(function execution)

(() => {
  console.log("Database connected again!");
})();

(function dbConnection2() {
  // named iife
  console.log("Database connected again 2!");
})();

((dbName) => {
  // unnamed iife
  console.log(`${dbName} connected!`);
})("mongodb");

(function start() {
  console.log("Start database...");
})();
