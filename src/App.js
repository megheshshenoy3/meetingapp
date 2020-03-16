import React, { Component } from 'react'
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import Results from './pages/results';
import OtherResults from './pages/otherresults';
import Search from './pages/search'
import {Container,Row,Col,Dropdown,Button} from 'react-bootstrap'
import Navbar from './components/navbar/navbar'
import Typical from 'react-typical'
import styles from 'react-awesome-button/src/styles/themes/theme-blue';

import './App.css';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import axios from 'axios';
import $ from 'jquery'
import Result from './pages/results'
import Joyride from "react-joyride"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      textfordisplay:"Meeting Room",
      dropdown:"",
      selectedtextdis:"Select Unit",
      dropdownvalue:"allexe"
    }
    this.handleTextClose=this.handleTextClose.bind(this);
    this.handleTextShow=this.handleTextShow.bind(this);
    this.dropchange=this.dropchange.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
  }
  componentDidMount(){
    localStorage.setItem("Country","INDIA");
    localStorage.setItem("City","BANGALORE");
    localStorage.setItem("Location","Koramangala");
    localStorage.setItem("Unit","BLR-3");
    const location=localStorage.getItem("Location");
    const unit=localStorage.getItem("Unit");

    axios.get(`http://localhost:5000/posts/post/${location}/${unit}`).then(async (res)=>{
      res=res.data
      
      const dropoptions=res.map(res=>{
        return( <Dropdown.Item  eventKey={res}><Link to="/Other">{res}</Link></Dropdown.Item>)
      })
      await this.setState({dropdown:dropoptions})
  });
  }
  handleTextShow = async() =>{  await this.setState({textfordisplay:"Meeting Room for Unit 1"}); }
  handleTextClose= async () => {await this.setState({textfordisplay:"Other Room for Unit 2"}); }
  handleSelect=(evt,values)=> {

   console.log("dropdown",evt);
  this.setState({dropdownvalue:evt,selectedtextdis:evt})
 }
 dropchange=async()=>{
   await this.setState({dropdownvalue:"allexe"});
   this.setState({selectedtextdis:"Select Unit"})
 }
  render() {
    
    
    const RouteContainer = posed.div({
      enter: { opacity: 1, delay: 300, beforeChildren: 300 },
      exit: { opacity: 0 }
    });
    const PosedRouter = ({ children }) => (
      <Location>
        {({ location }) => (
          <PoseGroup>
            <RouteContainer key={location.key}>
              <Router location={location}>{children}</Router>
            </RouteContainer>
          </PoseGroup>
        )}
      </Location>
    );
   
    
  return(<div className="background_color appmain">
   {/* <Joyride steps={steps} continous={false} /> */}
   <Navbar />
   <center>  
     
     <Typical
          steps={[this.state.textfordisplay, 90000]}
          className="cont_text"
          wrapper="h1"
        /></center>
 
 
 
   <Row>
     <Col sm={3}>
       
        
         <Col>
         <Link to="/" >  <AwesomeButton
     
        action={(element, next) =>this.handleTextClose()}
        size="large"
        type="primary"
>
 Searched
</AwesomeButton></Link></Col>
<Col>

</Col>
<Col className="col_button">
         {/* <Link to="/" > <button onClick={this.handleTextClose}  class="button my-other-step" ><span> Meeting Room &nbsp;</span></button></Link> */}
<Dropdown onSelect={this.handleSelect} >
  {/* <Dropdown.Toggle style={{background:"#F4511E"}}  id="dropdown-basic">
    {this.state.selectedtextdis}
  </Dropdown.Toggle> */}
  <Button className="buttonofdrop"style={{background:"#F4511E",border: "none"}} >{this.state.selectedtextdis}</Button>

<Dropdown.Toggle style={{background:"#F4511E",border: "none"}} split id="dropdown-split-basic" />


  <Dropdown.Menu >
  {this.state.dropdown}
  </Dropdown.Menu>
</Dropdown>
         </Col>
         <Col className="col_button">
         <Link to="/Other" onClick={this.dropchange} >
         <AwesomeButton
     
     action={(element, next) =>this.handleTextShow()}
     size="large"
     type="primary"
>
Other Units
</AwesomeButton>
           {/* <button onClick={this.handleTextShow} class="button my-first-step"><span>Other Units &nbsp;  &nbsp; </span></button>*/}
           </Link> 
         </Col>
         <Col className="col_button" >
           <Link to="/search">
           <AwesomeButton
     
     action={(element, next) =>this.handleTextClose()}
     size="large"
     type="primary"
>
Search For
</AwesomeButton>
           </Link>
        
         </Col>

         
      </Col>
    <Col sm={9} className="total_margin">
    <PosedRouter className="posee"> 
        <Results  path="/" />
        <OtherResults data={this.state.dropdownvalue} path="/Other"/>
        <Search path="/search" />
    </PosedRouter>
    </Col>
   </Row>
   
   
 </div>);
  }
}
