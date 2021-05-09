import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { EmbedView } from '../components/EmbedView';

export class UserWorkspace extends Component {

    static displayName = UserWorkspace.name;

    constructor(props) {
        super(props);
        this.state = { workspaces: [], loading: true };
    }

    componentDidMount() {
        this.populateWorkspace();
    }

    render() {
        return (<div>
            <EmbedView
                _id= "1"
                _name= "Test Embed View">
            </EmbedView>
        </div>);
    }

    //For the currently signed in user we need to retrieve their workspaces.
    async populateWorkspace() {
        const token = await authService.getAccessToken();
        const response = await fetch('workspaces', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}`}
        });
        const data = await response.json();
        this.setState({ workspaces: data, loading: false });
    }
}