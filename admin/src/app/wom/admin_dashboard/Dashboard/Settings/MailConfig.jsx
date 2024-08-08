import React from "react";
import './style.css'
const MailConfig = () => {
  return (
    <div id="main" className="main">
      <div>
        <div>
          {" "}
          <br />
          <hr />
          <h3 style={{ textAlign: "center", fontSize: "16px" }}>
            Mail Configuration
          </h3>
          <hr />
          <main>
            <div className='main_container'>

              <div className='charts'>
                <div className='charts_right'>
                  <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Mail</p>
                  <hr />
                  <form >
                    <form >
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                        <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'end' }} >From Mail</label>
                        <p style={{ textAlign: 'start', width: '300px', marginRight: '20px', border: '1px solid black', padding: '5px', borderRadius: '2px' }} >cargocar@gmail.com</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                        <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'end' }} >To Mail</label>
                        <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='dummy@gmail.com' />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                        <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'end' }} >cc mail</label>
                        <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='test@gmail.com, test2@gmail.com' />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                        <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start' }} >Subject</label>
                        <input style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='Request a quote' />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                        <label style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'start' }} >Message</label>
                        <textarea cols="30" rows="5" style={{ textAlign: 'start', width: '300px', marginRight: '20px' }} placeholder='message...' />
                      </div>

                    </form>
                    <button style={{ marginTop: '30px', marginLeft: '40%', backgroundColor: '#002D62', color: '#fff', padding: '10px', borderRadius: '10px', fontWeight: '480' }}>
                      Save Mail
                    </button>
                  </form>
                </div>
                <div className='charts_left'>
                  <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Mail Details</p>
                  <hr />

                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MailConfig;
