let assignment = {
  id: 1,
  title: "Assignment 1",
  description: "This is the first assignment",
  dueDate: "2021-01-01",
  status: "open",
  grade: 0,
};

export default function Assignments(app) {
  app.get("/a5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/a5/assignment/title", (req, res) => {
    res.send(assignment.title);
  });
  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const newTitle = req.params.newTitle;
    assignment.title = newTitle;
    res.send(assignment);
  });
}
