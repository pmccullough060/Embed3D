import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class EmbedView extends Component {
    static displayName = EmbedView.name;

    render() {

        const { embedView } = this.props;

        return (
            <Container className="d-flex h-100 mt-2">
                <Row className="m-auto align-self-center">
                    <Card style={{ width: '40rem' }}>
                        <Card.Header as="h5">{embedView.name}</Card.Header>
                        <Card.Body>
                            <Card.Body>{embedView.description}</Card.Body>
                        </Card.Body>
                    </Card>
                </Row> 
            </Container>
            );
    }
}
