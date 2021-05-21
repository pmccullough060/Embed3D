import React, { Component } from 'react';
import * as THREE from "three";
import './ThreeScene.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { OrbitControls } from '@three-ts/orbit-controls';

export class ThreeScene extends Component {

    componentDidMount() {

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#F4F6F6");
        this.renderer.setSize(width, height); 
        this.mount.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        //Camera Controls
        const controls = new OrbitControls(this.camera, this.renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);

        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        var cube = new THREE.Mesh(geometry, material);

        cube.rotateX = 5;

        this.scene.add(cube);

        this.camera.position.z = 5;

        var color = new THREE.Color(0.2, 0.2, 0.2);
        var ambient = new THREE.AmbientLight(color.getHex());

        this.scene.add(ambient);

        //remember this. saves things to component

        this.start();

        window.addEventListener("resize", this.resize);

        //Redraw the scene with Camera and Scene object.
        this.renderScene();
    }

    createLighting = () => {
        //set up the various lighting in this container.
    };

    //Start the animation sequence.
    start = () => {
        if (!this.frameId) {
            this.frameId = window.requestAnimationFrame(this.animate);
        }
    };

    //Stop the animation sequence.
    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    animate = () => {
        //Animate Models Here
        //ReDraw Scene with Camera and Scene Object
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };

    renderScene = () => {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    };

    //This is where we can handle the resizing of the viewer.
    resize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };

    //All of the accordion stuff on the left side should be its own react component for managing workspaces.

    //We cant use flexbox for the main three.js rendered we handle resizing inside the javascript code.
    render() {
        return (
            <div className="first" ref={mount => { this.mount = mount }}>
                <Accordion className="second" defaultActiveKey="0">

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="toggle" eventKey="0">
                                Your Embed Views
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body, this is where the users will load stuff</Card.Body>
                        </Accordion.Collapse>

                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>


                    </Card>

                </Accordion>

            </div>
           );
    }
}