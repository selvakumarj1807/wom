
// import {FcApproval} from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function Testimonial() {
    return (
      <div className='testimonials'>
      <div className='testimonial-text'>
          <h5>Testimonials</h5>
          <h4>What Our Clients Say !</h4>
          <p>See what our members are saying. Trusted by 1200+ world class businesses Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae nesciunt eligendi reiciendis aspernatur perspiciatis? Exercitationem ipsa vero incidunt suscipit voluptas laboriosam natus eaque mollitia, omnis vitae provident enim! Pariatur? </p>
          <NavLink to="/" >Read all 2,432 reviews</NavLink>
      </div>
      <div className='testimonial-cards'>
          <div className='card'>
              <img src="person1.png" alt="" />
              <p> is the most genuine site I have came accross for purchasing the authentic </p>
              <div className='icons'>
                  <NavLink to="/">@alexborm</NavLink>
                  {/* <FcApproval size={18} className='icon' /> */}
              </div>
          </div>
          <div className='card'>
              <img src="person2.png" alt="" />
              <p> is the most genuine site I have came accross for purchasing the authentic </p>
              <div className='icons'>
                  <NavLink to="/">@chrisjames</NavLink>
                  {/* <FcApproval size={18} className='icon'/> */}
              </div>
          </div>
          <div className='card'>
              <img src="person3.png" alt="" />
              <p> since long time and I am happy till now also I'll recommend others to explore various products.</p>
              <div className='icons'>
                  <NavLink to="/">@skairubelga</NavLink>
                  {/* <FcApproval size={18} className='icon'/> */}
              </div>
          </div>
          <div className='card'>
              <img src="person4.jpg" alt="" />
              <p>I am always happy and feel secure that the transaction between me and my client</p>
              <div className='icons'>
                  <NavLink to="/">@mal</NavLink>
                  {/* <FcApproval size={18} className='icon'/> */}
              </div>
          </div>
      </div>
  </div>
    );
  }
  