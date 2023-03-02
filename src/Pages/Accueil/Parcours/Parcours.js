// Dependancies

const Parcours = () => {
    return (
        <section>
            <div className="container__clippath_top"></div>

            <div className="container__bottom">
                <span>&copy; Copyright 2021</span>
                <span>&#128241; 06.22.63.79.24</span>
                <span>
          <a
              href="https://www.linkedin.com/in/alain-guillon-22b3b4b6/"
              target="_blanck"
              className="link"
          >
            <img src="/images/linkedin.png" alt="Icon Github" width="25" />
          </a>

          <a href="https://github.com/Zyrass" target="_blanck" className="link">
            <img src="/images/github.png" alt="Icon Github" width="25" />
          </a>
          <a href="https://gitlab.com/Zyrass" target="_blanck" className="link">
            <img src="/images/gitlab.png" alt="Icon Gitlab" width="25" />
          </a>
        </span>
                <span>Mentions Légales</span>
                <span>
          Codé avec passion{" "}
                    <span
                        style={{
                            color: "red",
                        }}
                    >
            ♥ ♥ ♥
          </span>
        </span>
            </div>

            <div className="container__clippath_bottom"></div>
        </section>
    );
};

export default Parcours;