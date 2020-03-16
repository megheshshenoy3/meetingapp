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
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import googlemaps from '../images/googlemaps.png'
import Joyride from "react-joyride"
//import { Map, GoogleApiWrapper } from 'google-maps-react';
const jquery=require('jquery')
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
      show:false,
      cards: '',
      country:'',
      city:'',
      location:'',
      unit:'',
      loading: true,
      warroom: '',
      conferene: '',
      meetingroom: '',
      forjquery:"$('.test').on('click', function(e){$(e.target).closest('.card-flip').toggleClass('flipped')})"

    }

    this.HandleVisible = this.HandleVisible.bind(this);
    this.HandleClose = this.HandleClose.bind(this);


  }
  
  HandleVisible = async () => {
    await this.setState({ show: true });
    console.log(this.state.show)
    alert("hello")
  }
  HandleClose = async () => {
    await this.setState({ show: false });
  }

  Booking = () => {



  }
   
  async componentDidMount() {
    // await this.Forjquery();
    await this.Forcards();

  }
  
  Forcards = async () => {
    const countrys=localStorage.getItem("Country");
    const city=localStorage.getItem("City");
    const location=localStorage.getItem("Location");
    const unit=localStorage.getItem("Unit");
    await this.setState({ country:countrys,
    city:city,
    location:location,
    unit:unit})
    await axios.get(`http://localhost:5000/posts/${this.state.country}/${this.state.city}/${this.state.location}/${this.state.unit}`).then(res => {
      var dataincards = []
      res = res.data
      // this.setState({ loading: false })
       console.log(res)
      dataincards = res.map(result => {

        // if(result.address != null){
        // console.log("encodedaddress",encodeURIComponent(result.address))
        //    address=  <p className="p_text"cc><img src={googlemaps} onClick={this.HandleVisibleformaps} className="google_maps_icon my-first-step" /><p className="p_in_cardtext p_height">
        //     {result.address} </p></p>
        // }

        return (
          <Col sm={4} clasName="margin_left">


            {/* <!-- Card Flip --> */}
            <div >
              <div className="card-flip" >
                <div className="flip">
                  <div className="back">
                    <Card className="card_box">
                      <Card.Img id="myImg" onClick={ this.HandleVisible} variant="top" src={ima} />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{result.roomname}</Card.Title>
                        <Card.Text>
                        <div href="#" onClick={(e)=>{ $(e.target).closest('.card-flip').toggleClass('flipped')}} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Details</div>
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
                        <Card.Text ><p><i class="fas fa-flag country_icon" ></i><b>Country:
              </b>{result.country}</p>
                          <p className="p_text"><img src={country} className="city_icon" /><p className="city_align"><b>City:</b>{result.city}</p></p>
                          <p className="p_text"><i class="fas fa-map-marker-alt location_icon" ></i><b>Location:</b>{result.location}</p>
                          <p className="p_text"><i class="far fa-building building_icon"></i><b>Unit:</b>{result.unit}</p>

                          <p className="p_text"> <img src={floor} className="floor_icon" /><p className="floor_align"><b>Floor:</b>{result.floor}</p></p>
                       
                          <p className="p_text"><i class="fa fa-video-camera video_icon" aria-hidden="true"></i><b>
                          Video Conference: </b>Yes</p>
                          <p className=" "><i class="fa fa-users capacity_icon" aria-hidden="true"></i><b>Capacity:</b>26
</p>
                        </Card.Text>
                        <div href="#" onClick={(e)=>{ $(e.target).closest('.card-flip').toggleClass('flipped')}} className="margin_fordetails position_forbutton button_sweep test hvr-sweep-to-right">View Image</div>
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

      
     this.setState({cards:dataincards});
      
    })
    setTimeout(function() { //Start the timer
      this.setState({ loading: false }) //After 1 second, set render to true
  }.bind(this), 10000)
  this.setState({ loading: false })
  }


  render() {
    
    
    var  finalstate
    if(this.state.loading==true){
      finalstate=<> <div className="container main2">

     {/* <Row>
     <Card className="card_background fade-out" >
  
    </Card>
     </Row> */}
     <center>
      <img src={loadergif} className="loader"/>
     </center>
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      
    </div>
    </>
    }
    else{
      finalstate= <div className="fade-in"><div className="container main2">

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
