import React, { Component } from 'react';
import { Container, Row, Card, CardTitle, CardBody } from 'reactstrap';

export class EmbedView extends Component {

    render() {

        const { embedView } = this.props;

        return (
            <Container className="d-flex h-100 mt-2">
                <Row className="m-auto align-self-center">
                    <Card style={{ width: '20rem' }}>
                        <CardTitle as="h5">{embedView.name}</CardTitle>
                        <CardBody>
                            {embedView.description}
                        </CardBody>
                    </Card>
                </Row> 
            </Container>
            );
    }
}
