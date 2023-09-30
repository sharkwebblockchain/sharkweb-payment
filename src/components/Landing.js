import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import { Card, Button, Table, Form,Modal, Row, Col , Navbar , Container,NavDropdown,Nav, Carousel} from 'react-bootstrap';

import { MuiOtpInput } from 'mui-one-time-password-input'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import pay1 from '../Images/pay1.png'
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import TodayIcon from '@mui/icons-material/Today';
import TextField from '@mui/material/TextField';
import PaymentIcon from '@mui/icons-material/Payment';
import pay2 from '../Images/pay2.png'
import pay3 from '../Images/phone pe.png'
import pay4 from '../Images/gpay.png'
import LockIcon from '@mui/icons-material/Lock';
import pay7 from '../Images/aifi.png'
import pay5 from '../Images/xrp.png'
import pay6 from '../Images/usdt.png'
import Logo from '../Images/Logo2.png'
export default class Landing extends Component {
    state={
        isVisibleUpi: false,
        isVisibleCards:true,
        isVisibleCoin:false,
        show:false
    }
   
     toggleVisibility = () => {
        this.setState(() => ({
          isVisibleUpi: true,
          isVisibleCards:false,
          isVisibleCoin:false
        }));
      };

      toggleVisibilityCard = () => {
        this.setState(() => ({
          isVisibleCards: true,
          isVisibleUpi:false,
          isVisibleCoin:false,
          
        }));
      };

      toggleVisibilityCoin = () => {
        this.setState(() => ({
         isVisibleCards:false,
          isVisibleUpi:false,
          isVisibleCoin: true,
        }));
      };
     
      handleClose = ()=>{
      this.setState({
        show:false
      })
    }
     handleOpt = () =>{
      this.setState({
        show:true
      })
     }
      
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
     




            <p class="mtop20" style={{fontWeight:'500',fontSize:'20px'}}>Select a <span style={{color:'#313b45'}}>payment method:</span></p>
            <div>
            <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
     
          <Typography style={{width:'100%'}}> 
 

    <FormControlLabel class="pl0" onClick={this.toggleVisibilityCard} value={this.state.isVisibleCards} control={<Radio />} label="Bank cards" style={{padding:'0px'}}/>
    <img src={pay2} style={{height:'3vh',float:'right',textAlign:'right',}}/>
    <img src={pay1} style={{height:'3vh',float:'right',textAlign:'right',marginRight:'5px'}}/>
   </Typography>
   {this.state.isVisibleCards && (

    <div class="pl0">
  <Typography style={{marginLeft:'30px',padding:'0px'}}>
          <div class="" style={{width:'100%'}}>
          <FormControl class="w100  " sx={{ width: '25ch' ,border:'none',boxShadow:'none',padding:'0px'}} variant="standard" style={{width:'70%',backgroundColor:'#eef2f7',border:'none'}}>
          <OutlinedInput
          class="w1001 outlineNone pl0"
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><PaymentIcon/></InputAdornment>}
            aria-describedby=""
            placeholder='Card number'
            inputProps={{
              'aria-label': 'weight',
              style: { border: 'none', boxShadow: 'none' ,width:'100%'},
            }}
            style={{width:'100%'}}
       
          />
         
        </FormControl>
          </div>
          <div class="w100" style={{width:'70%'}}>     
                 <div class="row mt-3">
            <div class="col-md-7 col-sm-12 pr-0">
            <FormControl class="w100" sx={{ width: 'auto' ,border:'none',boxShadow:'none'}} variant="standard" style={{width:'',backgroundColor:'#eef2f7',border:'none'}}>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><TodayIcon/></InputAdornment>}
            aria-describedby=""
            placeholder='MM/YY'
            inputProps={{
              'aria-label': 'weight',
              style: { border: 'none', boxShadow: 'none' },
            }}
          
          />
         
        </FormControl>
            </div>
            <div class="col-md-5 col-sm-12 mtop15" >
            <FormControl  class="w100" sx={{ width: 'auto' ,border:'none',boxShadow:'none'}} variant="standard" style={{width:'',backgroundColor:'#eef2f7',border:'none'}}>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><LockIcon/></InputAdornment>}
            aria-describedby=""
            placeholder='Cvv'
            inputProps={{
              'aria-label': 'weight',
              style: { border: 'none', boxShadow: 'none' },
            }}
          
          />
         
        </FormControl>
                </div>
          </div>
          </div>
    
                <p style={{fontSize:'10px',marginTop:'15px',color:'grey'}}>Datais protected under the PCI DSS standard. We do not store your data and do not share it with the merchant.</p>
                <button onClick={this.handleOpt} style={{minWidth:'8.5rem',backgroundColor:'#3d3dc6',cursor:'pointer',border:'none',borderRadius:'.25rem',color:'white',fontWeight:'600',minHeight:'5.5vh'}}>Pay</button>
          </Typography>
    </div>
   )
    }
        
    

   
          <Typography  style={{marginTop:'20px',marginLeft:'10px'}}> 
 

    <FormControlLabel onClick={this.toggleVisibility} value="isVisibleUpi" control={<Radio />} label="Online payment system" style={{marginBottom:'0px'}}/>
    <img src={pay4} style={{height:'3vh',float:'right',textAlign:'right',}}/>
    <img src={pay3} style={{height:'3vh',float:'right',textAlign:'right',marginRight:'5px',marginBottom:''}}/>
   </Typography>
   {this.state.isVisibleUpi && (
          <div className="visible-div" style={{marginLeft:'30px',width:'60%',marginBottom:'10px'}}>
            <div class="input-group ">
  <input type="text" class="form-control outlineNone" placeholder="Enter UPI ID" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{border:'none',borderBottom:'1px solid grey',borderRadius:'0px',padding:'0px',fontSize:'14px'}}/>
  <div class="input-group-append" style={{marginLeft:'20px'}}>
  <button style={{minWidth:'6rem',backgroundColor:'#3d3dc6',cursor:'pointer',border:'none',borderRadius:'.25rem',color:'white',fontWeight:'600',minHeight:'4.5vh',marginTop:''}}>Pay</button>
         
  </div>
</div>
          </div>
        )}
          <Typography style={{marginLeft:'30px',fontSize:'11px',color:'grey'}}>
          Convenient method of payment using <br/>
          Onine payment systems 
          </Typography>
  

     
          <Typography  style={{marginTop:'20px',marginLeft:'10px'}}> 
 
          <div class="dropdown">
    <FormControlLabel onClick={this.toggleVisibilityCoin}   value="other" control={<Radio />} label="Select Coin" style={{marginBottom:'0px',fontWeight:''}} />
    <img src={pay5} style={{height:'3vh',float:'right',textAlign:'right',}}/>
    <img src={pay6} style={{height:'3vh',float:'right',textAlign:'right',marginRight:'5px'}}/>
    <img src={pay7} style={{height:'3vh',float:'right',textAlign:'right',marginRight:'5px'}}/>
    {this.state.isVisibleCoin && (
  <div class="" aria-labelledby="dropdownMenuButton" style={{border:'1px solid #eeeeee',width:'10rem',marginBottom:'15px',marginLeft:'30px',fontSize:'13px'}}>
    <a class="dropdown-item" href="/aifi">AIFI</a>
    <a class="dropdown-item" href="/usdt">USDT </a>
    <a class="dropdown-item" href="/xrp">XRP</a>
  </div>
    )
    }
</div>

   </Typography>
   
          <Typography style={{marginLeft:'30px',fontSize:'11px',color:'grey'}}>
          Anonymaus payments sing A, USDTE XRP 
          </Typography>
  
      </RadioGroup>
</div>
            <FormControl>
  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
  
</FormControl>
            </div>
            <div class="lower">

            </div>
            </div>
            <Modal show={this.state.show} onHide={this.handleClose} >
        <center className="mt-4" style={{paddingTop:'',color:'',fontWeight:'',fontSize:'14px'}}>
     
          <h4 style={{color:"#3d3dc6"}}>Please Enter OTP</h4>
          <p class="mt-3" style={{color:'grey'}}>Your One Time Password (OTP) has been sent via SMS to <br/>
your registered mobile number.</p>
          </center>
          <i class="fa fa-times" onClick={this.handleClose} style={{color:'grey',position:'absolute',right:'3%',top:'7%',cursor:'pointer'}}></i>
      <Modal.Body style={{padding:'5%',marginTop:''}}>
    <center>
      <MuiOtpInput length={6}  style={{height:'',textAlign:'center',marginLeft:''}}/>
      <br/>
      < p style={{color:'grey',fontSize:'14px'}}>Did not receive OTP? <Link to="" style={{color:'#3d3dc6',fontWeight:'500'}}>Resend</Link></p>
     
    <button onClick={this.handleClose} style={{minWidth:'6rem',backgroundColor:'#3d3dc6',cursor:'pointer',border:'none',borderRadius:'.25rem',color:'white',fontWeight:'600',minHeight:'4.5vh',marginTop:''}}>Submit</button>
   
 </center>
      </Modal.Body>
    </Modal>
            </>
        )
    }
}