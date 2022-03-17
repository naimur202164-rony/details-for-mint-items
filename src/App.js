import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div>
              <img
                className="img-fluid  rounded shadow "
                src="https://shreethemes.in/superex/layouts/images/items/item-detail-1.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="mt-4 pt-2 ">
              <div>
                <h3 className="fw-bold">
                  Wolf with Skull Orange <span className="text-muted">Illustration T-shirt Tattoo</span> 
                </h3>
              </div>
              <div className="mt-4 pt-2">
                <h6>Current Bid</h6>
                <h4>4.85 ETH</h4>
                <small className="text-muted">4.85 ETH</small>
                <div className="mt-4 pt-2">
                <Col>
                <Button className="btn-pills">Place a Bid</Button>
                <Button className="ms-4">Bye Now</Button>
               
                    </Col>
                </div>
              </div>
              <div className="mt-4 pt-2 ">
                      <h5>Details</h5>
                  <div>
                    <p className="text-muted">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?

What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
