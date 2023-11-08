import { useState } from "react";

import { useNavigate, NavLink } from "react-router-dom";
import "./SignUpForm.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import { googleAuth, signUpUser } from "../../../Api/auth";

function SignUpForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    user: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser]= useState()

 


 


 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevIdea) => ({
      ...prevIdea,
      [name]: value,
    }));
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-start'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div className="d-flex flex-row mb-3 justify-content-between w-100">
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput label='Your Name' id='form1' type='text' name="user" value={userInfo.user} onChange={handleInputChange} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' name="email" value={userInfo.email} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 justify-content-between w-100">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' name="password" value={userInfo.password} onChange={handleInputChange} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg' />
                    <MDBInput label='Repeat your password' id='form4' type='password' name="repeatPassword" value={userInfo.repeatPassword} onChange={handleInputChange} />
                  </div>
                </div>
                <MDBBtn className='mb-4 w-100 bg-secondary' size='lg' onClick={()=>{
                  signUpUser(userInfo.email, userInfo.password).then((value)=>{
                    if(value.data.user){
                      alert("User Created, Check email for Verification ")
                      navigate("/Login")
                    }
                  })
                }}>Register</MDBBtn>
                <p className="text-center h5 fw-bold mb-3 mx-1 mx-md-4 mt-1 w-100">Or</p>
                <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100">
                  <MDBBtn className='mb-4 w-100 d-flex align-items-center bg-light text-dark' id="google-login-button" size='lg' onClick={()=>{
                    googleAuth().then((value)=>{
                      console.log(value)
                    })
                  }}>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
                    SignUp with Google
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      {successMessage && (
        <p className="text-success">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-danger">{errorMessage}</p>
      )}
    </div>
  )
}

export default SignUpForm;
