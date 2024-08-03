import React from "react";
import "../../user_dash/dashboard.css";
import { Link } from "react-router-dom";
import './reqQuote.css'

function RequestQuote() {
  return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Request a Quote</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Request a Quote</li>
          </ol>
        </nav>
      </div>

      <section className="dashboard section">
        <div className="row" style={{marginInline:'20%'}}>
          <div className="col-lg-12">
            <form className="row g-3 border-2-solid-black form">
              <select className="form-select" aria-label="Large select example mb-3">
                <option selected>Select Year</option>
                <option value="1">2023</option>
                <option value="2">2022</option>
                <option value="3">2021</option>
                <option value="4">2020</option>
                <option value="5">2019</option>
                <option value="6">2018</option>
                <option value="7">2017</option>
                <option value="8">2016</option>
                <option value="9">2015</option>
                <option value="10">2014</option>
                <option value="11">2013</option>
                <option value="12">2012</option>
                <option value="13">2011</option>
                <option value="14">2010</option>
                <option value="15">2009</option>
              </select>
              <select className="form-select" aria-label="Default select example mb-3">
                <option selected>Select Make</option>
                <option value="1">Maruthi</option>
                <option value="2">Hyundai</option>
                <option value="3">TaTa Motors</option>
                <option value="4">Honda</option>
                <option value="5">Toyota</option>
                
              </select>
              <select className="form-select" aria-label="Default select example mb-3">
              <option selected>Select Model</option>
                <option value="1">Ambassador</option>
                <option value="2">American</option>
                <option value="3">Amx</option>
                <option value="4">Classic</option>
                <option value="5">RDX</option>
                <option value="6">RL</option>
                <option value="7">RSX</option>
                <option value="8">Mito</option>
                <option value="9">A3</option>
                <option value="10">A4</option>
                <option value="11">Q3</option>
                <option value="12">R8</option>
                <option value="13">RS3</option>
              </select>
              <button style={{borderRadius:'10px', width:'250px', marginInline:'auto', color:'#fff', fontWeight:'550'}}>
                <Link to="/user/required_inform" className="a" >Submit</Link>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RequestQuote;
