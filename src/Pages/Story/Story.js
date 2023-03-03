// Dépendances
import React, { Fragment, useEffect, useState } from "react";

// SCSS
import "./Story.scss";

function Story() {
    // Etats
    const [qualities, setQualities] = useState([]);
    const [asideStatus, setAsideStatus] = useState(true);

    // Effets
    useEffect(() => {
        console.log({ qualities });
    }, [qualities]);

    // Méthodes
    const addQuality = (textQuality) => {
        setQualities(() => {
            const checkStringExist = qualities.find((text) => text === textQuality);
            if (!checkStringExist) {
                return [...qualities, textQuality];
            } else {
                return qualities;
            }
        });
    };

    const clearQualities = ($e) => {
        $e.preventDefault();
        setQualities([]);
    };

    return (
        <Fragment>
            <div className="container__about">
                <h1>Mon histoire</h1>

                {/* Présentation */}
                <section className="about__presentation">
                    <h2>Présentation</h2>
                    <p>
                        Ce qui va suivre, va en quelques sortes vous démontrer{" "}
                        <strong>ma détermination</strong> ainsi que,{" "}
                        <strong>le mental que je me suis forgé</strong>, ce qui implique{" "}
                        <strong>ma faculté a encaisser le stress</strong> tout en prouvant
                        qu'il ne faut jamais rien lâcher pour parvenir à ces fins.{" "}
                        <em>
                            Vous comprendrez mieux pourquoi ma reconversion dure aussi
                            longtemps...
                        </em>
                        . (5 ans).
                    </p>
                    <p>
                        <strong>
                            Je tiens à préciser que je me sens totalement apte à reprendre une
                            vie Pro-Active.
                        </strong>{" "}
                        Vu ce qui va suivre va certainement vous étonner donc autant faire
                        une piqûre de rappel tout de suite.
                    </p>

                    <p>
                        Ici, je vais vous parler de <em>qui je suis</em>, mais surtout,{" "}
                        <em>je vais vous dévoiler une partie très sombre de ma vie, </em>
                        <strong>je sais que ça peut jouer contre moi</strong>, sauf que pour
                        moi, <strong>il s'agit de mon moteur</strong>, ne pas en parler,
                        serait pour moi, un echec sur un plan personnel comme professionnel.
                    </p>

                    <p>
                        Vous qui lisez ces quelques lignes et que par le plus grand des
                        hazards, vous êtes un recruteur.{" "}
                        <strong>
                            Je me dis que vous ne recherchez certainement pas une personne
                            fausse, vide, sans âme. Du moins moi, j'aime les personnes qui
                            aiment ceux qu'ils font sans se dire je le fais pour vivre...
                        </strong>{" "}
                        Même si c'est important j'ai du mal avec ce concept surtout avec ce
                        métier qui nous passionne... Auquel cas, vous perdez votre temps
                        ici... Je suis quelqu'un d'
                        <span onClick={() => addQuality("Je suis authentique")}>
              authentique
            </span>{" "}
                        et a mon sens, une bonne relation entre un employeur et un salarié,
                        sa se définit part une totale transparence de l'un comme de l'autre.
                    </p>

                    <p>
                        Ainsi, pour éviter de vous ennuyer avec une lecture un petit peu
                        barbante, je vous propose un petit jeu très simple. Vous pourrez y
                        participer et{" "}
                        <strong>
                            vous découvrirez qui je suis via une interaction avec des éléments
                            qui seront mis en avant avec une couleur rouge vive
                        </strong>
                        . C'est une manière un peu différente de vous donner une envie
                        supplémentaire pour me contacter.
                        <br />
                        <br />
                        <em>
                            Bien entendue, vous êtes libre de choisir les mots qui vous parle,
                            ils s'ajouteront automatiquement dans une liste qui sera visible à
                            tout moment sur votre écran.
                        </em>
                        <br />
                        <br />
                        Voilà, après cette mini introduction pour présenter le
                        fonctionnement de cette page, je peux commencer à vous raconter une
                        partie de mon histoire{" "}
                        <em>
                            alors n'hésitez pas à jouer le jeu ça peut en valoire la peine
                        </em>
                        .
                    </p>
                </section>
                {/* end section__presentation */}

                {/* Ma Story 1ère partie */}
                <section className="about__story1">
                    <h2>Mon histoire</h2>

                    <p>
                        Je m'appel{" "}
                        <strong>
                            Alain Guillon, j'ai 37 ans,{" "}
                            <span onClick={() => addQuality("Je suis fidèle")}>
                en couple depuis 17 ans
              </span>{" "}
                            et je suis malheureusement...{" "}
                            <mark>
                                <dfn title="Parange corresponds à un nom donné aux parents ayant perdu malheureusement un enfant.">
                                    parange
                                </dfn>
                            </mark>{" "}
                            d'une petite princesse...
                            <br />
                            <br />
                            Dans ce drame, j'ai la chance d'avoir deux autres enfants qui sont
                            tout pour moi.
                        </strong>
                        . Aujourd'hui, comme je l'ai mentionné sur ma page d'accueil, je
                        suis en reconversion professionnel dans ce domaine qui nous
                        passionne, vous et moi.
                    </p>

                    <p>
                        J'ai eu la chance dans une formation antérieur (2002) de découvrir
                        le développement web lorsque j'ai passé ma formation chez{" "}
                        <strong>Sofrac</strong> sur Villeurbanne.
                        <br />
                        Je regrette amèrement de ne pas avoir choisit cette voie à cette
                        époque, j'utilisais le moteur de recherche <strong>lycos</strong> et
                        mon formateur de l'époque m'avait dit, il n'y a pas d'avenir dans
                        cette voie... <em>Sans commentaire :'(</em>
                        <br />
                        <br />
                        J'ai réellement commencé cette reconversion en 2016 lors de ma
                        formation passé dans un centre spécialisé à la{" "}
                        <strong>3W Academy</strong> sur Lyon. <em>J'ai suivi et terminé</em>{" "}
                        cette formation avec un esprit assez perturbé. En effet, alors que
                        je suivais cette formation,{" "}
                        <strong>
                            ma dernière fille venait tout juste de se faire hospitaliser...
                        </strong>
                        <em>
                            &nbsp;Psychologiquement, vous vous en doutez, c'était pour moi,
                            très compliqué
                        </em>
                        ... Mais je me suis accroché à l'idée qu'elle était à 5 minutes en
                        voiture du lieu où j'étais en formation. Je me suis donc{" "}
                        <span onClick={() => addQuality("Je tiens mes objectifs")}>
              fixé l'objectf de réussir
            </span>{" "}
                        coûte que coûte... J'ai réussi mon QCM de fin de formation du
                        premier coup. ({" "}
                        <em>D'ailleurs, à cet instant, nous étions que 4 à le réussir</em>{" "}
                        ).
                    </p>

                    <p>
                        Après cette formation accéléré qui a tout de même durée 3 mois, (ce
                        qui n'est strictement rien quand on y pense...{" "}
                        <em>Les technos changent et faut réussir à suivre</em>) je me suis
                        inscrit sur énormément de plateforme d'e-learning en{" "}
                        <span onClick={() => addQuality("Je suis autodidacte")}>
              autodidacte
            </span>
                        pour réussir dans ce domaine. Ce qui prouve ma{" "}
                        <span onClick={() => addQuality("Je suis déterminé")}>
              détermination
            </span>{" "}
                        à réussir dans ce milieu.
                        <br />
                        <br />
                        En revanche, à cette période,{" "}
                        <strong>
                            je n'étais pas totalement investi dans le sens où j'étais très
                            inquiet de l'état de santé de ma princesse.
                        </strong>
                    </p>

                    <p>
                        Il faut dire que pendant tout ce temps,{" "}
                        <strong>
                            ma conjointe et moi même, découvrons avec horreur que notre fille
                            avait une maladie orpheline
                        </strong>
                        ....
                        <br />
                        <br />
                        ...Quelques mois ont passé{" "}
                        <em>
                            (8 mois d'hospitalisation à HFME - Je vous épargne les nombreuses
                            péripéties qu'on a vécu...)
                        </em>
                        , Un tournant majeur a eu lieu dans cet hôpital... ma conjointe et
                        moi même avons été convoqué dans un bureau, ou justement six
                        médecins nous attendais.{" "}
                        <em>
                            Là, c'était tout simplement à double tranchant, soit une bonne
                            soit une mauvaise nouvelle...
                        </em>
                        .
                    </p>

                    <p>
                        Malheureusement pour nous,{" "}
                        <strong>c'était une mauvaise nouvelle qui nous attendais</strong>...
                        Vue que nous ne comprenions rien aux termes techniques employés,
                        j'ai tout simplement demandé :
                        <br />
                        <br />
                        <strong>
                            <q>&nbsp;&mdash; Où es-ce qu'elle sera dans un an !?</q>
                        </strong>
                        <br />
                        <br />
                        Leur seule réponse...{" "}
                        <strong>
                            <q>&nbsp;&mdash; Mais dans un an, elle ne sera plus là !!</q>
                        </strong>
                        ...
                        <br />
                        <br />
                        <em>
                            Il faut avoir les nerfs très solide, ce qui peut se traduire par
                            avoir un sacré{" "}
                            <span onClick={() => addQuality("Je suis courageux")}>
                courage
              </span>{" "}
                            pour{" "}
                            <span onClick={() => addQuality("Je sais encaisser")}>
                encaissé
              </span>{" "}
                            ça.{" "}
                        </em>
                        <strong>
                            J'ai cette fierté aujourd'hui de dire, que j'ai eu la{" "}
                            <span onClick={() => addQuality("Je suis très lucide")}>
                lucidité
              </span>{" "}
                            de ne pas faire de bếtise en pensant tout de suite à l'après et
                            aux risques pour mes deux premières filles... Surtout si je venais
                            à partir en vrille avec eux.
                        </strong>
                        .
                    </p>

                    <p>
                        J'ai exigé{" "}
                        <span onClick={() => addQuality("Je suis calme")}>calmement</span>{" "}
                        qu'elle sorte de l'hôpital à cette instant même en pretextant que
                        nous allons nous battre pour sa survie à l'encontre du corps
                        médicale.
                        <br />
                        <br />
                        <strong>
                            Sa maladie fait qu'elle ne grandissait pas... Mais ces organes
                            oui... donc elle est sortie de l'hôpital avec un poids de moins de
                            3kg. Elle avait 1 ans et demie...
                        </strong>
                        <br />
                        Au final,{" "}
                        <em>
                            Elle ne sortira que le lendemain de l'hôpital avec une mise en
                            place d'une HAD "hospitalisation à domicile".
                        </em>
                        <br />
                        <br />
                        Nous avons eu d'autres mésaventures, comme le faîte qu'on ne pouvais
                        plus la perfuser au niveau du bras. Ce qui signifiait qu'il lui
                        resterait <strong>moins de 3 jours à vivre</strong>.. Donc en
                        résumé, d'un an, nous passons à moins de 3 jours...
                        <br />
                        <br />
                        ...C'est dur... très dur mais nous n'avons{" "}
                        <span onClick={() => addQuality("Je refuse l'echec")}>
              rien lâchés
            </span>{" "}
                        et nous avons ainsi pu repousser toutes les prévisions médicale
                        annoncé...
                    </p>

                    <ul>
                        <li>&mdash; Elle ne passera pas noël...</li>
                        <li>&mdash; Elle ne passera pas son anniversaire...</li>
                        <li>&mdash; Elle ne passera pas les vacances d'hiver...</li>
                        <li>&mdash; Elle ne passera pas pâques...</li>
                        <li>&mdash; Elle ne passera pas les grandes vacances...</li>
                    </ul>

                    <p>
                        J'en ai eu marre et j'ai pris{" "}
                        <span onClick={() => addQuality("Prends des initiatives")}>
              l'initiative
            </span>{" "}
                        de virer l'HAD de la maison. Nous ne pouvions pas continuer avec des
                        personnes qui n'était jamais positif.{" "}
                        <strong>
                            Nous nous sommes{" "}
                            <span onClick={() => addQuality("Je suis un battant")}>
                battu
              </span>{" "}
                            seule et contre tous pour qu'elle puisse vivre auprès de sa
                            famille et ces amis.
                        </strong>
                    </p>

                    <p>
                        <strong>
                            Nous avons réussi, un lourd combat en lui offrant presque 2 ans de
                            plus quand l'hôpital
                        </strong>
                        , ne il lui donnait que moins d'un an... puis 3 jours...
                        <br />
                        <br />
                        <strong>
                            Pendant cette période j'ai continué à me former dans ce domaine
                            (le web) tout en ayant une vigilence accrue pour ma fille.
                        </strong>{" "}
                        J'ai même eu la chance de remplacer mon ancien formateur à la 3WA
                        malgré tout ce que je vivais.{" "}
                        <strong>Je remercie chaleureusement la 3WA</strong> qui m'a donné
                        cette chance de vivre de cette passion. J'ai donc été{" "}
                        <span onClick={() => addQuality("J'ai été formateur")}>
              formateur
            </span>{" "}
                        pour la session L13 début 2017. <br />
                        <em>Sur 14 élèves, 10 ont réussi leur QCM de fin de formation.</em>
                        <br />
                        <br />
                        J'ai par la suite fait des petites pages assez simple en tant qu'
                        <span onClick={() => addQuality("J'ai été auto-entrepreneur")}>
              auto-entrepreneur
            </span>{" "}
                        pour des amis, le tout uniquement en local, en effet, ils n'avaient
                        pas d'utilité à que ce soit en ligne.
                        <em>
                            Comme on le dit si bien,{" "}
                            <span onClick={() => addQuality("A l'écoute du client")}>
                le client est roi
              </span>{" "}
                            et nous nous plions à leurs volontés tout en les{" "}
                            <span onClick={() => addQuality("Je peux conseiller")}>
                conseillants
              </span>{" "}
                            sur ce qu'il serait bien pour eux.. Et donc malgré une possibilité
                            d'accroitre leur visibilité sur internet ils ont refusé cette
                            étape.
                        </em>
                        <br />
                        <br />
                        Sauf que voilà... ma fille... un matin, elle n'allait pas très
                        bien... J'ai dû appeler les pompiers sachant qu'elle était un petit
                        peu gonflé.
                        <br />
                        <br />
                        Quand nous étions auprès d'elle, à l'hôpital, malheureusement{" "}
                        <strong>
                            elle a fait un arrêt cardiaque... Elle est partie rejoindre ce
                            qu'elle a toujours été, un ange
                        </strong>{" "}
                        avec tout de même un très gros regret...{" "}
                        <em>
                            A l'hôpital ils se sont arrêté sur un compte rendu datant de
                            2017... où il était stipulé qu'il ne fallait surtout pas
                            s'acharner pour la réanimer au cas où si elle partait...
                            <br />
                            <br />
                            <strong>
                                Sauf que ce compte rendu avait été changé en 2018... Vu que les
                                médecins était stupéfait par sa courbe qui remontait en
                                flèche... mais le médecin n'a rien mentionné dans le dossier
                                médicale...
                            </strong>{" "}
                            Notre tord, c'est d'avoir fait confiance aveuglément et donc, de
                            ne pas avoir insisté sur le faîte d'avoir un papier qui
                            permettrait justement de prouver ce qui c'était dit dans ce bureau
                            début 2018...
                        </em>
                    </p>
                </section>
                {/* end Ma Story 1ère partie */}

                {/* Ma Story 2ème partie */}
                <section className="about__story2">
                    <p>
                        Là, vous vous en doutez c'est la descente aux enfer qui commence...
                        malgré ce drâme,{" "}
                        <strong>
                            je n'avais pas le choix de garder la tête haute et j'ai accompagné
                            ma fille jusqu'au bout.
                        </strong>
                        , ma conjointe n'était que l'ombre d'elle même (ce qui est tout a
                        fait logique)... Mes filles étaient dévasté, je n'avais pas le droit
                        de craqué et j'ai tenu.
                        <br />
                        <br />
                        <strong>
                            Ma princesse est malheureusement décédée le 25/11/2018
                        </strong>
                        ,{" "}
                        <em>
                            j'ai mis un peu plus d'un an pour faire en sorte que ma conjointe
                            s'enlève toutes ces idées noire de la tête.
                        </em>
                        <br />
                        <br />
                        Je le dois à mon{" "}
                        <span onClick={() => addQuality("Caractère fort")}>caractère</span>.
                        <br />
                        <br />
                        Pour lui montrer que malgré ce drâme nous pouvions avancer et que de
                        toutes manière, quoi qu'il en soit pour nos deux autres filles nous
                        devions allez de l'avant.{" "}
                        <strong>
                            Ainsi, j'ai repris contact avec la 3WA pour leur faire part de
                            cette triste nouvelle, la 3WA m'a permit de me relancer très
                            rapidement en rejoignant une classe avec un nouveau formateur.
                        </strong>
                        <br />
                        <br />
                        Je suis quelqu'un d'assez{" "}
                        <span onClick={() => addQuality("Je suis humble")}>humble</span>,
                        mais j'avais une vision bien différente des élèves en difficulté que
                        mon cher collègue.{" "}
                        <em>
                            ( Je lui souhaite le meilleur, malgré que nous avions eus quelques
                            désacords ).
                        </em>{" "}
                        En effet, ce formateur préférait continuer avec les seules personnes
                        qui comprenait plus où moins ce qu'il expliquait, tout en délaissant
                        maladroitement les personnes qui avaient malheureusement plus de
                        mal.
                    </p>

                    <p>
                        Bref, tout ça pour dire que j'ai montré l'exemple à ma femme, mais
                        elle n'y arrivait pas. J'ai donc mis ma vie de côté afin que mes
                        enfants, ma conjointe puisse à nouveau allez de l'avant.{" "}
                        <strong>
                            C'est un très gros{" "}
                            <span onClick={() => addQuality("Je me sacrifie")}>
                sacrifice
              </span>{" "}
                            que j'ai fais, mais, je ne regretterai jamais ce choix, il en
                            vallait grandement la peine.
                        </strong>
                        <br />
                        <br />
                        Aujourd'hui des personnes me critique (
                        <em>surtout mon voisinage</em>), sur le faîte que je ne travail pas,
                        pour eux, je passe mes journées à glander... Mais de base, je n'ai
                        rien à leurs prouver, je connais mes valeurs et je sais ce que je
                        fais de mes journées et je sais ce que je veux.
                    </p>

                    <p>
                        Pour réussir, je me forme comme je l'ai déjà dis constament, j'ai
                        déjà suivi <strong>11 plateformes d'e-learning</strong>, j'ai un peu
                        plus de 120 formations sur udemy, j'ai passé déjà plus de 420h sur
                        la plateforme Dyma.fr, j'ai cette{" "}
                        <span onClick={() => addQuality("Je suis curieux")}>curiosité</span>{" "}
                        ou bien certaine personnes disent que j'ai une{" "}
                        <span onClick={() => addQuality("Addicte au code")}>addiction</span>{" "}
                        pour découvrir de nouvelles choses.
                    </p>

                    <p>
                        Mon{" "}
                        <span onClick={() => addQuality("Je suis Ambitieux")}>
              ambition
            </span>{" "}
                        elle très simple, ce que je veux avant tout c'est de décrocher un
                        emploi, j'ai les compétences pour postuler en tant que
                        <span onClick={() => addQuality("Je suis dev frontend")}>
              developpeur front
            </span>
                        . Mais, j'ai également des compétences pour devenir développeur
                        fullstack en revanche je manque cruellement d'expérience dans ce
                        domaine pour prétendre ce statut.
                        <br />
                        <br />
                        Bien plus tard, je souhaiterais pouvoir former à nouveau des
                        personnes sur les technologies du web moderne, bien entendu, sa ne
                        pourra se faire tant que je n'aurais pas engrenger de l'expérience
                        professionnel.{" "}
                        <em>
                            Même si j'ai déjà former des amis et membre de ma propre famille
                            dans quelques technologies...
                        </em>
                    </p>
                    <p>
                        A titre personnel j'aimerais dans un quelconque futur, ou si l'on
                        m'en donne l'oportunité, ma soif d'apprendre fait que j'aimerais
                        très franchement renforcer le back-end. J'ai besoin de renforcer mes
                        acquis sur React ou bien même en javascript natif malgré que je me
                        débrouille assez bien. J'apprends actuellement TypeScript, les tests
                        unitaires Symfony. Symfony, me permet de me replonger dans le PHP
                        que j'ai mis de côté depuis plus d'un an.
                        <br />
                        <br />
                        Mais surtout, je veux obtenir cet emploi{" "}
                        <em>non pas pour faire taire les mauvaises langues</em>,{" "}
                        <strong>
                            mais pour mettre en pratique ce que j'ai pu apprendre en
                            autodidacte depuis toutes ces années... On pourrait également dire
                            qu'il s'agirait d'une belle revanche sur la vie qui ne m'aura
                            malheureusement pas épargné..
                        </strong>
                    </p>

                    <p>
                        Je me répète c'est vrai, mais mon objectif est simple, je veux
                        devenir <strong>fullstack</strong>.{" "}
                        <em>
                            Par exemple, ce portfolio a été créé en REACT, n'ayant aucune
                            expérience professionel, je me considère uniquement débutant
                            malgré les nombreuses features qui auront été développer.
                        </em>
                        <br />
                        <br />
                        Comme je l'ai mentionné, je me forme auprès de formateur reconnu
                        comme:
                        <br />
                        <br />
                        <strong>&mdash;Quentin, Erwan de Dyma.fr</strong>, ils sont toujours
                        présent pour m'aidez au moindre soucis. J'apprends beaucoup de chose
                        grâce à leurs plateforme. J'ai découvert, Linux, TypeScript, NodeJs,
                        React, MongoDB, Mongoose, VueJS, Symfony etc...
                        <br />
                        <strong>
                            &mdash;Louis Nicolas créateur de la plateforme Believemy
                        </strong>
                        , Sur cette plateforme je renforce mes acquis sur JavaScript et
                        React, React Native (découverte)
                        <br />
                        <strong>&mdash;Enzo Uztariz</strong>, Avec Enzo, que ce soit sur
                        Youtube ou bien sur sa plateforme l'école du web, j'apprends ou je
                        renforce mes connaissances sur tout ce qui traite du design, React
                        et même j'y apprends a utiliser GSAP. J'attends avec impatience
                        NextJS.
                        <br />
                        <br />
                        Il faut dire que j'ai régulièrement le{" "}
                        <span onClick={() => addQuality("Je suis soutenu")}>
              soutien
            </span>{" "}
                        de plusieurs formateurs, développeurs, étudiants, amis mais le plus
                        important j'ai celui de ma famille.{" "}
                        <em>
                            Ce n'était pas évident d'obtenir celui-ci sachant qu'ils ne
                            connaissent rien dans le métier.
                        </em>{" "}
                        Aujourd'hui je l'ai et c'est pour moi le plus important.
                    </p>

                    <p>
                        Je m'appel <strong>Alain Guillon</strong>, ma story se termine
                        ici....{" "}
                        <em>
                            Si l'idée vous à plus d'apprendre à me connaître via cette
                            démarche en me mettant en quelques sorte à nue avec vous
                        </em>
                        , n'hésitez surtout pas à m'envoyer un mail.{" "}
                        <em>En revanche si au contraire vous n'avez pas aimez</em>, vous
                        êtes tout à fait libre de me le faire savoir également. Malgré mon
                        vécu je ne mords pas et je suis ouvert d'esprit.
                    </p>

                    <p>
                        Je vous remercie d'avoir réussi à lire jusqu'ici, je vous souhaite
                        le meilleure dans vos projets professionnel comme personnel.
                    </p>
                    <br />
                    <br />
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <span style={{ paddingRight: "5px" }}>Alain Guillon</span>
                        <span>
              <em> aussi connu sous le pseudo Zyrass</em>
            </span>
                    </p>
                </section>
            </div>
            {/* end containter__about */}

            <aside className="container__aside">
        <span
            onClick={() => setAsideStatus(!asideStatus)}
            style={{
                right: asideStatus ? "432px" : "0px",
            }}
        >
          &times;
        </span>

                {asideStatus && (
                    <div className="aside__content">
                        <h3 style={{ color: "#ffffff" }}>Mes qualités</h3>
                        <p>
                            Ci-dessous, découvrez un résumé des qualités que j'ai acquis avec
                            le temps.
                        </p>

                        <ul>
                            {qualities.length > 0 &&
                                qualities.map((data, index) => <li key={index}>{data}</li>)}
                        </ul>

                        <button type="button" className="btn" onClick={clearQualities}>
                            {qualities.length > 0
                                ? "Vider la liste"
                                : "Aucun mot sélectionné"}
                        </button>
                    </div>
                )}
            </aside>
        </Fragment>
    );
}

export default Story;