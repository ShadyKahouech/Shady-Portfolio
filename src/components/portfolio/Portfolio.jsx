import React from "react";
import dayPlus1 from "../../images/daryplus/daryplus1.png";
import dayPlus2 from "../../images/daryplus/daryplus2.png";
import dayPlus3 from "../../images/daryplus/daryplus3.png";
import dayPlus4 from "../../images/daryplus/daryplus4.png";
import dayPlus5 from "../../images/daryplus/daryplus5.png";
import demenago9 from "../../images/demenago/demenago9.png";
import demenago2 from "../../images/demenago/demenago2.png";
import demenago11 from "../../images/demenago/demenago11.png";
import demenago28 from "../../images/demenago/demenago28.png";
import demenago19 from "../../images/demenago/demenago19.png";
import demenago5 from "../../images/demenago/demenago5.png";
import demenago6 from "../../images/demenago/demenago6.png";
import demenago7 from "../../images/demenago/demenago7.png";
import demenago8 from "../../images/demenago/demenago8.png";
import demenago10 from "../../images/demenago/demenago10.png";
import demenago12 from "../../images/demenago/demenago12.png";
import demenago22 from "../../images/demenago/demenago22.png";
import demenago17 from "../../images/demenago/demenago17.png";
import demenago18 from "../../images/demenago/demenago18.png";
import demenago23 from "../../images/demenago/demenago23.png";
import demenago25 from "../../images/demenago/demenago25.png";
import demenago37 from "../../images/demenago/demenago37.png";
import demenago13 from "../../images/demenago/demenago13.png";
import demenago16 from "../../images/demenago/demenago16.png";

import img1 from "../../images/e-commerce2/1.png";
import img2 from "../../images/e-commerce2/2.png";
import img3 from "../../images/e-commerce2/3.png";
import img4 from "../../images/e-commerce2/4.png";
import img5 from "../../images/e-commerce2/5.png";
import img6 from "../../images/e-commerce2/6.png";
import img7 from "../../images/e-commerce2/7.png";
import img8 from "../../images/e-commerce2/8.png";

import imgage1 from "../../images/e-commerce1/e-commerce1.png";
import imgage2 from "../../images/e-commerce1/e-commerce2.png";
import imgage3 from "../../images/e-commerce1/e-commerce3.png";
import imgage4 from "../../images/e-commerce1/e-commerce4.png";
import imgage5 from "../../images/e-commerce1/e-commerce5.png";
import imgage6 from "../../images/e-commerce1/e-commerce6.png";
import imgage7 from "../../images/e-commerce1/e-commerce7.png";

import Header from "../header/Header";
import Clipper from "../clipper/Clipper";
import "./Portfolio.css";
import Footer from "../footer/Footer";

function Portfolio() {
  const dayPlus = [
    { image: dayPlus1, title: "Slide 1" },
    { image: dayPlus2, title: "Slide 2" },
    { image: dayPlus3, title: "Slide 3" },
    { image: dayPlus4, title: "Slide 4" },
    { image: dayPlus5, title: "Slide 5" },
  ];
  const demenago = [
    { image: demenago9, title: "Slide 1" },
    { image: demenago2, title: "Slide 2" },
    { image: demenago11, title: "Slide 3" },
    { image: demenago28, title: "Slide 4" },
    { image: demenago19, title: "Slide 5" },
    { image: demenago5, title: "Slide 6" },
    { image: demenago18, title: "Slide 7" },
    { image: demenago6, title: "Slide 8" },
    { image: demenago7, title: "Slide 9" },
    { image: demenago8, title: "Slide 10" },
    { image: demenago10, title: "Slide 11" },
    { image: demenago12, title: "Slide 12" },
    { image: demenago17, title: "Slide 13" },
    { image: demenago22, title: "Slide 14" },
    { image: demenago23, title: "Slide 15" },
    { image: demenago25, title: "Slide 16" },
    { image: demenago37, title: "Slide 17" },
    { image: demenago13, title: "Slide 18" },
    { image: demenago16, title: "Slide 19" },
  ];
  const paraPharmacy = [
    { image: img6, title: "Slide 1" },
    { image: img1, title: "Slide 2" },
    { image: img2, title: "Slide 3" },
    { image: img3, title: "Slide 4" },
    { image: img4, title: "Slide 5" },
    { image: img5, title: "Slide 6" },
    { image: img7, title: "Slide 7" },
    { image: img8, title: "Slide 8" },
  ];
  const ecom = [
    { image: imgage1, title: "Slide 1" },
    { image: imgage2, title: "Slide 2" },
    { image: imgage3, title: "Slide 3" },
    { image: imgage4, title: "Slide 4" },
    { image: imgage5, title: "Slide 5" },
    { image: imgage6, title: "Slide 6" },
    { image: imgage7, title: "Slide 7" },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="portfolio__container-title">
        <h1>Portfolio</h1>
      </div>

      {/* Project1  */}
      <div className="portfolio__container-pr1">
        <h3>Project1 : Dary Plus</h3>
        <span className="portfolio__container-text">
          Développement d'une application webmoderne pour des services tels que
          déménagement, ménage, plomberie et bricolage.L'application se
          distingue par son design soigné et ses animations dynamiques
        </span>

        <Clipper images={dayPlus} />
      </div>
      {/* Project2  */}
      <div className="portfolio__container-pr1 margin__top">
        <h3>Project2 : Demenago</h3>
        <span className="portfolio__container-text">
          Création d'une applicationmobile dédiée au déménagement, mettant en
          avant des fonctionnalités robustes et uneinterface utilisateur
          intuitive.
        </span>

        <Clipper images={demenago} />
      </div>
      {/* Project3  */}
      <div className="portfolio__container-pr1 margin__top">
        <h3>Project3 : E-commerce (para-pharmacy)</h3>
        <span className="portfolio__container-text">
          Création d'une plateforme e-commerce complètedédiée à la
          parapharmacie, développée de A à Z en solo. Ce projet met en avant
          mescompétences en développement full-stack ainsi que ma capacité à
          gérer un projet complexede manière autonome.
        </span>

        <Clipper images={paraPharmacy} />
      </div>
      {/* Project4  */}
      <div className="portfolio__container-pr1 margin__top">
        <h3>Project3 : E-commerce </h3>
        <span className="portfolio__container-text">
          J'ai conçu une plateforme e-commerce complète dédiée à la vente en
          ligne, développée avec React.js et Express.js. Le backend gère les
          utilisateurs, produits, paniers et paiements avec Sequelize et MySQL.
          Le frontend est 100 % personnalisé avec une interface responsive et
          une gestion d'état via Redux Toolkit. Paiement sécurisé via Stripe,
          gestion d'images avec Cloudinary, et filtres dynamiques pour une
          navigation fluide.
        </span>

        <Clipper images={ecom} />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
