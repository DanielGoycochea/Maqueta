import React from 'react'
// import {Link} from "react-router-dom"
import {Form, Button, Carousel, CardDeck, Card, Row, Col} from 'react-bootstrap'
import Footer from './Footer'


const NavBar =() =>{
    return(
     
           <div className= "">
            
<Carousel className=" carusel">
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"

            src="https://cdn.pixabay.com/photo/2014/06/02/22/37/old-age-360714__340.jpg"
            
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Registrate</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="primary" size="lg">
            Registrate
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"
            src="https://cdn.pixabay.com/photo/2015/06/28/20/49/grandma-824867__340.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Encuentra empleo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button   variant="primary" size="lg">
            Encuentra Empleo
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 image-carusel"
            src="https://cdn.pixabay.com/photo/2019/01/31/13/27/grandfather-3966888_960_720.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Crea Empleos</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button variant="primary" size="lg">
            Crea Empleos
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel> 
<div className="">
    <Row className="Navbar home-login">
        <Col xs={12} md={6} >
        <h3>Inicia Sesion</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum provident quas necessitatibus cum placeat itaque sequi ullam facilis accusantium. Ipsa nam aut dolorum in quis alias neque doloremque nemo.</p>
        </Col>
        <Col xs={12} md={6}><Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Col>
  </Row>
  </div>




<CardDeck className="home-login">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
</CardDeck>
<Footer/>

           </div>
     
     
    )
}


export default NavBar;