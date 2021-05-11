import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class EmbedView extends Component {
    static displayName = EmbedView.name;

    render() {

        const { embedView } = this.props;

        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{embedView.name}</Card.Title>
                        <Card.Body>{embedView.name}</Card.Body>
                    </Card.Body>
                </Card>
            </div>
            );
    }
}
