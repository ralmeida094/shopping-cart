import React from "react";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "./Product";

function ProductsList(props) {
  const { className, products } = props;

  const classes = {
    cardGroup: className,
    product: "my-3 mx-auto",
  };

  return (
    <Container className={classes.cardGroup}>
      <Row md={2} lg={3}>
        {products.map((product, idx) => {
          return (
            <Col>
              <Product className={classes.product} key={idx} {...product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.shelf,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
