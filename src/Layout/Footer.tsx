import { Col, Container, Row } from "reactstrap";
import SvgIcon from "../CoreComponents/SvgIcon";

const Footer = () => {

  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="6" className="p-0 footer-copyright">
            <p className="mb-0">Copyright 2025 © Zono theme by pixelstrap.</p>
          </Col>
          <Col md="6" className="p-0">
            <p className="heart mb-0">
              Hand crafted & made with
              <SvgIcon iconId='heart' className="svg-color footer-icon ms-1" />
            </p> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;