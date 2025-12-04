import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMailOpen } from 'react-icons/io';

const ContactUsForm = () => {
  return (
    <div style={{width: 600, display: 'fit-content'}}>
      
      {/* Heading */}
        <div style={{justifyContent: 'center', textAlign: 'center'}}>
            <h1 style={{fontSize: '35px'}}>Contact Us</h1>
        </div>

      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {/* Left Side */}
        <div style={{textAlign: 'left', width: '100%'}}>
            {/* Call */}
            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', marginLeft: '5px', marginTop: 100}}>
                {/* Logo */}
                <FiPhoneCall style={{width: '35px', height: '35px', color: '#ff7b3eff'}} />
                {/* Text */}
                <div style={{marginLeft: '10px'}}>
                    <h3>Call</h3>
                    <h4>1234567890</h4>
                </div>
            </div>

            {/* Email */}
            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', marginLeft: '5px', marginTop: 50}}>
                {/* Logo */}
                <IoIosMailOpen style={{width: '35px', height: '35px', color: '#ff7b3eff'}} />
                {/* Text */}
                <div style={{marginLeft: '10px'}}>
                    <h3>Email</h3>
                    <h4>rohan123@gmail.com</h4>
                </div>
            </div>

            {/* Location */}
            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', marginLeft: '5px', marginTop: 50, marginBottom: 50}}>
                {/* Logo */}
                <FaMapLocationDot style={{width: '35px', height: '35px', color: '#ff7b3eff'}} />
                {/* Text */}
                <div style={{marginLeft: '10px'}}>
                    <h3>Location</h3>
                    <h4>Dehradun, Bharat</h4>
                </div>
            </div>

            
        </div>

        {/* Right Side */}
        <div style={{width: '100%', justifyItems: 'left'}}>
          <form>
            <input type="text" name="" id="" placeholder='Name' style={{marginTop: 50, background: 'white', color: '#ccccccdf', border: '0px solid black', borderRadius: '5px', width: '100%', outline: 'none', padding: 8, boxShadow: '0px 0px 2px #ccc'}} />
            <br /><br />
            <input type="email" placeholder='Email Address' style={{marginTop: 50, background: 'white', color: '#ccccccdf', border: '0px solid black', borderRadius: '5px', width: '100%', outline: 'none', padding: 8, boxShadow: '0px 0px 2px #ccc'}} />
            <br /><br />
            <textarea name="" id="" placeholder='Message' style={{marginTop: 50, background: 'white', color: '#ccccccdf', border: '0px solid black', borderRadius: '5px', width: '100%', outline: 'none', padding: 8, boxShadow: '0px 0px 2px #ccc'}}></textarea>
            <br /><br />
            <button type='submit' style={{marginTop: 50, marginBottom: 50, background: '#df8254ff', color: '#ffffffff', border: '0px solid black', borderRadius: '5px', width: '100%', outline: 'none', padding: 8, boxShadow: '0px 0px 2px #ccc'}}>SEND NOW</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm
