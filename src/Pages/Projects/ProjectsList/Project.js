// Dépendances
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import ImgLogo from "../../../Components/ImgLogo";

// Styleds Components
const StyledFigure = styled.figure`
  width: 500px;
  height: 400px;
  border: 5px solid ${(props: any) => props.theme.backgroundColor};
  margin: 20px 0;
  box-shadow: 0 0 10px ${(props: any) => props.theme.primary};
  overflow: hidden;
  position: relative;
`;
const StyledImg = styled.img`
  background-size: cover;
  height: 250px;
  width: 100%;
`;
const StyledFigCaption = styled.figcaption`
  padding: 10px 20px;
  background-color: ${(props: any) => props.theme.primary};
  height: 150px;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.6px;
  font-weight: 500;
`;

function Project(props: any) {
    const { title, cover, describe, link } = props;
    return (
        <StyledFigure>
            <StyledImg src={cover} alt={`cover ${title}`} />
            <StyledFigCaption>
                <p>{describe}</p>
                <Link to={link} rel="noopener noreferrer" target="_blank">
                    Voir le projet
                </Link>
            </StyledFigCaption>

            <ImgLogo
                source="/images/logo/html.png"
                textAlternatif="logo html"
                sizes={"64"}
                top={"16"}
                right={"16"}
                zIndex={1}
                absolute={true}
                relative={false}
            />

            <ImgLogo
                source="/images/logo/css.webp"
                textAlternatif="logo css"
                sizes={"54"}
                top={"90"}
                right={"20"}
                zIndex={1}
                absolute={true}
                relative={false}
            />

            <ImgLogo
                source="/images/logo/js.png"
                textAlternatif="logo js"
                sizes={"54"}
                top={"170"}
                right={"20"}
                zIndex={1}
                absolute={true}
                relative={false}
            />
        </StyledFigure>
    );
}

export default Project;