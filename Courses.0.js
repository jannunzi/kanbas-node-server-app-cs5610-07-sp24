let courses = [
  {
    id: 1,
    title: "Course 1",
    description: "This is the first course",
    instructor: "Instructor 1",
    startDate: "2021-01-01",
    endDate: "2021-01-31",
    status: "open",
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is the second course",
    instructor: "Instructor 2",
    startDate: "2021-02-01",
    endDate: "2021-02-28",
    status: "open",
    sections: [
      {
        id: 1,
        title: "Section 1",
        students: [
          {
            id: 1,
            name: "Student 1",
          },
          {
            id: 2,
            name: "Student 2",
          },
        ],
      },
      {
        id: 2,
        title: "Section 2",
      },
    ],
  },
  {
    id: 3,
    title: "Course 3",
    description: "This is the third course",
    instructor: "Instructor 1",
    startDate: "2021-01-01",
    endDate: "2021-01-31",
    status: "open",
  },
];

export default function Courses(app) {
  const findAllCourses = (req, res) => {
    const query = req.query;
    if (query.instructor) {
      const instructor = query.instructor;
      const filteredCourses = courses.filter(
        (course) => course.instructor == instructor
      );
      res.json(filteredCourses);
      return;
    }
    res.json(courses);
  };

  const findCourseById = (req, res) => {
    const id = req.params.id;
    const course = courses.find((course) => course.id == id);
    res.json(course);
  };

  const findSectionsForCourse = (req, res) => {
    const id = req.params.id;
    const course = courses.find((course) => course.id == id);
    if (course.sections) {
      res.json(course.sections);
    } else {
      res.json([]);
    }
  };

  app.app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.get("/api/courses/:id/sections", findSectionsForCourse);
}
