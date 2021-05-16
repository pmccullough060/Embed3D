import React, { Component } from 'react';
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

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var geometry = new THREE.BoxGeometry(1, 1, 1);

        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        var cube = new THREE.Mesh(geometry, material);

        this.scene.add(cube);

        this.camera.position.z = 5;

        var color = new THREE.Color(0.2, 0.2, 0.2);
        var ambient = new THREE.AmbientLight(color.getHex());

        this.scene.add(ambient);

        //this.start();

        //test
        //window.addEventListener("resize", this.resize);

        //Redraw the scene with Camera and Scene object.
        this.renderScene();
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = window.requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    renderScene = () => {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    };

    resize = () => {
        //Update this method so that it makes the viewer smaller that 800 x 600 px

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };

    render() {
        return (<div
            style={{ width: "800px", height: '600px' }}
            ref={mount => { this.mount = mount }}
        />);
    }
}