import { NavLink } from "react-router-dom";

export default function Section() {
    return (
      <div className='section'>
        <div className='inner-section'>
            <div className='section-text'>
                <h6>For Riders</h6>
                <h4>Mechkartz: Auto Spare Parts & Accessories</h4>
                <p>A car always kept maintained with superior quality, all high strength spare parts are quite sure to give you well pleasure on the road. Getting the best, as well affordable and high-performance based spare parts are very much helpful in keeping your vehicle in a good and spanking new condition for longer times.</p>
                <div className='button'><NavLink to="/" style={{background:"#fff", color:" #0E2A47"}}>Explore Now</NavLink></div>
            </div>
            <div className='section-image'>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-e9f5f3f8d595aec4ea0ea1775aa862af" style={{height:"350px", opacity:'0.8', borderRadius:'80px', paddingTop:'25px', paddingBottom:'25px'}} alt="" />
            </div>
        </div>
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="https://toppng.com/uploads/preview/ape-kenworth-carries-it-and-can-install-it-engine-11564309793sosnkrbfjx.png" alt="" />
                    <h1>Genuine Products</h1>
                    <p>Ensuring Safety and Reliability.</p>
                    <NavLink to="/" style={{color:"#0E2A47"}}>learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="https://toppng.com/uploads/preview/car-insurance-coverage-icon-png-clipart-car-vehicle-car-insurance-policy-ico-11562964392mwcwutme98.png" alt="" />
                    <h1>Enquire Online at</h1>
                    <p>your Convenience.</p>
                    <NavLink to="/" style={{color:"#0E2A47"}}>learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="https://toppng.com/uploads/preview/auto-mobile-page-design-hub-autoinsurancepng-motor-insurance-icon-115632023084cvolme9te.png" alt="" />
                    <h1>Fulfillment through</h1>
                    <p>Our Wide Network</p>
                    <NavLink to="/" style={{color:"#0E2A47"}}>learn &rarr;</NavLink>
                </div>
                <div className='card'>
                    <img src="https://toppng.com/uploads/preview/auto-parts-icon-11562990631xx98fcl9mq.png" style={{color:" #0E2A47"}} alt="" />
                    <h1>Ensures Superior</h1>
                    <p>Vehicle Performance</p>
                    <NavLink to="/" style={{color:"#0E2A47"}}>learn &rarr;</NavLink>
                </div>
            </div>
        </div>
    </div>
    );
  }
  