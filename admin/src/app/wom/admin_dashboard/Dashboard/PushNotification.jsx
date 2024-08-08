import React from 'react'
const PushNotification = () => {
  return (
    <div id="main" className="main">
      <div>
        <hr />
        <h3 style={{ textAlign: "center", fontSize: '16px' }}>Push-Notification</h3>
        <hr />
        <main>
          <div className='main_container'>

            <div className='charts'>
              <div className='charts_left'>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>New Push Notification</p>
                <hr />
                <form >
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '50px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px' }} >Message</label>
                    <input type="text" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', marginLeft: '90px' }} >Message</label>
                    <p style={{ marginLeft: '90px' }}>Push Notification will be send to all vendors. with access to the selected documents</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '16px', marginLeft: '90px' }} >Documents</label>
                    <input type="file" style={{ marginLeft: '60px' }} />
                  </div>

                  <button style={{ marginTop: '30px', marginLeft: '40%', backgroundColor: '#002D62', color: '#fff', padding: '10px', borderRadius: '10px', fontWeight: '480' }}>
                    Send notification
                  </button>

                </form>
              </div>
              <div className='charts_right'>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Notification Settings</p>
                <hr />
                <form >
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '50px' }}>
                    <input type="checkbox" />
                    <label style={{ fontSize: '16px' }} >Automatically send a notification when a publication is updated</label>
                  </div>
                  <button style={{ marginTop: '30px', marginLeft: '40%', backgroundColor: '#002D62', color: '#fff', padding: '10px', borderRadius: '10px', fontWeight: '480' }}>
                    Save settings
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PushNotification