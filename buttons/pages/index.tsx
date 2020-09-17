import React from "react";
import styled from "styled-components";
import Button from "../lib/components/Button";
const Container = styled.div`
  margin: 20px;
`;
const Row = styled.div`
  margin: 20px;
  * {
    margin: 10px;
  }
`;

const Home = () => (
  <Container>
    <Row>
      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
    </Row>
    <Row>
      <Button disableShadow>Default</Button>
      <Button disabled>Disabled</Button>
    </Row>
    <Row>
      <Button startIcon="face">Default</Button>
      <Button endIcon="face">Default</Button>
    </Row>
    <Row>
      <Button size="sm">Default</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Default</Button>
    </Row>
    <Row>
      <Button color="default">Default</Button>
      <Button color="primary">Default</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </Row>
    <Row>
      <Button color="default" variant="outline">
        Default
      </Button>
      <Button color="primary" variant="outline">
        Default
      </Button>
      <Button color="secondary" variant="outline">
        Secondary
      </Button>
      <Button color="danger" variant="outline">
        Danger
      </Button>
    </Row>
    <Row>
      <Button color="default" variant="text">
        Default
      </Button>
      <Button color="primary" variant="text">
        Default
      </Button>
      <Button color="secondary" variant="text">
        Secondary
      </Button>
      <Button color="danger" variant="text">
        Danger
      </Button>
    </Row>
    <Row>
      <Button color="default" variant="raised" disabled>
        Default
      </Button>
      <Button color="primary" variant="outline" disabled>
        Default
      </Button>
      <Button color="secondary" variant="text" disabled>
        Secondary
      </Button>
    </Row>
    <Row>
      <Button color="default" variant="raised" disableShadow>
        Default
      </Button>
      <Button color="primary" variant="raised" disableShadow>
        Default
      </Button>
      <Button color="secondary" variant="raised" disableShadow>
        Secondary
      </Button>
      <Button color="danger" variant="raised" disableShadow>
        Danger
      </Button>
    </Row>
  </Container>
);

export default Home;
