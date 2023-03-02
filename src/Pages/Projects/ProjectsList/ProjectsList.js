// Dépendances
import React, { useState } from "react";

// Components
import Project from "./Project";

function ProjectsList() {
    // Hooks
    const [projectsList] = useState([
        {
            title: "Clavier Virtuel",
            cover: "/images/pattern.jpg",
            describe:
                "Conception d'un clavier virtuel lors de mon apprentissage de JavaScript",
            info: "Projet personnel",
            link: "https://www.google.fr",
        },
        {
            title: "Clavier Virtuel",
            cover: "/images/pattern.jpg",
            describe:
                "Conception d'un clavier virtuel lors de mon apprentissage de JavaScript",
            info: "Projet personnel",
            link: "https://www.google.fr",
        },
        {
            title: "Clavier Virtuel",
            cover: "/images/pattern.jpg",
            describe:
                "Conception d'un clavier virtuel lors de mon apprentissage de JavaScript",
            info: "Projet personnel",
            link: "https://www.google.fr",
        },
        {
            title: "Clavier Virtuel",
            cover: "/images/pattern.jpg",
            describe:
                "Conception d'un clavier virtuel lors de mon apprentissage de JavaScript",
            info: "Projet personnel",
            link: "https://www.google.fr",
        },
    ]);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                minWidth: "100vw",
            }}
        >
            {projectsList.map((currentProject, index) => {
                return (
                    <Project
                        key={currentProject.title + "_" + index}
                        title={currentProject.title}
                        cover={currentProject.cover}
                        describe={currentProject.describe}
                        link={currentProject.link}
                        info={currentProject.info}
                    />
                );
            })}
        </div>
    );
}

export default ProjectsList;
Footer