// import React from "react";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import "./Resume.css";

// function Resume() {
//   return (
//     <div>
//       <div className="sticky-header">
//         <Header />
//       </div>
//       <h1 className="resume">Resume</h1>
//       <div className="resume__container">
//         <div className="vertical-line"></div>
//         <div className="resume__container-summary">
//           <h2>Summary</h2>
//           <p>
//             Full-stack JavaScript developer with expertise in React.js, Next.js,
//             Express.js, and Node.js,delivering innovative web and mobile
//             projects. With a strong background in databasemanagement and
//             front-end development, I build high-performance, scalable solutions.
//             As aformer researcher and lecturer, I bring excellent communication
//             and teamwork skills. Driven bycontinuous learning, I am passionate
//             about contributing to ambitious and impactful webdevelopment
//             initiatives..
//           </p>
//           <h2>Skills</h2>
//           <h4>Front-End Development :</h4>
//           <p>
//             React.js, Next..js, React Native, TypeScript, HTML, CSS,
//             SCSS,Tailwind CSS, Figma
//           </p>
//           <h4>Back-end Development :</h4>
//           <p>Express.js, Node.js, SQL, Sequelize, MongoDB</p>
//           <h4>Soft Skills :</h4>
//           <p>
//             Skilled in influencing and negotiating with diverse stakeholders.
//             Experienced in teamwork, project supervision, and creating
//             productive and collaborative workenvironments. Ability to
//             communicate complex information clearly and effectively.
//           </p>
//         </div>

//         <div className="vertical-line"></div>

//         <div className="resume__container-summary">
//           <h2>Professional Experiences</h2>
//           <h4>Customer Care Representative: </h4>
//           <p>
//             De décembre 2019 à mars 2024 Qatar General Electricity & Water
//             Corporation (Kahramaa), Doha, Qatar
//           </p>
//           <h4>Teaching:</h4>
//           <p>De septembre 2017 à 2019 Numidia Gafsa, Tunis</p>
//           <p>
//             De septembre 2017 à 2018 Faculty of Science of Monastir, Monatir,
//             Tunis
//           </p>
//           <h4>Medical Representative:</h4>
//           <p>
//             From January 2011 to July 2011 Medical Bio-Cleaning Trading Company
//             Gafsa, Tunis
//           </p>
//           <h4>Research and Supervision Experience:</h4>
//           <p>
//             From September 2011 to June 2016 Faculty of Sciences of Monastir,
//             Laboratory of Interfaces and Advanced Materials (LIMA) Monastir
//             Research Assistant Faculty of Sciences of Monastir, LIMA, Tunisia
//             2011-2016
//           </p>
//           <h4>Research and Supervision Experience:</h4>
//           <p>
//             From September 2011 to June 2016 Faculty of Sciences of Monastir,
//             Laboratory of Interfaces and Advanced Materials (LIMA) Monastir
//             Research Assistant Faculty of Sciences of Monastir, LIMA, Tunisia
//             2011-2016
//           </p>
//         </div>
//       </div>
//       {/* *************************** */}
//       <div className="resume__container-summary-title">
//         <h2>DEGREES AND TRAINING</h2>

//         <div className="resume__container-summary-Training">
//           <h4>Certifications and Additional Training</h4>
//           <p>
//             From April 2024 to September 2024 RebootKamp (RBK) Technopole
//             Ghazala, Tunisia Full-Stack JavaScript Developer Training +1000
//             hours of courses
//           </p>
//           <h4>PhD in Chemistry</h4>
//           <p>
//             From September 2011 to October 2016 Faculty of Sciences of Monastir
//             Monastir, Tunisia, Summa Cum Laude
//           </p>
//           <h4>Master's in Physico-Chemistry</h4>
//           <p>
//             From September 2008 to June 2010 Faculty of Sciences of Monastir
//             Monastir, Tunisia Summa Cum Laude
//           </p>
//         </div>
//       </div>
//       {/* Project 1*************************** */}
//       <div className="resume__container-summary-title">
//         <h2>PROJECTS</h2>

//         <div className="resume__container-summary-Training">
//           <h3>Home Services Web Application (Ongoing):</h3>
//           <p>
//             Development of a modern web application for services such as moving,
//             cleaning, plumbing, and handyman tasks. The application stands out
//             for its polished design and dynamic animations.
//           </p>
//           <h4>Technologies Used:</h4>
//           <h5>Backend:</h5>
//           <p>
//             TypeScript with Next.js for performant server-side rendering and a
//             RESTful API.
//           </p>
//           <h5>Database:</h5>
//           <p>SQL integrated via an efficient ORM.</p>
//           <h5>Authentication:</h5>
//           <p>
//             Implementation of secure user management with Passport.js, allowing
//             JWT authentication as well as GoogleAuth sign-in and sign-up.
//           </p>
//           <h5>Frontend:</h5>
//           <p>SCSS for modern design and engaging animations.</p>
//           <h5>Service Management:</h5>
//           <p>
//             Search, booking, and tracking. Interactive animations and responsive
//             design for a smooth user experience.
//           </p>
//         </div>
//       </div>
//       {/* Project 2 *************************** */}
//       <div className="resume__container-summary-title">
//         <div className="resume__container-summary-Training">
//           <h3>Mobile App – Moving Services</h3>
//           <p>
//             Development of a mobile application focused on movingservices,
//             featuring robust functionality and an intuitive user interface.
//           </p>
//           <h4>Technologies Used:</h4>
//           <h5>Backend:</h5>
//           <p>Express.js with Sequelize for data handling.</p>
//           <h5>Database:</h5>
//           <p>SQL integrated via an efficient ORM.</p>
//           <h5>Authentication:</h5>
//           <p>JWT for secure user access.</p>
//           <h5>Payments:</h5>
//           <p>Stripe integration for secure transactions.</p>
//           <h5>Image Storage:</h5>
//           <p>Cloudinary for efficient photo management.</p>
//           <h5>Chat:</h5>
//           <p>Real-time communication using Socket.io</p>
//           <h5>Frontend:</h5>
//           <p>
//             Responsive design with integrated Google Maps for interactive
//             location selection
//           </p>
//           <h5>Key Features::</h5>
//           <li>Secure registration and login via JWT</li>
//           <li>In-app live chat between users and drivers via Socket.io</li>
//           <li>Stripe-based secure online payments</li>
//           <li>Real-time updates and user-friendly interface</li>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Resume;

import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Divider,
  Grid,
  Link,
  Stack,
  Paper,
  Button,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import shady from "../../images/shady.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const techStack = {
  frontEnd: ["React", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  backEnd: ["Node.js", "Express.js"],
  databases: ["MongoDB", "SQL", "Sequelize"],
  tools: ["Git", "Figma"],
};

const education = [
  {
    degree: "PhD in Chemistry",
    institution: "Faculty of Sciences of Monastir, Tunisia",
    period: "2011-2016",
    honors: "Summa Cum Laude",
  },
  {
    degree: "Master of Science in Physico-Chemistry",
    institution: "Faculty of Sciences of Monastir, Tunisia",
    period: "2008-2010",
    honors: "Summa Cum Laude",
  },
  {
    degree: "Bachelor of Science in Physics & Chemistry",
    institution: "Faculty of Sciences of Monastir, Tunisia",
    period: "2003-2007",
    honors: "Cum Laude",
  },
];

const workExperience = [
  {
    title: "Customer Care Representative",
    company:
      "Qatar General Electricity & Water Corporation (Kahramaa),Doha. Qatar",
    period: "December 2019 - March 2024",
  },
  {
    title: "Teaching",
    company: "Numidia School Gafsa.Tunisia",
    period: "Sep 2017 - June 2019",
  },
  {
    title: "Medical Representative",
    company: "Biocleaning Commercial Company Gafsa.Tunisia",
    period: "Junuary 2011 - July 2011",
  },

  {
    title: "Teaching, Research, and Supervision Experience",
    company: "Faculty of Sciences of Monastir, LIMA",
    period: "2018 - 2019",
  },
];

const additionalProjects = [
  {
    title: "Home Services Web Application",
    details: [
      "Modern design and dynamic animations.",
      "Express.js + TypeScript backend with Passport.js and JWT.",
      "Responsive frontend using SCSS.",
      "Future features: online payment & real-time notifications.",
    ],
  },
  {
    title: "Mobile App - Moving Services",
    details: [
      "Built with Express.js, Sequelize, and JWT authentication.",
      "Cloudinary for image storage, Stripe for payments.",
      "Live chat via Socket.io and Google Maps integration.",
    ],
  },
  {
    title: "E-commerce Platform - Para-pharmacy",
    details: [
      "Solo project with React, Express, MySQL, Cloudinary & Stripe.",
      "Secure login with JWT, full cart system with Redux Toolkit.",
      "Fully responsive design from scratch.",
    ],
  },
  {
    title: "Football League Web Application",
    details: [
      "React frontend with SCSS styling.",
      "Express backend + MySQL using Sequelize ORM.",
      "Integrated public football API for real-time data.",
    ],
  },
];

const languages = [
  "English (Fluent)",
  "French (Fluent - TCF C2)",
  "Arabic (Native)",
];

export default function Profile() {
  return (
    <Container maxWidth="md" sx={{ py: 0 }}>
      <Header />
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        mb={4}
        marginTop={3}
      >
        <Avatar
          alt="Mourad Shady Kahouech"
          src={shady}
          sx={{ width: 150, height: 150 }}
        />
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Mourad Shady Kahouech
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Full-Stack Web and Mobile Developer
          </Typography>
          <Typography color="text.secondary" mb={1}>
            Expertise in React, Node.js, and JavaScript. Skilled in building
            scalable, user-centric applications.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Tunis, Tunisia" size="small" />
            <Chip label="UTC +02:00" size="small" />
          </Stack>
          <Stack direction="row" spacing={1} mt={1}>
            <Link
              href="mailto:shady.kahouech@gmail.com"
              underline="none"
              color="inherit"
            >
              <Tooltip title="Email">
                <MailOutlineIcon />
              </Tooltip>
            </Link>
            <Link
              href="https://linkedin.com/in/mourad-shady-kahouech-8ba85466"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Tooltip title="LinkedIn">
                <LinkedInIcon />
              </Tooltip>
            </Link>
            <Link
              href="https://github.com/ShadyKahouech"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Tooltip title="GitHub">
                <GitHubIcon />
              </Tooltip>
            </Link>
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      {/* About */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Typography>
          Full-stack JavaScript developer with expertise in React.js, Next.js,
          Express.js, and Node.js. I build high-performance web and mobile apps.
          With a background as a researcher, lecturer, and medical
          representative, I bring strong communication, analytical skills, and a
          passion for technology to every project.
        </Typography>
      </Box>

      {/* Tech Stack */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Tech Stack
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(techStack).map(([category, items]) => (
            <Grid item xs={12} md={6} key={category}>
              <Typography
                variant="subtitle1"
                fontWeight="600"
                gutterBottom
                sx={{ textTransform: "capitalize" }}
              >
                {category.replace(/([A-Z])/g, " $1")}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    color="primary"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Education
        </Typography>
        <Stack spacing={2}>
          {education.map(({ degree, institution, period, honors }) => (
            <Paper key={degree} variant="outlined" sx={{ p: 2 }}>
              <Typography fontWeight="bold">{degree}</Typography>
              <Typography>{institution}</Typography>
              <Typography color="text.secondary">{period}</Typography>
              <Typography fontStyle="italic">{honors}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>

      {/* Experience */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Work Experience
        </Typography>
        <Stack spacing={2}>
          {workExperience.map(({ title, company, period }, index) => (
            <Paper key={index} variant="outlined" sx={{ p: 2 }}>
              <Typography fontWeight="bold">{title}</Typography>
              <Typography>{company}</Typography>
              <Typography color="text.secondary">{period}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>

      {/* Projects */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Projects
        </Typography>
        {additionalProjects.map(({ title, details }) => (
          <Box key={title} mb={3}>
            <Typography variant="h6" fontWeight="600">
              {title}
            </Typography>
            <ul>
              {details.map((point, idx) => (
                <li key={idx}>
                  <Typography>{point}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>

      {/* Languages */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Languages
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {languages.map((lang) => (
            <Chip key={lang} label={lang} color="secondary" sx={{ mb: 1 }} />
          ))}
        </Stack>
      </Box>

      <Divider />

      <Footer />
    </Container>
  );
}
