import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div id="main" className="main">
      <div>
        <br />
        <hr></hr>
        <h3 style={{ textAlign: "center", fontSize: '16px' }}>Social Media</h3>
        <hr></hr>
        <main>
          <div className='main_container'>

            <div className='charts'>
              <div className='charts_left'>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Social Media</p>
                <hr />
                <form >
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaFacebook marginRight='50px' color='#1877F2' size='20px' textAlign='start' /> <span style={{ marginLeft: '10px' }}>FaceBook</span></label>
                    <p style={{ textAlign: 'start' }}>https://www.facebook.com/</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaWhatsapp marginRight='50px' color='#25D366' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Whats App</span></label>
                    <p style={{ textAlign: 'start' }}>+91 98765 43210</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaTwitter marginRight='50px' color='#1DA1F2' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Twitter</span></label>
                    <p style={{ textAlign: 'start' }}>https://twitter.com/i/flow/login</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaInstagram marginRight='50px' color='#FCAF45' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Instagram</span></label>
                    <p style={{ textAlign: 'start' }}>https://www.instagram.com/</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaTelegram marginRight='50px' color='#0088cc' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Telegram</span></label>
                    <p style={{ textAlign: 'start' }}>https://web.telegram.org/</p>
                  </div>
                </form>
              </div>
              <div className='charts_right'>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Change Social media</p>
                <hr />
                <form >
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaFacebook marginRight='50px' color='#1877F2' size='20px' textAlign='start' /> <span style={{ marginLeft: '10px' }}>FaceBook</span></label>
                    <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='https://www.facebook.com/' />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaWhatsapp marginRight='50px' color='#25D366' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Whats App</span></label>
                    <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='+91 98765 43210' />

                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaTwitter marginRight='50px' color='#1DA1F2' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Twitter</span></label>
                    <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='https://twitter.com/i/flow/login' />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaInstagram marginRight='50px' color='#FCAF45' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Instagram</span></label>
                    <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='https://www.instagram.com/' />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start', marginRight: "50px" }} ><FaTelegram marginRight='50px' color='#0088cc' size='20px' textAlign='start' /><span style={{ marginLeft: '10px' }}>Telegram</span></label>
                    <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='https://web.telegram.org/' />

                  </div>
                  <button style={{ marginTop: '30px', marginLeft: '40%', backgroundColor: '#002D62', color: '#fff', padding: '10px', borderRadius: '10px', fontWeight: '480' }}>
                    Save Account Details
                  </button>
                </form>
                <form >


                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SocialMedia