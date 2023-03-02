// Dépendances
import React, { Fragment, useEffect, useRef } from "react"
import VanillaTilt from 'vanilla-tilt';
import styled from "styled-components";

// Styled Components
const StyledH1      = styled.h1`
  font-size: calc(10px + 7vmin);
  color: ${(props:any) => props.theme.secondary};
  padding-bottom: 20px;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
`;
const StyledP       = styled.p`
  text-align: justify;
  font-size: calc(10px + 1.3vmin);
  letter-spacing: 1.6px;
  max-width: 100%;
  color: ${(props:any) => props.theme.primary};
  filter: drop-shadow(1px 1px 3px rgba(0,0,0,1));
`;
const StyledEm      = styled.em`
  color: ${(props:any) => props.theme.secondary};
  font-weight: 500;
`;
const StyledA     = styled.a`
  display: inline-block;
  padding: 15px 35px;
  margin: 60px;
  font-weight: 700;
  font-size: calc(10px + 1.6vmin);
  text-transform: uppercase;
  text-decoration: none;
  color:  ${(props:any)=> props.theme.textColor};
  background-color: ${(props:any)=> props.theme.primary};
  outline: none;
  border: 2px solid #252525;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
      color: #252525;
      background-color:  ${(props:any)=> props.theme.secondary};
      border: 1px solid $white;
  }
`;

// Container right
const StyledContainerRightFigure = styled.figure`
  max-width: 100%;
  padding: 30px;
  background-color: #252525;
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0 0 20px rgba(0,0,0, 0.5);
  border: 1px solid ${(props:any)=>props.theme.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${(props:any)=>props.theme.backgroundColor};
    box-shadow: inset 0 0 40px 25px rgba(0,0,0, 0.9);
    border: 1px solid rgba(255,255,255, 0.1)!important;            
  }
`;
const StyledContainerRightFigureImg = styled.img`
  max-width: 300px;
  filter: sepia(100%);
  transition: filter 0.5s ease-in-out;
  &:hover {
    filter: sepia(0%);
    box-shadow: 0 0 20px;
  }
`;

// Container Info
const StyledContainerInfoDiv = styled.div`
  padding: 20px;
  width: 100vw;
  background-color: #252525;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid ${(props:any) => props.theme.secondary };
  border-bottom: 1px solid ${(props:any) => props.theme.secondary };
`;
const StyledContainerInfoDivSpan = styled.span`
  font-weight: 500;
  color: ${(props:any) => props.theme.secondary };
  font-size: calc(10px + 1.6vmin);
`;
const StyledContainerInfoDivAddress = styled.address`
  font-weight: 500;
  color: ${(props:any) => props.theme.primary };
  font-size: calc(10px + 1.6vmin);
`;

function Tilt(props: any) {
    const { options, ...rest } = props;
    const tilt = useRef(null as any)

    useEffect( () => {
        VanillaTilt.init(tilt.current, options);
    }, [options])

    return <div ref={tilt} {...rest} />
}

function Presentation() {

    /*
      {
        reverse:           false,  // reverse the tilt direction
        max:               35,     // max tilt rotation (degrees)
        perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:             300,    // Speed of the enter/exit transition
        transition:        true,   // Set a transition on enter/exit.
        axis:              null,   // What axis should be disabled. Can be X or Y.
        reset:             true,   // If the tilt effect has to be reset on exit.
        easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        glare:             false,   // if it should have a "glare" effect
        "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      }
    */

    const options = {
        scale: 1,
        speed: 1000,
        max: 15,
        glare: true,
        "glare-prerender": false
    }

    return(
        <Fragment>
            <div style={{padding: "30px", maxWidth: "50%"}}>
                <StyledH1>Hello, moi c'est Alain.</StyledH1>
                <StyledP>
                    Je suis en reconversion professionnel, avec pour ambition d'être<br /> <StyledEm>un développeur fullstack</StyledEm> dans un avenir plus ou moins proche.<br/><br />

                    A 37 ans et pour mener à bien cette reconversion,<br /><StyledEm>je suis inscris sur plusieurs plateformes d'E-learning</StyledEm>.<br /><br />

                    Je me forme essentiellement autour de l'écho-système <StyledEm>JavaScript</StyledEm><br />
                    (<StyledEm>React</StyledEm>, <StyledEm>NodeJS</StyledEm>, <StyledEm>NextJs</StyledEm>, <StyledEm>VueJs</StyledEm>, <StyledEm>GraphQL</StyledEm> ).<br /><br />
                    J'ai tout de même une certaine curiosité pour les technologies concurente...<br /> (<StyledEm>Symfony</StyledEm>, <StyledEm>Laravel</StyledEm>, <StyledEm>Python</StyledEm>).
                </StyledP>

                <StyledA href="/project">Mes Projets</StyledA>
                <StyledA href="/story">Ma story</StyledA>
            </div>

            <div className="container__right">
                <StyledContainerRightFigure>
                    <Tilt options={options} >
                        <StyledContainerRightFigureImg
                            src="/images/moi.jpg"
                            alt=""
                            // data-tilt
                            // data-tilt-glare
                            // data-tilt-max-glare="0.8"
                        />
                    </Tilt>
                </StyledContainerRightFigure>
            </div>

            <StyledContainerInfoDiv>
                <StyledContainerInfoDivSpan>06.22.63.79.24</StyledContainerInfoDivSpan>
                <StyledContainerInfoDivAddress>Région Lyonnaise (Meyzieu 69330)</StyledContainerInfoDivAddress>
                <StyledContainerInfoDivSpan>alain.guillon.69330@outlook.fr</StyledContainerInfoDivSpan>
            </StyledContainerInfoDiv>
        </Fragment>
    )
}

export default Presentation