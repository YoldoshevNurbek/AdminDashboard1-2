import React from 'react'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
export default function Signup() {
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First name"
                                            placeholder="First name"
                                            value=""
                                            type="text"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="First name"
                                            placeholder="First name"
                                            value=""
                                            type="text"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value=""
                                    type="email"
                                    onChange={() => { }}
                                />

                                <Input
                                    label=" Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={() => { }}
                                />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}
