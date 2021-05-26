import React, { Component } from 'react';
import { EmbedView } from '../components/EmbedView';
import authService from './api-authorization/AuthorizeService';
import { ListGroup, Collapse, Button } from 'reactstrap';

export class EmbedViewSidebar extends Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);

        this.state = {
            embedViews: [],
            loading: true,
            collapse: false
        };
    }

    componentDidMount() {
        this.populateWorkspace();
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {
        if (this.state.embedViews) {
            return (
                <div>
                    <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Toggle</Button>
                    <Collapse isOpen={this.state.collapse}>
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
                    </Collapse>
                </div>
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