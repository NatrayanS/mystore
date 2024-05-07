import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { FaToolbox } from "react-icons/fa";

const Menu = () => {
  const menu = [
    {
      id: 1,
      name: "Android Box",
      Price: 2300,
      image: require("../assets/androidbox.jpeg"),
    },
    {
      id: 2,
      name: "Hd Box",
      Price: 1800,
      image: require("../assets/hdbox.jpg"),
    },
    {
      id: 3,
      name: "AV Cable",
      Price: 60,
      image: require("../assets/avcable.jpg"),
    },
    {
      id: 4,
      name: "HDMI Cable",
      Price: 120,
      image: require("../assets/hdmi.jpg"),
    },
    {
      id: 5,
      name: "Android Remote",
      Price: 750,
      image: require("../assets/androidremote.jpg"),
    },
    {
      id: 6,
      name: "HD Remote",
      Price: 250,
      image: require("../assets/hdboxremorte.jpg"),
    },
    {
      id: 7,
      name: "Single LNB",
      Price: 260,
      image: require("../assets/singlelnbf.jpg"),
    },
    {
      id: 8,
      name: "Two Way LNB",
      Price: 550,
      image: require("../assets/twowaylnbf.jpg"),
    },
    {
      id: 9,
      name: "Four Way LNB",
      Price: 750,
      image: require("../assets/fourwaylnbf.jpg"),
    },
    {
      id: 10,
      name: "RG Connector",
      Price: 10,
      image: require("../assets/rgbconnector.jpg"),
    },
  ];
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            Buy Hear All your Accessories{" "}
            <i>
              <FaToolbox />
            </i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <ProductCard
                  item="id"
                  name={item.name}
                  price={item.Price}
                  image={item.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
