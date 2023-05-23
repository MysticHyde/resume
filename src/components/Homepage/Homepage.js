import React, { useState, useRef } from 'react'
import '../../pages/style.scss';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import {
  AiFillGithub,
} from "react-icons/ai";
import {
  MdOutlineEmail,
  MdLocationPin,
} from "react-icons/md";
import {
  SiSocketdotio,
  SiMysql,
  SiMongodb,
  SiMicrosoftoffice
} from "react-icons/si";
import {
  DiPhotoshop,
} from "react-icons/di";
import {
  FaLinkedinIn,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaWordpressSimple,
  FaNodeJs,
  FaFigma,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const alert = useRef('')

  return (
    <div className='homepage'>
      <Container>
        <Row>

          <Col md={5} className='order-md-2'>
            <div className="imagedeveloper">
            </div>
          </Col>
          <Col md={7} className='order-md-1' >
            <h1 className='headtext'>Bouxin Cyril  </h1>
            <h2 className='nametext'>Développeur web junior</h2>
            <p>Tout droit diplômé de la formation <strong>Développeur Web</strong> proposé par OpenClassRooms suite à une année d'alternance,
              je souhaite désormais mettre en oeuvre mes compétences au bénéfice d'une entreprise.</p>
            <div className='infos'>
              <button className='infos-link' onClick={(e) => {
                navigator.clipboard.writeText('bouxin.cyril@gmail.com');
                alert.current.style.display = 'block';
                setTimeout(() => {
                  alert.current.style.display = 'none';
                }, 3000);
              }}>
                <MdOutlineEmail className='icon' />
               bouxin.cyril@gmail.com
              </button>
              <a href='https://goo.gl/maps/va5d9wNs97ZTevFf9' target='_blank' rel="noreferrer">
                <MdLocationPin className='icon' />
                Montagny, 42840
              </a>
              <a href='https://github.com/MysticHyde' target='_blank' rel="noreferrer">
                <AiFillGithub className='icon' />
                /MysticHyde
              </a>
              <a href='https://www.linkedin.com/in/bouxin-cyril/' target='_blank' rel="noreferrer">
                <FaLinkedinIn className='icon' />
                /bouxin-cyril
              </a>
            </div>
            <div className='skills'>
              <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Listes de mes compétences' : 'Fermer la liste'}</button>
              <div className='skills-list' style={{ maxHeight: !isOpen ? 0 : 500, borderBottom: !isOpen ? '1px solid rgba(0, 139, 139, 0)' : '1px solid darkcyan' }}>
                <FaReact className='icon skill-icon' title='React' />
                <SiSocketdotio className='icon skill-icon' title='Socket.io' />
                <SiMysql className='icon skill-icon' title='SQL' />
                <SiMongodb className='icon skill-icon' title='Mongodb' />
                <SiMicrosoftoffice className='icon skill-icon' title='Microsoft Office' />
                <DiPhotoshop className='icon skill-icon' title='Photoshop' />
                <FaJsSquare className='icon skill-icon' title='Javascript' />
                <FaHtml5 className='icon skill-icon' title='HTML' />
                <FaCss3 className='icon skill-icon' title='CSS' />
                <FaPhp className='icon skill-icon' title='PHP' />
                <FaWordpressSimple className='icon skill-icon' title='Wordpress' />
                <FaNodeJs className='icon skill-icon' title='NodeJS' />
                <FaFigma className='icon skill-icon' title='Figma' />
                <FaSass className='icon skill-icon' title='Sass' />
                <FaBootstrap className='icon skill-icon' title='Bootstrap' />

              </div>

            </div>

          </Col>
        </Row>
      </Container>
      <Alert variant="secondary" ref={alert}>Adresse mail copiée.</Alert>
    </div>
  )
}

export default Home