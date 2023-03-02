import '../../Assets/styles/_color.scss'
import { jsPDF } from "jspdf";
import moiJPG from "./moi.jpg";

const selectColor = () => {
    const bgColor = window.getComputedStyle(document.body, null).backgroundColor;
    console.log({ "background-color": bgColor});
    return bgColor;
}

const generate = () => {
    let pdf = new jsPDF();
    pdf.setLanguage("fr-FR")

    const jaune = "rgb(254, 255, 107)";
    const white = "rgb(255, 255, 255)";

    console.log(pdf);
    // -------------------------------------------------------------- Photo
    let photo = new Image();
    photo.src = moiJPG;
    console.log(photo.src);
    pdf.addImage(photo, "JPEG", 0, -5, 70, 90);

    // -------------------------------------------------------------- Nom Prénom
    pdf.setFontSize(50);
    pdf.setFont("helvetica", "normal");
    pdf.text(165, 20, "Alain");
    pdf.text(127, 35, "GUILLON");

    // ------------------------------ Bande noir pour "Développeur Front Junior"
    pdf.rect(70, 40, 150, 15, "F");

    // ----------------------------------------- Text "Développeur Front Junior"
    pdf.setFontSize(28);
    pdf.setFont("Montserrat", "italic");
    pdf.setTextColor(jaune);
    pdf.text(75, 50, "Développeur Front/Back Junior");

    // -------------------------------------------------------------- Adresse
    pdf.setFontSize(12);
    pdf.setFont("helvetica");
    pdf.setTextColor(75);
    pdf.text(
        75,
        63,
        "7, Impasse Paul Langevin - 69330 Meyzieu (Région Lyonnaise)"
    );

    // ----------------------------------------------------------- Bande profile
    pdf.setDrawColor(0);
    // pdf.setFillColor(selectColor());
    pdf.setFillColor(selectColor());
    pdf.rect(0, 70, 210, 30, "FD");

    // ------------------------------------------------------ Text dans la bande
    pdf.setTextColor(white);
    pdf.setFontSize(12);
    let text = `\tEn reconversion professionnel, j'ai pour ambition de devenir 
        développeur fullstack. A 37 ans et pour mener à bien cette reconversion, 
        je me suis inscris sur plusieurs plateformes d'E-learning.
        Je me forme essentiellement autour de l'écho-système JavaScript.`;
    pdf.text(60, 78, text);

    // --------------------------------------------- Titre Profile Professionnel
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(jaune);
    pdf.text(5, 83, "PROFIL");
    pdf.text(5, 89, "PROFESIONNEL");

    // -------------------------------------------------------- Section contact
    pdf.setDrawColor(0);
    pdf.setFillColor(50);
    pdf.rect(0, 100, 70, 90, "FD");
    pdf.setFontSize(18);
    pdf.setFont("Montserrat", "bold");
    pdf.setTextColor(jaune);
    pdf.text(45, 110, "Contact");
    pdf.setDrawColor(jaune);
    pdf.line(10, 115, 70, 115);
    pdf.setFontSize(11);
    pdf.setTextColor(jaune);
    pdf.text(5, 123, "Website");
    pdf.text(5, 128, "E-mail");
    pdf.text(5, 133, "Phone");
    pdf.text(5, 138, "Permis");
    pdf.text(5, 143, "Situation");
    pdf.text(5, 148, "Enfants");
    pdf.setFontSize(10);
    pdf.setTextColor(white);
    pdf.text(22, 123, "http://alain-guillon.fr");
    pdf.text(22, 128, "alain.guillon.69330@outlook.fr");
    pdf.text(22, 133, "06.22.63.79.24");
    pdf.text(22, 138, "Permis B");
    pdf.text(22, 143, "En couple (16 ans)");
    pdf.text(22, 148, "2 enfants et parange");

    // ---------------------------------------------------------- Section skills
    pdf.setDrawColor(0);
    pdf.setFillColor(75);
    pdf.rect(0, 155, 70, 90, "FD");
    pdf.setFontSize(18);
    pdf.setFont("Montserrat", "bold");
    pdf.setTextColor(jaune);
    pdf.text(7, 165, "Technologies utilisés");
    pdf.setDrawColor(jaune);
    pdf.line(10, 170, 70, 170);
    pdf.setFontSize(12);

    // -------------------------------------------------------------- Skills
    pdf.setTextColor(jaune);
    // pdf.setFontType("bold");
    pdf.text(5, 178, "HTML, CSS");
    pdf.text(5, 183, "SASS, JS");
    pdf.text(5, 188, "REACT");
    pdf.text(5, 193, "VUEJS");
    pdf.text(5, 198, "PHP, MYSQL");
    pdf.text(5, 203, "PYTHON, DJANGO");
    pdf.text(5, 208, "BASH, GIT");
    pdf.text(5, 213, "NODEJS, TS");
    pdf.text(5, 218, "NPM, PNPM");
    pdf.text(5, 223, "LINUX");
    pdf.text(5, 228, "WORDPRESS");
    pdf.text(5, 233, "Stack MERN");
    pdf.text(5, 238, "Stack MEVN");

    // -------------------------------------------------------------- front
    pdf.setFontSize(13);
    pdf.setTextColor(white);
    // pdf.setFontType("italic");

    pdf.text(45, 178, "*********");  // HTML CSS
    pdf.text(45, 183, "******");     // SASS JS
    pdf.text(45, 188, "******");     // REACT
    pdf.text(45, 193, "***");        // VueJS
    pdf.text(45, 198, "****");       // PHP, MySQL
    pdf.text(45, 203, "**");         // Python, Django
    pdf.text(45, 208, "******");     // Bash, Git
    pdf.text(45, 213, "**");         // NodeJS, TS
    pdf.text(45, 218, "********");   // NPM, PNPM
    pdf.text(45, 223, "******");     // Linux
    pdf.text(45, 228, "******");     // Wordpress
    pdf.text(45, 233, "*");          // MEVN
    pdf.text(45, 238, "*");          // MERN

    // ----------------------------------------------- Section Centre d'intérêts
    pdf.setDrawColor(0);
    pdf.setFillColor(50);
    pdf.rect(0, 245, 70, 65, "FD");
    pdf.setFontSize(18);
    // pdf.setFontType("bold");
    pdf.setTextColor(jaune);
    pdf.text(20, 255, "Centre d'intérêts");
    pdf.setDrawColor(jaune);
    pdf.line(10, 260, 70, 260);
    pdf.setFontSize(12);
    // pdf.setFontType("normal");
    pdf.setTextColor(white);
    pdf.text(5, 270, "> Plateforme d'E-learning");
    pdf.text(5, 275, "> Football -");
    pdf.text(5, 280, "> Cinéma");
    pdf.text(5, 285, "> Handball - ");
    pdf.text(5, 290, "> Le Japonais - ");
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(28, 275, "(Olympique Lyonnais)")
    pdf.text(30, 285, "(18 ans - Amateur)");
    pdf.text(35, 290, "(Découverte)");

    // ------------------------------------ Section Expériences Professionnelles
    pdf.setFontSize(18);
    // pdf.setFontType("bold");
    pdf.setTextColor(50);
    pdf.text(140, 110, "Parcours Professionnel");
    pdf.setDrawColor(50);
    pdf.line(80, 115, 210, 115);

    // ------------------------------------------------------ Expérience pro n°1
    pdf.setFontSize(14);
    // pdf.setFontType("bold");
    // pdf.setTextColor(50);
    pdf.setTextColor(selectColor());
    pdf.text(80, 123, "3W Academy");
    pdf.setFontSize(12);
    // pdf.setFontType("normal");
    pdf.text(80, 128, "Enseignant Adjoint");
    pdf.text(80, 133, "Lyon");
    pdf.text(80, 138, "Fév. 2019 - Avr. 2019");
    let exp1 = `Accompagnement d'un nouveau formateur avec
    comme tâche d'enseigner le JavaScript,
    le PHP "Procédurale et l'orienté objet (POO)"
    ainsi que le langage SQL (MySQL - PDO)`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 123, exp1);

    // ------------------------------------------------------ Expérience pro n°2
    pdf.setFontSize(14);
    // pdf.setFontType("bold");
    // pdf.setTextColor(50);
    // pdf.setTextColor(selectColor());
    pdf.setTextColor(selectColor());
    pdf.text(80, 148, "3W Academy");
    pdf.setFontSize(12);
    // pdf.setFontType("normal");
    pdf.text(80, 153, "Enseignant");
    pdf.text(80, 158, "Lyon");
    pdf.text(80, 163, "Fév. 2017 - Avr. 2017");
    let exp2 = `Reprise d'une classe avec comme tâche
    d'enseigner le JavaScript, le PHP
    "Procédurale et l'orienté objet (POO)"
    ainsi que le langage SQL (MySQL - PDO)`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 148, exp2);

    // ------------------------------------------------------ Section Formations
    pdf.setFontSize(18);
    // pdf.setFontType("bold");
    pdf.setTextColor(50);
    pdf.text(170, 173, "Formations");
    pdf.setDrawColor(50);
    pdf.line(80, 178, 210, 178);

    // ----------------------------------------------------- Formation Docstring
    pdf.setFontSize(12);
    // pdf.setFontType("bold");
    // pdf.setTextColor(255, 0, 0);
    pdf.setTextColor(selectColor());
    pdf.text(80, 185, "Docstring");
    pdf.setFontSize(14);
    // pdf.setFontType("normal");
    pdf.text(80, 190, "Autodidacte");
    pdf.text(80, 195, "2020 - 2021");
    let formation1 = `- Découverte de python
    - Découverte de PySide2 (Interface graphique)
    - Découverte de l'orienté objet avec Python
    - Découverte de Django`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 185, formation1);

    // --------------------------------------------------------- Formation Dyma
    pdf.setFontSize(12);
    // pdf.setFontType("bold");
    // pdf.setTextColor(0, 0, 155);
    pdf.setTextColor(selectColor());
    pdf.text(80, 205, "Dyma");
    pdf.setFontSize(14);
    // pdf.setFontType("normal");
    pdf.text(80, 210, "Autodidacte");
    pdf.text(80, 215, "2019 - 2021");
    let formation2 = `- Révision HTML/CSS
    - Révision JS + découverte ES6, ES7, ES8
    - Découverte des framework VueJS et React
    - Découverte de Git, Github, Gitlab, Gitflow
    - Découverte de NodeJs, Express, MongoDB
    - Découverte de Linux`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 205, formation2);

    // ----------------------------------------------- Formation OpenClassRooms
    pdf.setFontSize(12);
    // pdf.setFontType("bold");
    // pdf.setTextColor(155, 0, 155);
    pdf.setTextColor(selectColor());
    pdf.text(80, 233, "OpenClassRooms");
    pdf.setFontSize(14);
    // pdf.setFontType("normal");
    pdf.text(80, 238, "Autodidacte");
    pdf.text(80, 243, "2015 - 2021");
    let formation3 = `- Gérer son identité numérique
    - Découvrez les solutions CMS (wordpress)
    - Concevez votre site web avec PHP et MySQL
    - Gérer votre code avec Git et Github
    - et bien d'autres encore`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 233, formation3);

    // --------------------------------------------------------- Formation Udemy
    pdf.setFontSize(14);
    // pdf.setFontType("bold");
    // pdf.setTextColor(0, 100, 0);
    pdf.setTextColor(selectColor());
    pdf.text(80, 258, "Udemy");
    pdf.setFontSize(12);
    // pdf.setFontType("normal");
    pdf.text(80, 263, "Autodidacte");
    pdf.text(80, 268, "2015 - 2020");
    let formation4 = `Plusieurs cours (100+) en complément sur différentes
    technologies telle que :
    - HTML, CSS, JS, 
    - VUE, NODE, REACT, 
    - PHP, POO, SQL`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    // pdf.setFontType("italic");
    pdf.text(127, 258, formation4);

    // ----------------------------------------------------------- Formation 3WA
    pdf.setFontSize(14);
    // pdf.setFontType("bold");
    // pdf.setTextColor(255, 50, 0);
    pdf.setTextColor(selectColor());
    pdf.text(80, 283, "3W Academy");
    pdf.setFontSize(12);
    // pdf.setFontType("normal");
    pdf.text(80, 288, "Financée");
    pdf.text(80, 293, "2016 et 2019 - (3 mois)");
    let formation5 = `Découverte de 5 langages incontournable :
    - HTML / CSS / JS 
    - PHP / SQL`;
    pdf.setTextColor(100);
    pdf.setFontSize(10);
    pdf.text(127, 283, formation5);
    pdf.save("cv-alain-guillon.pdf");
}

const BtnGenerate = () => {
    selectColor();
    return(
        <img
            title="le fichier sera télécharger au format PDF"
            src="/images/cv.png"
            alt="représentation de mon CV"
            width="125"
            loading="lazy"
            onClick={generate}
        />
    )
}
export default BtnGenerate