import React, { Component } from 'react';
import * as THREE from "three";
import './ThreeScene.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

        var geometry = new THREE.BoxGeometry(1, 1, 1);

        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        var cube = new THREE.Mesh(geometry, material);

        this.scene.add(cube);

        this.camera.position.z = 5;

        var color = new THREE.Color(0.2, 0.2, 0.2);
        var ambient = new THREE.AmbientLight(color.getHex());

        this.scene.add(ambient);

        //remember this. saves things to component

        //this.start();

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

    renderScene = () => {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    };

    //This is where we can handle the resizing of the viewer.
    resize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };


    //The main div contains the three.js canvas
    //

    render() {
        return (
            <div className="first" ref={mount => { this.mount = mount }}>
                

                <Accordion className="second" defaultActiveKey="0">

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>

            </div>
           );
    }
}