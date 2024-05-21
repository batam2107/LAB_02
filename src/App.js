import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";

import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import pizza1 from "./Images/pizza1.jpg";
import pizza2 from "./Images/pizza2.jpg";
import pizza3 from "./Images/pizza3.jpg";
import pizza4 from "./Images/pizza4.jpg";
import pizza5 from "./Images/pizza5.jpg";

import menu1 from "./Images/menu1.jpg";
import menu2 from "./Images/menu2.jpg";
import menu3 from "./Images/menu3.jpg";
import menu4 from "./Images/menu4.jpg";

function App() {
  return (
    <div className="content">
      <Header />

      <div>
        <Carousel>
          <Carousel.Item>
            <img src={pizza1} className="slider" alt="Menu1" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Pizza cravings? Satisfied.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza2} className="slider" alt="Menu2" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Pizza: because no one ever said, 'Let's order a salad.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza3} className="slider" alt="Menu3" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
              Bringing the taste of Italy home.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={pizza4} className="slider" alt="Menu4" />
            <Carousel.Caption>
              <h3>Four slide label</h3>
              <p>
              Life is too short for bad pizza.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={pizza5} className="slider" alt="Menu4" />
            <Carousel.Caption>
              <h3>Five slide label</h3>
              <p>
              Let's make it a pizza night.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <h2 className="title">Our Menu</h2>

      <Container>
        <Row>
          <Col>
            <Product
              sale={true}
              src={menu1}
              title={"Margherita Pizza"}
              priceFirst={"$40.000"}
              priceSecond={"$24.000"}
            />
          </Col>
          <Col>
            <Product
              src={menu2}
              title={"Mushroom Pizza"}
              priceSecond={"$25.000"}
            />
          </Col>
          <Col>
            <Product
              news={true}
              src={menu3}
              title={"Hawaiian Pizza"}
              priceSecond={"$30.000"}
            />
          </Col>
          <Col>
            <Product
              sale={true}
              src={menu4}
              title={"Pesto Pizza"}
              priceFirst={"$40.000"}
              priceSecond={"$30.000"}
            />
          </Col>
        </Row>

        <div className="form">
          <h2 className="form-title">Book Your Table</h2>
          <Row>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Your Name*" />
            </Col>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Your Email*" />
            </Col>
            <Col>
              <Form.Select size="sm">
                <option>Select a Service</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="input-cmt">
            <Col>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Please write your comments"
              />
            </Col>
          </Row>

          <Button variant="warning" className="btn-send">Send Message</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
