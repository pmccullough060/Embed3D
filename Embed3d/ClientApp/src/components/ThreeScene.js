import React, { Component } from 'react';
import ReactDom from 'react-dom';
import * as THREE from "three";

export class ThreeScene extends Component {

    componentDidMount() {

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    }

    render() {
        return (<div
            style={{ width: "800px", height: "800px" }}
            ref={mount => { this.mount = mount }}
        />);
    }
}