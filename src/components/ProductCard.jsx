import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";

const ProductCard = (prop) => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {prop.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Card className="m-3">
        <Card.Img variant="top" src={prop.image} />
        <Card.Body>
          <Card.Title>{prop.name}</Card.Title>
          <Card.Text>{prop.price}</Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProductCard;
