import React from 'react'
import '../../pages/style.scss';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import booki from '../../assets/projects/booki.png'
import hottakes from '../../assets/projects/hottakes.png'
import kanap from '../../assets/projects/kanap.png'
import kasa from '../../assets/projects/kasa.png'
import ohmyfood from '../../assets/projects/ohmyfood.png'
import panthere from '../../assets/projects/panthere.png'
import socketrooms from '../../assets/projects/socketrooms.png'
import spothit from '../../assets/projects/spothit.png'
import kindll from '../../assets/projects/kindll.png'

function Projectlist() {
  return (
    <div className="project">
      <Container fluid className="project-section">
        <Container>
          <Row>
            <Col>
              <h2 className='headtext'>Réalisations</h2>
              <p className='infostext'>Vous trouverez ci-dessous quelques-unes de mes réalisations.</p>
              <p>Parmi ces réalisations figurent des projets réalisés dans le cadre de ma formation, mais également certains projets personnels m'ayant permis la découverte ainsi que l'apprentissage de nouvelles technologies.</p>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spothit}
                title="Spot-Hit"
                description="Plugin WordPress réalisé durant mon alternance. Le plugin permet l'envoi de SMS et d'Emails manuellement ou de manière synchronisé avec les crochets d'action WooCommerce."
                ghLink="https://fr.wordpress.org/plugins/spot-hit/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={booki}
                title="LeBonCompte"
                description="Application permettant aux utilisateurs d'enregistrer chacue de paiements afin de répartir au mieux les dépenses dans un groupe de personne."
                ghLink="#"
              />
            </Col> */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={booki}
                title="Booki"
                description="Projet OpenClassRooms, n°2. L'objectif était de reproduire d'une maquette figma à l'identique en site statique, en HTML et CSS, et de manière responsive."
                ghLink="https://mystichyde.github.io/P2_booki/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ohmyfood}
                title="OhMyFood"
                description="Projet OpenClassRooms, n°3. L'objectif était de reproduire d'une maquette figma avec une approche mobile-first, mais également de réaliser les animations requises dans le cahier des charges."
                ghLink="https://mystichyde.github.io/p3_ohmyfood/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={socketrooms}
                title="Socket Rooms"
                description="Un tchat en temps réel réalisé avec socket.io. Il s'agit là de mon premier projet utilisant la technologie Socket.io, m'ayant permis d'apprendre les rudiments de la librairie. La partie front est réalisée avec React et la base de données est en SQL."
                ghLink="#"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={panthere}
                title="La Panthère"
                description="Projet OpenClassRooms, n°4. L'objectif était de réaliser une analyse du SEO d'un site existant, de rédiger un compte-rendu de celui-ci, puis de proposer une version optimisée accompagnée d'un rapport d'optimisation."
                ghLink="https://mystichyde.github.io/p4_la_panthere/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kanap}
                title="Kanap"
                description="Projet OpenClassRooms, n°5. L'objectif était d'établir une connexion entre la partie client et une API, de créer les fonctions pour chacune des pages et de mettre en place un panier stocké en local."
                ghLink="https://www.kanap.kindll.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kindll}
                title="Kindll"
                description="Projet personnel qui est en cours de création. Il s'agit d'un réseau social ayant pour but de mettre en avant les rencontres entre cercles d'amis."
                ghLink="http://kindll.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hottakes}
                title="HotTakes"
                description="Projet OpenClassRooms, n°6. Réalisation d'une API, association avec la partie front et utilisation d'une base de données non-relationnelles avec MongoDB."
                ghLink="https://github.com/MysticHyde/p6_hottakes/tree/main/backend"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kasa}
                title="Kasa"
                description="Projet OpenClassRooms, n°7. Reproduction d'une maquette Figma en utilisant la librairie React et en faisant des requêtes auprès d'une API. Création d'un diaporama sans l'aide d'une librairie tiers, ainsi que d'un hook personnalisé."
                ghLink="http://kasa.kindll.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist