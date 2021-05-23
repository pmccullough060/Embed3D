import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import Accordion from 'react-bootstrap/Accordion';
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

    render() {
        if (this.state.embedViews) {
            return (<div>place holder</div>);
        }
        else {
            return (<div>Loading the content</div>);
        }
    }

    async populateWorspace() {
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