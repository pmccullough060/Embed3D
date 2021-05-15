import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class EmbedView extends Component {
    static displayName = EmbedView.name;

    render() {

        const { embedView } = this.props;

        return (
            <Container className="d-flex h-100">
                <Row className="m-auto align-self-center">
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{embedView.name}</Card.Title>
                            <Card.Body>{embedView.description}</Card.Body>
                        </Card.Body>
                    </Card>
                </Row> 
            </Container>
            );
    }
}
