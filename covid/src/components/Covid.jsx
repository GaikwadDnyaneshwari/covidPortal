import React, { useState } from 'react';
import "./covid.css"

const Covid = () => {

  const genders = ["Select Gender", "Male", "Female", "Other"];
  const states = ["Select State", "Maharastra", "Gujrat", "Ontario", "London"];
  const countries = ["Select Country", "India", "USA", "Canada", "UK"];
  const maritalStatuses = ["Select status", "Single", "Married", "Divorced"];


  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    detail: "",
    dob: "",
    address: "",
    gender: "",
    maritalStatus: "",
    country: "",
    state: "",
    pincode: ""

  });

  const [errors, setErrors] = useState({});

  const requiredForm = () => {
    let messege = true;
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required";
      messege = false;
    }

    if (!data.email) {
      errors.email = "Email ID is required";
      messege = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email ID is invalid";
      messege = false;
    }

    if (!data.mobile) {
      errors.mobile = "Mobile Number is required";
      messege = false;
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = "Mobile Number is invalid";
      messege = false;
    }

    if (!data.dob) {
      errors.dob = "Date of Birth is required";
      messege = false;
    }

    if (!data.address) {
      errors.address = "Address is required";
      messege = false;
    }

    if (data.country === "Select Country") {
      errors.country = "Please select a country";
      messege = false;
    }

    if (data.state === "Select State") {
      errors.state = "Please select a state";
      messege = false;
    }


    if (!data.pincode) {
      errors.pincode = "Pincode is required";
      messege = false;
    } else if (!/^\d{6}$/.test(data.pincode)) {
      errors.pincode = "Pincode is invalid";
      messege = false;
    }

    if (!data.gender) {
      errors.gender = "Gender is required";
      messege = false;
    }

    if (!data.maritalStatus) {
      errors.maritalStatus = "Marital Status is required";
      messege = false;
    }

    if (!data.detail) {
      errors.detail = "vaccination center is required";
      messege = false;
    }
    if (!data.time) {
      errors.time = "time is required";
      messege = false;
    }

    setErrors(errors);
    return messege;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((State) => ({ ...State, [name]: value }));
    //  setData(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (requiredForm()) {
      // Submit the form data
      console.log("Form submitted:", data);
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  const resetForm = () => {
    setData("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <table
          style={{
            border: "1px solid rgb(225, 190, 144)",
            marginBottom: "40px"
          }}>
          <caption>Covid E-Portal Registration Form</caption>
          <tr>
            <th><label className='label' htmlFor="name"> Name: </label></th>
            <td><input
              className='input'
              type='text'
              name="name"
              id='name'
              placeholder='enter your name'
              value={data.name}
              onChange={handleChange}
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="email"> Email: </label></th>
            <td><input
              className='input'
              type='text'
              id='email'
              name="email"
              placeholder='enter your email'
              value={data.email}
              onChange={handleChange}
              required /></td>
          </tr>

          <tr>
            <th><label className='label' htmlFor="mobile"> Mobile No: </label></th>
            <td><input
              className='input'
              type='number'
              id='mobile'
              name="mobile"
              value={data.mobile}
              onChange={handleChange}
              required
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="date"> Appointment Date: </label></th>
            <td><input
              className='input'
              type='date'
              id='date'
              name="date"
              value={data.date}
              onChange={handleChange}
              style={{ width: "160px" }}
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="time"> Appointment Time: </label></th>
            <td><input
              className='input'
              type='time'
              id='time'
              name="time"
              value={data.time}
              onChange={handleChange}
              style={{ width: "160px" }}
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="detail"> Vaccine Center Details: </label></th>
            <td><input
              className='input'
              type='text'
              id='detail'
              name="detail"
              placeholder='enter your vaccine center details'
              value={data.detail}
              onChange={handleChange}
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="dob">Date Of Birth: </label></th>
            <td><input
              className='input'
              type='date'
              id='dob'
              name="dob"
              value={data.dob}
              onChange={handleChange}
              style={{ width: "160px" }}
            /></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="address"> Address: </label></th>
            <td><textarea
              className='text'
              name="address"
              id="address"
              style={{ resize: "none" }}
              value={data.address}
              onChange={handleChange}
            ></textarea></td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="gender">Gender:</label></th>
            <td>
              <select
                id="gender"
                name="gender"
                value={data.gender}
                onChange={handleChange}
                style={{ width: "190px" }}
              >
                {genders.map((gender, index) => (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </td>


          </tr>
          <tr>
            <th><label className='label' htmlFor="maritalStatus">Marital Status:</label></th>
            <td>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={data.maritalStatus}
                onChange={handleChange}
                style={{ width: "190px" }}
              >
                {maritalStatuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="country"> Country: </label></th>
            <td>
              <select
                id="country"
                name="country"
                value={data.country}
                onChange={handleChange}
                style={{ width: "190px" }}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="state"> State: </label></th>
            <td>
              <select
                id="state"
                name="state"
                value={data.state}
                onChange={handleChange}
                style={{ width: "190px" }}
              >
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th><label className='label' htmlFor="pincode">Pincode:</label></th>
            <td>
              <input
                className='input'
                type="text"
                id="pincode"
                name="pincode"
                placeholder='Enter pincode'
                value={data.pincode}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><button>submit</button></td>
            <td><button  onClick={resetForm}>reset</button></td>
          </tr>


        </table>
      </form>
    </div>
  )
}

export default Covid
