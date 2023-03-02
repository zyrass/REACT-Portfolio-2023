// Dependancies
import React from "react";
import styled from "styled-components";

// Styled components
const StyledP = styled.p`
  font-size: 4rem;
  color: ${(props: any) => props.theme.secondary};
`;
const StyledH3 = styled.h3`
  font-size: 3rem;
  color: ${(props: any) => props.theme.primary};
`;

function Statistiques() {
    const animation = (h3: string, p: number) => {
        return (
            <>
                <StyledH3>{h3}</StyledH3>
                <StyledP>{p}</StyledP>
            </>
        );
    };

    return (
        <React.Fragment>
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <div>{animation("Cafés", 1000)}</div>
                <div>{animation("E-Learning", 11)}</div>
                <div>{animation("Heures / Dyma.fr", 425)}</div>
                <div>{animation("Projets Pro.", 1)}</div>
                <div>{animation("Projets Perso.", 18)}</div>
            </div>
        </React.Fragment>
    );
}

export default Statistiques;