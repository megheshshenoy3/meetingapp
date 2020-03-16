import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import tl from '../../images/tllogo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class adminlogin extends Component {
    render() {
        return (
            <div className="navs ">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><img className="nav_img"src={tl}/>&nbsp;&nbsp;A D M I N</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <Router>

                        
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/admin">Add Room<span></span><span></span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/adminedit">Edit Rooms<span></span><span></span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/adminbooked">Booked Rooms<span></span><span></span></Link>
                            </li>
                            <li class="nav-item icon-end">
                                <Link to="/"><i class="fas fa-power-off"> logout</i></Link>
                            </li>
                        </ul>
                        </Router>
                    </div>
                </nav>


            </div>
        )
    }
}