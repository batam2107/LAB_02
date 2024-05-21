import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './Product.css'

function Product({sale = false, news = false, src, title, priceFirst, priceSecond}) {
  return (
    <Card className={`${sale? "sale": ""} ${news? "new": ""}`}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className="title-card">{title}</Card.Title>
        <Card.Text>
          <span className={priceFirst?"line-through": ""}>{priceFirst}</span> 
          <span className={priceFirst? "price-color": ""}>{priceSecond}</span>
        </Card.Text>
        <Button variant="dark" className="btn-buy">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
