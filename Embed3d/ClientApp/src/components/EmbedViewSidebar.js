import React, { Component } from 'react';
import { EmbedView } from '../components/EmbedView';
import { ContextAwareToggle } from '../components/ContextAwareToggle';
import authService from './api-authorization/AuthorizeService';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class EmbedViewSidebar extends Component {

    constructor() {
        super();
        this.state = {
            embedViews: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateWorkspace();
    }

    //have a card at the very top for creating a new workspace.
    //then the list of all the cards in the Accordion collapse thingy.

    render() {
        if (this.state.embedViews) {
            return (
                <Accordion defaultActiveKey="0">
                    <ContextAwareToggle eventKey="0"/>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup>
                            {
                                this.state.embedViews.map((_embedView, _index) => {
                                    return (
                                        <div key={_index}>
                                            <EmbedView embedView={_embedView} />
                                        </div>)
                                })
                            }
                        </ListGroup>
                    </Accordion.Collapse>
                </Accordion>
            );
        }
        else {
            return (<div>Loading the content</div>)
        }
    }

    async populateWorkspace() {
        const token = await authService.getAccessToken();
        const response = await fetch('workspaces', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        console.log(data); //temporary 
        this.setState({ embedViews: data, loading: false });
    }

    //Call this function to select the EmbedView
    selectEmbedView = (n, i) => this.props.selectedEmbedView(n, i);
}