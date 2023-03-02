// Dépendances
import React from "react";
import styled from "styled-components";

// Components
import ProjectsList from "./ProjectsList/ProjectsList";

// Styled Components
const StyledH1 = styled.h1`
  color: ${(props: any) => props.theme.primary};
  font-size: 4rem;
`;

function Projects() {
    return (
        <React.Fragment>
            <div
                style={{
                    minHeight: "calc(100vh - 54px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "200px",
                }}
            >
                <StyledH1>Projects</StyledH1>
                <ProjectsList />
            </div>
        </React.Fragment>
    );
}

export default Projects;