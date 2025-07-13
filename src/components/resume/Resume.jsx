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
  research: [
    "Connaissance des bonnes pratiques de laboratoire (BPL)",
    "Caractérisation spectroscopique (UV-Vis, IR, RMN)",
    "Sensibilisation à la sécurité chimique et aux protocoles de prévention des risques",
    "Semi-conducteurs à base de phtalocyanines",
    "Extraction et modification de la lignine",
    "Valorisation des déchets environnementaux",
    "Évaluation des risques en laboratoires chimiques",
    "Gestion des déchets chimiques et respect des normes environnementales",
  ],
};

const education = [
  {
    degree: "Certifications et Formations Complémentaires",
    institution: "RebootKamp (RBK) technopole Ghazala, Tunisie",
    period:
      "Formation Développeur Full-Stack JavaScript, +1000 heures de cours",
  },
  {
    degree: "Doctorat en Chimie",
    institution: "Faculté des Sciences de Monastir, Tunisie",
    period: "2011-2016",
    honors: "Summa Cum Laude",
  },
  {
    degree: "Master en chimie physique",
    institution: "Faculté des Sciences de Monastir, Tunisie",
    period: "2008-2010",
    honors: "Summa Cum Laude",
  },
  {
    degree: "Licence en Physique-Chimie",
    institution: "Faculté des Sciences de Gafsa, Tunisie",
    period: "2003-2007",
    honors: "Cum Laude",
  },
];

const workExperience = [
  {
    title: "Représentant du Service Client",
    company:
      "Qatar General Electricity & Water Corporation (Kahramaa), Doha, Qatar",
    period: "Décembre 2019 - Mars 2024",
  },
  {
    title: "Enseignant - Chimie Organique (Master 1)",
    company: "Faculté des Sciences de Monastir, Tunisie",
    period: "Septembre 2017 - Juin 2018",
  },
  {
    title: "Enseignant de Chimie au Lycée",
    company: "Lycée Numidia Gafsa, Tunisie",
    period: "Septembre 2017 - Juin 2019",
  },
  {
    title: "Délégué Médical",
    company: "Société Commerciale de Bio-nettoyage Médical, Gafsa, Tunisie",
    period: "Janvier 2011 - Juillet 2011",
  },
  {
    title: "Expérience de Recherche et Supervision",
    company:
      "Faculté des Sciences de Monastir, Laboratoire des Interfaces et Matériaux Avancés (LIMA), Monastir",
    period: "Assistant de Recherche : 2018 - 2019",
  },
];

const additionalProjects = [
  {
    title:
      "Projet de Thèse : Synthèse de Nouveaux Matériaux Semi-Conducteurs à Base de Phtalocyanines",
    details: [
      "Superviseur : Pr. Jamoussi Bassem - Faculté des Sciences de Monastir",
      "Ce travail de recherche a porté sur la conception et la synthèse de nouveaux matériaux organiques semi-conducteurs destinés à des applications dans les dispositifs optoélectroniques.",
      "Il a impliqué des techniques avancées de synthèse organique, de caractérisation structurale et d'analyse des propriétés électroniques et thermiques.",
      "Cette thèse m'a permis d'acquérir une solide expertise en manipulation de produits chimiques sensibles, en gestion des risques en laboratoire, et en développement de matériaux à potentiel durable.",
    ],
  },
  {
    title:
      "Projet de Master : Valorisation des Sous-Produits de la Biomasse : Extraction, Modification Chimique et Application de la Lignine",
    details: [
      "Superviseur : Pr. Mustapha Majdoub - Faculté des Sciences de Monastir",
      "Ce projet porte sur la valorisation environnementale des déchets issus de l’industrie papetière. Il consiste à extraire la lignine de la liqueur noire, riche en composés phénoliques toxiques, puis à effectuer des modifications chimiques afin de rendre cette matière valorisable. La lignine modifiée est ensuite utilisée comme agent dispersant dans la coloration du polyester.",
      "Ce travail a permis de réduire l’impact environnemental de sous-produits polluants tout en explorant des applications durables de la lignine. Il m’a également sensibilisé aux enjeux de gestion des déchets industriels, de prévention des risques chimiques et de développement durable.",
    ],
  },
  {
    title: "Application mobile de déménagement (service spécifique)",
    details: [
      "Technologies utilisées ",
      "Base de données : MySQL",
      "Backend : Express.js avec Sequelize pour la gestion des données.",
      "Authentification : JWT pour sécuriser les accès.",
      "Paiement : Intégration de Stripe pour des transactions sécurisées.",
      "Stockage d'images : Cloudinary pour une gestion efficace des photos.",
      "Chat : Socket.io pour une communication en temps réel entre les utilisateurs.",
      "Frontend : Design responsive avec une carte interactive intégrée (Google Maps API).",
      "Design entièrement responsive créé de zéro.",
      "Fonctionnalités principales :Inscription et connexion sécurisées via JWT",
      "Paiement sécurisé via Stripe.",
      "Chat intégré avec mise à jour instantanée.",
    ],
  },
  {
    title: "Plateforme E-commerce - Parapharmacie",
    details: [
      "Backend : Express.js avec Sequelize pour la gestion des données.",
      "Connexion sécurisée avec JWT, système de panier avec Redux Toolkit.",
      "Design entièrement responsive créé de zéro.",
    ],
  },
  {
    title: "Application Web Ligue de Football",
    details: [
      "Frontend React avec stylisation SCSS.",
      "Backend Express + MySQL avec ORM Sequelize.",
      "API publique de football intégrée pour les données en temps réel.",
    ],
  },
];

const languages = [
  "Anglais (Courant)",
  "Français (Courant - TCF C2)",
  "Arabe (Langue Maternelle)",
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
            Développeur Full-Stack Web et Mobile
          </Typography>
          <Typography color="text.secondary" mb={1}>
            Full-Stack Web & Mobile Developer Ex-chercheur et formateur
            scientifique. Expérience en communication médicale et en milieu
            international. Expertise en React, Node.js, et JavaScript. Créateur
            de solutions web performantes et intuitives.
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
          À propos
        </Typography>
        <Typography>
          Développeur Full-Stack JavaScript spécialisé en React.js, Next.js,
          Express.js et Node.js, avec une solide expérience scientifique. Je
          conçois des applications web et mobiles performantes, tout en mettant
          en œuvre une approche rigoureuse et méthodique acquise au cours de mes
          années de recherche, d'enseignement et de communication scientifique.
          Sensibilisé aux enjeux de la qualité, de la sécurité et du
          développement durable, je combine aujourd'hui mes compétences
          techniques et analytiques pour développer des solutions innovantes et
          responsables.
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
                sx={{
                  textTransform: "capitalize",
                  mb: 2,
                }}
              >
                {category.replace(/([A-Z])/g, " $1")}
              </Typography>
              <Stack direction="row" sx={{ gap: "12px 16px" }} flexWrap="wrap">
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
          DIPLÔMES ET FORMATIONS
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
