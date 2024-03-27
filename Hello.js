export default function Hello(app) {
  function rootHandler(req, res) {
    res.send("<h1>Welcome to Node Server</h1>");
  }

  function sayHello(req, res) {
    res.send("<h1>Welcome to Web Dev!!</h1>");
  }

  app.get("/", rootHandler);
  app.get("/hello", sayHello);
  app.get("/good", (req, res) => {
    res.send("<h1>Good Morning</h1>");
  });
}
