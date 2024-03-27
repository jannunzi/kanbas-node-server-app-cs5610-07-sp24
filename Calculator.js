function Calulator(app) {
  app.get("/a5/add/:num1/:num2", (req, res) => {
    const params = req.params;
    const a = parseInt(params.num1);
    const b = parseInt(params.num2);
    const sum = a + b;
    res.send(`Sum of ${a} and ${b} is ${sum}`);
  });

  app.get("/a5/sub/:num1/:num2", (req, res) => {
    const params = req.params;
    const a = parseInt(params.num1);
    const b = parseInt(params.num2);
    const sub = a - b;
    res.send(`Subtraction of ${a} and ${b} is ${sub}`);
  });

  app.get("/a5/calculator", (req, res) => {
    const query = req.query;
    const a = parseInt(query.num1);
    const b = parseInt(query.num2);
    const op = query.op;
    let result;
    switch (op) {
      case "add":
        result = a + b;
        break;
      case "sub":
        result = a - b;
        break;
      case "mul":
        result = a * b;
        break;
      case "div":
        result = a / b;
        break;
      default:
        result = "Invalid operation";
    }
    res.send(`Result of ${op} of ${a} and ${b} is ${result}`);
  });
}

export default Calulator;
