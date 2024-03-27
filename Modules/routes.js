import db from "../Database/index.js";
export default function ModuleRoutes(app) {
  // CRUD
  const fetchAllModules = (req, res) => {
    res.json(db.modules);
  };
  const findModuleById = (req, res) => {
    const id = req.params.id;
    const module = db.modules.find((module) => module._id === id);
    if (module) {
      res.json(module);
    } else {
      res.status(404).send(`Module with id ${id} not found`);
    }
  };
  const findModuleForCourse = (req, res) => {
    const courseId = req.params.courseId;
    const modules = db.modules.filter((module) => module.course === courseId);
    if (modules) {
      res.json(modules);
    } else {
      res.status(404).send(`Modules for course with id ${courseId} not found`);
    }
  };
  const createModule = (req, res) => {};
  const updateModule = (req, res) => {};
  const deleteModule = (req, res) => {};

  app.get("/api/modules", fetchAllModules);
  app.get("/api/modules/:id", findModuleById);
  app.get("/api/courses/:courseId/modules", findModuleForCourse);
}
