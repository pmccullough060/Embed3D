import React, { Component } from 'react';
import * as THREE from "three";
import './ThreeScene.css';
import { OrbitControls } from '@three-ts/orbit-controls';
import { EmbedViewSidebar } from './EmbedViewSidebar';

export class ThreeScene extends Component {

    constructor() {
        super();
        this.state = {
            selectedEmbedViewIndex: null,
            selectedEmbedView: null
        }
    }

    componentDidMount() {

        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor(0x000000, 0);
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

        this.createLighting();

        this.start();

        window.addEventListener("resize", this.resize);

        //Redraw the scene with Camera and Scene object.
        this.renderScene();

        this.createLighting();
    }

    createLighting = () => {
        var color = new THREE.Color(0.2, 0.2, 0.2);
        var ambient = new THREE.AmbientLight(color.getHex());
        this.scene.add(ambient);
    };

    start = () => {
        if (!this.frameId) {
            this.frameId = window.requestAnimationFrame(this.animate);
        }
    };

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

    resize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };

    render() {
        return (

            //the three.js scene.
            <div className="first" ref={mount => { this.mount = mount }}>
                <div className = "second">
                    <EmbedViewSidebar/>
                </div>
            </div>
           );
    }

    //Gets passed into the EmbedViewSidebar
    selectEmbedView = (embedView, index) => this.setState({selectedEmbedView: embedView, selectedEmbedViewIndex: index})
}