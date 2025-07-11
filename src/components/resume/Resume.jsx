import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Resume.css";

function Resume() {
  return (
    <div>
      <div className="sticky-header">
        <Header />
      </div>
      <h1 className="resume">Resume</h1>
      <div className="resume__container">
        <div className="vertical-line"></div>
        <div className="resume__container-summary">
          <h2>Summary</h2>
          <p>
            Full-stack JavaScript developer with expertise in React.js, Next.js,
            Express.js, and Node.js,delivering innovative web and mobile
            projects. With a strong background in databasemanagement and
            front-end development, I build high-performance, scalable solutions.
            As aformer researcher and lecturer, I bring excellent communication
            and teamwork skills. Driven bycontinuous learning, I am passionate
            about contributing to ambitious and impactful webdevelopment
            initiatives..
          </p>
          <h2>Skills</h2>
          <h4>Front-End Development :</h4>
          <p>
            React.js, Next..js, React Native, TypeScript, HTML, CSS,
            SCSS,Tailwind CSS, Figma
          </p>
          <h4>Back-end Development :</h4>
          <p>Express.js, Node.js, SQL, Sequelize, MongoDB</p>
          <h4>Soft Skills :</h4>
          <p>
            Skilled in influencing and negotiating with diverse stakeholders.
            Experienced in teamwork, project supervision, and creating
            productive and collaborative workenvironments. Ability to
            communicate complex information clearly and effectively.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="resume__container-summary">
          <h2>Professional Experiences</h2>
          <h4>Customer Care Representative: </h4>
          <p>
            De décembre 2019 à mars 2024 Qatar General Electricity & Water
            Corporation (Kahramaa), Doha, Qatar
          </p>
          <h4>Teaching:</h4>
          <p>De septembre 2017 à 2019 Numidia Gafsa, Tunis</p>
          <p>
            De septembre 2017 à 2018 Faculty of Science of Monastir, Monatir,
            Tunis
          </p>
          <h4>Medical Representative:</h4>
          <p>
            From January 2011 to July 2011 Medical Bio-Cleaning Trading Company
            Gafsa, Tunis
          </p>
          <h4>Research and Supervision Experience:</h4>
          <p>
            From September 2011 to June 2016 Faculty of Sciences of Monastir,
            Laboratory of Interfaces and Advanced Materials (LIMA) Monastir
            Research Assistant Faculty of Sciences of Monastir, LIMA, Tunisia
            2011-2016
          </p>
          <h4>Research and Supervision Experience:</h4>
          <p>
            From September 2011 to June 2016 Faculty of Sciences of Monastir,
            Laboratory of Interfaces and Advanced Materials (LIMA) Monastir
            Research Assistant Faculty of Sciences of Monastir, LIMA, Tunisia
            2011-2016
          </p>
        </div>
      </div>
      {/* *************************** */}
      <div className="resume__container-summary-title">
        <h2>DEGREES AND TRAINING</h2>

        <div className="resume__container-summary-Training">
          <h4>Certifications and Additional Training</h4>
          <p>
            From April 2024 to September 2024 RebootKamp (RBK) Technopole
            Ghazala, Tunisia Full-Stack JavaScript Developer Training +1000
            hours of courses
          </p>
          <h4>PhD in Chemistry</h4>
          <p>
            From September 2011 to October 2016 Faculty of Sciences of Monastir
            Monastir, Tunisia, Summa Cum Laude
          </p>
          <h4>Master's in Physico-Chemistry</h4>
          <p>
            From September 2008 to June 2010 Faculty of Sciences of Monastir
            Monastir, Tunisia Summa Cum Laude
          </p>
        </div>
      </div>
      {/* *************************** */}
      <div className="resume__container-summary-title">
        <h2>PROJECTS</h2>

        <div className="resume__container-summary-Training">
          <h4>Application web de services à domicile (en cours):</h4>
          <p>
            Développement d'une applicationwebmoderne pour des services tels que
            déménagement, ménage, plomberie etbricolage.L'application se
            distingue par son design soigné et ses animations dynamiques.
          </p>
          <h4>Technologies utilisées :</h4>
          <h5>Backend :</h5>
          <p>
            TypeScript avec Next.js pour un rendu côté serveur performant et une
            APIRESTful.
          </p>
          <h5>Base de données : </h5>
          <p>SQL, intégrée via un ORM performant.</p>
          <h5>Authentification : </h5>
          <p>
            Mise en oeuvre d'une gestion sécurisée des utilisateurs avec
            Passport.js,permettant l'authentification via JWT ainsi que la
            connexion et l'inscription avec GoogleAuth
          </p>
          <h5>Frontend : </h5>
          <p>SCSS pour un design moderne et des animations engageantes</p>
          <h5>Authentification: </h5>
          <p>SCSS pour un design moderne et des animations engageantes</p>
          <h5>Gestion des services: </h5>
          <p>
            recherche, réservation et suivi. Animations interactives et
            designresponsive pour une expérience utilisateur fluide.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
