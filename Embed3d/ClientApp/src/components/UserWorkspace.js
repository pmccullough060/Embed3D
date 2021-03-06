import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { EmbedView } from '../components/EmbedView';
import { ListGroup, Container, Row, Col } from 'reactstrap';
import { ThreeScene } from './ThreeScene';


export class UserWorkspace extends Component {

    static displayName = UserWorkspace.name;

    constructor(props) {
        super(props);
        this.state = { embedViews: [], loading: true };
    }

    componentDidMount() {
        this.populateWorkspace();
    }

    render() {

        if (this.state.embedViews) {
            return (
                <Container fluid>

                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ThreeScene/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mx-auto">
                            <ListGroup>
                                {
                                    this.state.embedViews.map((_embedView, _index) => {
                                        return (
                                            <div key={_index}>
                                                <EmbedView
                                                    embedView={_embedView}>
                                                </EmbedView>
                                            </div>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                    </Row>
  
                </Container>);
        }
        else {
            return (<div>Loading content</div>)
        }
    }

    //For the currently signed in user we need to retrieve their workspaces.
    //We then retrieve the embedviews associated with this user..

    async populateWorkspace() {
        const token = await authService.getAccessToken();
        const response = await fetch('workspaces', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        console.log(data);
        this.setState({ embedViews: data, loading: false });
    }
}