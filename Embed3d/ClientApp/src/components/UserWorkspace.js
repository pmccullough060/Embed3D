import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

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
            This will be a list of the users workspaces.... in a table or something
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