import React from 'react'
import '../../pages/style.scss';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import spothit from '../../Assets/spothit.svg'
import leboncompte from '../../Assets/leboncompte.png'
import socketrooms from '../../Assets/logo_socketroom.png'

function Projectlist() {
  return (
    <div className="project">
      <Container fluid className="project-section">
        <Container>
          <Row>
            <Col>
              <h2>Réalisations</h2>
              <p>Vous trouverez ci-dessous quelques-uns des projets sur lesquels j'ai pu travailler.</p>
              <p>Figurent parmi ces réalisations des projets accomplis dans le cadre de ma formation, mais également certains projets personnels m'ayant permis la découverte ainsi que l'apprentissage de nouvelles technologies.</p>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spothit}
                title="Spot-Hit"
                description="Plugin WordPress réalisé durant mon alternance. Le plugin permet l'envoi de SMS et d'Emails manuellement ou de manière synchonisés avec les crochets d'action WooCommerce."
                ghLink="https://fr.wordpress.org/plugins/spot-hit/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leboncompte}
                title="LeBonCompte"
                description="Application permettant aux utilisateurs d'enregistrer chacue de paiements afin de répartir au mieux les dépenses dans un groupe de personne."
                ghLink="#"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leboncompte}
                title="Booki"
                description="Projet OpenClassRooms n°2. L'objectif était de reproduire d'une maquette figma à l'identique en site statique, en HTML et CSS, et de manière responsive."
                ghLink="https://mystichyde.github.io/P2_booki/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leboncompte}
                title="OhMyFood"
                description="Projet OpenClassRooms n°3. L'objectif était de reproduire d'une maquette figma avec une approche mobile first, mais également de réaliser les animations requises dans le cahier des charges."
                ghLink="https://mystichyde.github.io/p3_ohmyfood/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={socketrooms}
                title="Socket Rooms"
                description="Un chat en temps réél réalisé avec socket.io. Il s'agit là d'un projet simple mais m'ayant permis de comprendre les rudiments de la librairie."
                ghLink="#"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leboncompte}
                title="La Panthère"
                description="Projet OpenClassRooms n°4. L'objectif était de réaliser une analyse du SEO d'un site existant, de rédiger un compte-rendu de celui-ci, puis de proposer une version optimisée accompagnée d'un rapport d'optimisation."
                ghLink="https://mystichyde.github.io/p4_la_panthere/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leboncompte}
                title="Kanap"
                description="Projet OpenClassRooms n°5. L'objectif était d'établir une connexion entre la partie client et une API, de créer les fonctions pour chacune des pages et de mettre en place un panier stocké en local."
                ghLink="https://www.kanap.kindll.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist