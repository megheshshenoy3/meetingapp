import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import './results.css';
import ima from '../images/pattern-gradient.png'
import { Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import $ from 'jquery';
import axios from 'axios';
import loadergif from '../images/loader.gif'
import country from '../images/country.png'

import floor from '../images/elevator.png'

import Joyride from "react-joyride"

const jquery = require('jquery')
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
      show: false,
      cards: '',
      loading: true,
      warroom: '',
      conferene: '',
      meetingroom: '',
      propsas: this.props.datatodisplay,
      country:'',
      city:'',
      location:'',
      unit:'',


    }

    this.HandleVisible = this.HandleVisible.bind(this);
    this.HandleClose = this.HandleClose.bind(this);


  }

  HandleVisible = async () => {
    await this.setState({ show: true });
  }
  HandleClose = async () => {
    await this.setState({ show: false });
  }

  Booking = () => {



  }

  async componentDidMount() {

    // console.log("propsdata",this.props.datatodisplay)
    // this.setState({propsas:this.props.datatodisplay})
    console.log(this.state.propsas)
    await this.Forcards();

  }

  Forcards = async () => {
    var data = this.state.propsas;
    console.log(typeof (data))
    const countrys=localStorage.getItem("Country");
    const citys=localStorage.getItem("City");
    const locations=localStorage.getItem("Location");
    const units=localStorage.getItem("Unit");
    await this.setState({ country:countrys,
    city:citys,
    location:locations,
    unit:units})
    if (data == "allexe") {
      data = locations
      await axios.get(`http://localhost:5000/posts/locations/${data}`).then(res => {
        var dataincards = []
        res = res.data
        // this.setState({ loading: false })
        console.log(res)
        dataincards = res.map(result => {

          return (
            <Col sm={4} clasName="margin_left">


              {/* <!-- Card Flip --> */}
              <div >
                <div className="card-flip" >
                  <div className="flip">
                    <div className="back">
                      <Card className="card_box">
                        <Card.Img id="myImg" onClick={this.HandleVisible} variant="top" src={ima} />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{result.roomname}</Card.Title>
                          <Card.Text>
                            <div href="#" onClick={(e) => { $(e.target).closest('.card-flip').toggleClass('flipped') }} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Details</div>
                            <div href="#" className="margin_forbuttons flex-item position_forbutton button_sweep hvr-sweep-to-right">Book Now</div>

                          </Card.Text>
                        </Card.Body>
                      </Card>

                    </div>
                    <div className="front">
                      {/* <!-- back content --> */}

                      <Card className="card_box" id="water_mark">
                        {/* <Card.Img id="myImg" onClick={() => { this.HandleVisible() }} variant="top" src={ima} /> */}
                        <Card.Body className="contents_of_body class_ofbody"  >
                          <Card.Text ><p><i class="fas fa-flag country_icon" ></i>Country:{result.country}</p>
                            <p className="p_text"><img src={country} className="city_icon" />City:{result.city}</p>
                            <p className="p_text"><i class="fas fa-map-marker-alt location_icon" ></i>Location:{result.location}</p>
                            <p className="p_text"><i class="far fa-building building_icon"></i>Unit:{result.unit}</p>

                            <p className="p_text"> <img src={floor} className="floor_icon" />Floor:{result.floor}</p>

                            <p className="p_text"><i class="fa fa-video-camera video_icon" aria-hidden="true"></i>Video Conference:Yes</p>
                            <p className=" "><i class="fa fa-users capacity_icon" aria-hidden="true"></i>Capacity:26
</p>
                          </Card.Text>
                          <div href="#" onClick={(e) => { $(e.target).closest('.card-flip').toggleClass('flipped') }} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Image</div>
                          <div href="#" className="margin_forbuttons flex-item position_forbutton button_sweep hvr-sweep-to-right">Book Now</div>

                          {/* <Button variant="primary" onClick={this.HandleFlip} className="test">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );

        }

        )


        this.setState({ cards: dataincards });

      })
      setTimeout(function () {
        this.setState({ loading: false })
      }.bind(this), 10000)
      this.setState({ loading: false })
    }



    
    else {
      this.setState({unit:data})
       console.log("country",this.state.country,this.state.city,this.state.location,this.state.unit) 
      await axios.get(`http://localhost:5000/posts/${this.state.country}/${this.state.city}/${this.state.location}/${this.state.unit}`).then(res => {
        var dataincards = []
        res = res.data
        // this.setState({ loading: false })
        console.log(res)
        dataincards = res.map(result => {

          return (
            <Col sm={4} clasName="margin_left">


              {/* <!-- Card Flip --> */}
              <div >
                <div className="card-flip" >
                  <div className="flip">
                    <div className="back">
                      <Card className="card_box">
                        <Card.Img id="myImg" onClick={this.HandleVisible} variant="top" src={ima} />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{result.roomname}</Card.Title>
                          <Card.Text>
                            <div href="#" onClick={(e) => { $(e.target).closest('.card-flip').toggleClass('flipped') }} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Details</div>
                            <div href="#" className="margin_forbuttons flex-item position_forbutton button_sweep hvr-sweep-to-right">Book Now</div>

                          </Card.Text>
                        </Card.Body>
                      </Card>

                    </div>
                    <div className="front">
                      {/* <!-- back content --> */}

                      <Card className="card_box" id="water_mark">
                        {/* <Card.Img id="myImg" onClick={() => { this.HandleVisible() }} variant="top" src={ima} /> */}
                        <Card.Body className="contents_of_body class_ofbody"  >
                          <Card.Text ><p><i class="fas fa-flag country_icon" ></i>Country:{result.country}</p>
                            <p className="p_text"><img src={country} className="city_icon" />City:{result.city}</p>
                            <p className="p_text"><i class="fas fa-map-marker-alt location_icon" ></i>Location:{result.location}</p>
                            <p className="p_text"><i class="far fa-building building_icon"></i>Unit:{result.unit}</p>

                            <p className="p_text"> <img src={floor} className="floor_icon" />Floor:{result.floor}</p>

                            <p className="p_text"><i class="fa fa-video-camera video_icon" aria-hidden="true"></i>Video Conference:Yes</p>
                            <p className=" "><i class="fa fa-users capacity_icon" aria-hidden="true"></i>Capacity:26
</p>
                          </Card.Text>
                          <div href="#" onClick={(e) => { $(e.target).closest('.card-flip').toggleClass('flipped') }} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Image</div>
                          <div href="#" className="margin_forbuttons flex-item position_forbutton button_sweep hvr-sweep-to-right">Book Now</div>

                          {/* <Button variant="primary" onClick={this.HandleFlip} className="test">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );

        }

        )


        this.setState({ cards: dataincards });

      })
      setTimeout(function () {
        this.setState({ loading: false })
      }.bind(this), 10000)
      this.setState({ loading: false })
    }
  }

  render() {


    var finalstate
    if (this.state.loading == true) {
      finalstate = <> <div className="container main2">


        <center>
          <img src={loadergif} className="loader" />
        </center>
        <br />
        <br />
        <br /><br />
        <br />
        <br />

      </div>
      </>
    }
    else {
      finalstate = <div className="fade-in"><div className="container main2">

        <Row>
          {this.state.cards}
        </Row>
        <Modal
          show={this.state.show}

          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title">

          <Modal.Body>
            <p onClick={this.HandleClose} className="Cross_modification"><span className="alter_mul">&#215;</span></p>
            <img src={ima} className="images_alter" />
          </Modal.Body>

        </Modal>
        <br />
        <br />
        <br /><br />
        <br />
        <br />
      </div>
      </div>
    }


    return (


      finalstate




    );

  }
}
