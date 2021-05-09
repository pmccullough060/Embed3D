import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class EmbedView extends Component {
    static displayName = EmbedView.name;

    render() {

        const { _id, _name  } = this.props;

        return (
            <div key={ _id }>
                <Card>
                    <Card.Body>
                        <Card.Title>{ _name }</Card.Title>
                        <Card.Body>Some waffle about what this workspace does</Card.Body>
                    </Card.Body>
                </Card>
            </div>
            );
    }
}
