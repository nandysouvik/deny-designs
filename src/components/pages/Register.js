import React from 'react';
import './Register.css'

function Register({ states }) {
  return (
    <div className="register">
      <p className="register_para"><span className="indicator">*</span>Indicates a required field</p>
      <div className="register_details">
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">FIRST NAME<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input2">
          <h4 className="register_detailsInputHeader">LAST NAME<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">PHONE<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input2">
          <h4 className="register_detailsInputHeader">MOBILE PHONE</h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">EMAIL<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
      </div>
      <hr />
      <div className="register_details">
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">COMPANY NAME<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input2">
          <h4 className="register_detailsInputHeader">COMPANY WEBSITE<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">COMPANY ADDRESS<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input2">
          <h4 className="register_detailsInputHeader">ADDRESS 2</h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input1">
          <h4 className="register_detailsInputHeader">CITY<span className="indicator">*</span></h4>
          <input type="text" className="input" />
        </div>
        <div className="register_detailsInput" id="input2">
          <h4 className="register_detailsInputHeader">STATE<span className="indicator">*</span></h4>
          <select className="input" >
            <option value="-Select-State-">-Select-State-</option>
            {states.map((state) => {
              return (
                <option value="Odisha">{state.name}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Register
