export const projects = [
  {
    _id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. Built with React and Tailwind CSS.",
    images: [
      require("../Portfolio pics/1.png"),
      require("../Portfolio pics/2.png"),
      require("../Portfolio pics/3.png"),
      require("../Portfolio pics/4.png"),
      require("../Portfolio pics/5.png"),
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/mellowzs/Portfolio",
  },

  {
    _id: 2,
    title: "Employee Task Management System",
    description:
      "The Task Tracker Management System, developed by Group 10 (BSCS-3B), is a software solution designed to enhance task and project management by improving collaboration, organization, and productivity. It supports two user roles—Admin and Employee—each with distinct functionalities. Admins can assign tasks, monitor completion status, manage employee accounts, and track attendance through clock-in and clock-out features. Employees, in turn, can view and update their assigned tasks, record attendance, and participate in real-time communication via a built-in chatroom. The system is built using HTML, JavaScript, PHP, Bootstrap, and MySQL, ensuring a responsive interface and secure data handling. Despite its robust core features, the system lacks advanced reporting and analytics tools, such as customizable reports and graphical performance insights, which limits strategic decision-making capabilities. Nonetheless, the modular architecture allows for future scalability, and thorough testing—including unit, integration, and user acceptance testing—ensures reliability.",
    images: [
      require("../EMTS pics/Login-page.png"),
      require("../EMTS pics/Dashboard.png"),
      require("../EMTS pics/Attendance.png"),
      require("../EMTS pics/Chatroom.png"),
      require("../EMTS pics/Admin-Dashboard.png"),
      require("../EMTS pics/Admin-ManageEmployees.png"),
      require("../EMTS pics/Admin-EditEmployee.png"),
    ],
    technologies: ["HTML", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    link: "https://etms.free.nf/",
  },
  {
    _id: 3,
    title: "Demon's Maze",
    description:
      "A Maze game developed in GODOT game engine.The goal of the game is to find the exit to the maze as fast as possible. The quicker the player escapes, the higher the rank in the leaderboard.",
    images: [
      require("../Demon's Maze/1.png"),
      require("../Demon's Maze/2.png"),
      require("../Demon's Maze/3.png"),
      require("../Demon's Maze/4.png"),
      require("../Demon's Maze/5.png"),
      require("../Demon's Maze/6.png"),
      require("../Demon's Maze/7.png"),
      require("../Demon's Maze/8.png"),
    ],
    technologies: [
      "GODOT",
      "GDScript",
      "Game Development",
      "Quiver",
      "AStar Pathfinding",
    ],
    link: "https://github.com/mellowzs/Demons_Maze",
  },

  {
    _id: 4,
    title: "Philhealth",
    description:
      "This mock-up redesign project for the PhilHealth website focuses on transforming its outdated and conservative interface into a modern, user-friendly platform. The original site, while functional, lacked engaging design elements, accessibility features, and intuitive navigation. The redesign introduces a refreshed homepage with clear links to essential sections like About Us, Downloads, and Online Services, aiming to improve usability for all users, including the elderly. Enhanced visual appeal, simplified layouts, and a more interactive user flow are central to the new design, ensuring a more satisfying and accessible online experience",
    images: [
      require("../Philhealth/1.png"),
      require("../Philhealth/2.png"),
      require("../Philhealth/3.png"),
      require("../Philhealth/4.png"),
      require("../Philhealth/5.png"),
      require("../Philhealth/6.png"),
      require("../Philhealth/7.png"),
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Bootstrap",
    ],
    link: "https://mellowzs.github.io/philhealth-proj/",
  },
];
