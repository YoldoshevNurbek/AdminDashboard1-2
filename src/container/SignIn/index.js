import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'

export default function Signin() {
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Input
                                    label="First name"
                                    placeholder="First name"
                                    value=""
                                    type="text"
                                    onChange={() => { }}
                                />
                                <Input
                                    label="Password"
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
