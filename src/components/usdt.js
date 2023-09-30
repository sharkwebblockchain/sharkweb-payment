import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav, Carousel} from 'react-bootstrap';
import qr from '../Images/usdtLogo.png'
import Logo from '../Images/Logo2.png'
export default class usdt extends Component {
  
    render() {
        return (
            <>

            <div class="main">
            <div class="upper">
            <img src={Logo} style={{height:'8vh'}}/>
            </div>
            <div class="content">
            <div class="cardWhite">
                <p style={{fontWeight:'500',marginBottom:'0px'}}>Order #1646988613_694623663</p>
                <div class="row mt-1">
                    <div class="col-md-6 col-sm-12">
                    <p style={{fontSize:'33px',fontWeight:'500',marginBottom:'0px'}}>69 <span style={{color:'grey'}}>$</span></p>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <span style={{fontWeight:'500',fontSize:'13px'}}>Description</span>
                        <br/>
                        <span style={{color:'grey',fontSize:'13px'}}>Lorem ipsum</span>
                        </div>
                </div>
            </div>
            <br/>
            <center>
                <p style={{fontSize:'24px',fontWeight:'600'}}>Pay with USDT</p>
                <img src={qr} style={{height:'20vh'}}/>
                <p style={{fontSize:'20px',fontWeight:'500',marginTop:'15px'}}>Your <span style={{color:'#3d3dc6'}}>USDT</span> address</p>
                <p>shk1b6d0d60bflalled9f31508dbe4097¢cIxsit</p>
                <button style={{minWidth:'8.5rem',backgroundColor:'#3d3dc6',cursor:'pointer',border:'none',borderRadius:'.25rem',color:'white',fontWeight:'600',minHeight:'5.5vh',marginTop:'15px'}}>Pay</button>
         
            </center>
            </div>
            <div class="lower">
hi
            </div>
            </div>

     
          
            </>
        )
    }
}