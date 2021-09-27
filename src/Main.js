import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

const { Body, Img, Footer, Text, Title } = Card

const Main = () => {
    return (
        <main className="pt-3">
            <Row>
                <Col sm={6} md={4} lg={3} className="pt-3">
                    <Card>
                        <Img src="http://placehold.it/300x200" />
                        <Body>
                            <Title>Producto 1</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, architecto atque optio
                            </Text>
                        </Body>
                        <Footer>
                            <Button variant="dark">ver detalle</Button>
                        </Footer>
                    </Card>
                </Col>

                <Col sm={6} md={4} lg={3} className="pt-3">
                    <Card>
                        <Img src="http://placehold.it/300x200" />
                        <Body>
                            <Title>Producto 1</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, architecto atque optio
                            </Text>
                        </Body>
                        <Footer>
                            <Button variant="dark">ver detalle</Button>
                        </Footer>
                    </Card>
                </Col>

                <Col sm={6} md={4} lg={3} className="pt-3">
                    <Card>
                        <Img src="http://placehold.it/300x200" />
                        <Body>
                            <Title>Producto 1</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, architecto atque optio
                            </Text>
                        </Body>
                        <Footer>
                            <Button variant="dark">ver detalle</Button>
                        </Footer>
                    </Card>
                </Col>

                <Col sm={6} md={4} lg={3} className="pt-3">
                    <Card>
                        <Img src="http://placehold.it/300x200" />
                        <Body>
                            <Title>Producto 1</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, architecto atque optio
                            </Text>
                        </Body>
                        <Footer>
                            <Button variant="dark">ver detalle</Button>
                        </Footer>
                    </Card>
                </Col>
            </Row>
        </main>
    );
}

export default Main;