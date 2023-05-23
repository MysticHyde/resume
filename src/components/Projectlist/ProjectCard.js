import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          {`Découvrir`}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;