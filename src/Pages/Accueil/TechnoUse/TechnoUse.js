// Dependancies
import React from "react";
import styled from "styled-components";

// Styled Components
const StyledH2 = styled.h2`
  color: ${(props: any) => props.theme.primary};
  font-size: calc(25px + 3vmin);
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 3px ${(props: any) => props.theme.textColor};
`;
const StyledImg = styled.img`
  height: 100px;
  margin: 0 10px;
`;

function TechnoUse() {
    return (
        <React.Fragment>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StyledH2>Workflow utilisé pour ce portfolio</StyledH2>
                <div style={{ display: "flex", marginBottom: "20px" }}>
                    <StyledImg src={"/images/logo/html.png"} alt="Logo html" />
                    <StyledImg src={"/images/logo/css.webp"} alt="Logo css" />
                    <StyledImg src={"/images/logo/sass.png"} alt="Logo sass" />
                    <StyledImg src={"/images/logo/js.png"} alt="Logo js" />
                    <StyledImg src={"/images/logo/ts.png"} alt="Logo ts" />
                    <StyledImg src={"/images/logo/react.png"} alt="Logo react" />
                    <StyledImg src={"/images/logo/redux.png"} alt="Logo redux" />
                    <StyledImg src={"/images/logo/jest.png"} alt="Logo jest" />
                    <StyledImg src={"/images/logo/ubuntu.svg"} alt="Logo ubuntu" />
                    <StyledImg src={"/images/logo/git.png"} alt="Logo git" />
                    <StyledImg src={"/images/logo/github.png"} alt="Logo github" />
                    <StyledImg src={"/images/logo/vscode.png"} alt="Logo vscode" />
                </div>
                '
            </div>
        </React.Fragment>
    );
}

export default TechnoUse;