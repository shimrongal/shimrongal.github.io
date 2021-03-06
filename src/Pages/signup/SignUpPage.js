import "./SignUpPage.css"
import React, { useCallback, useContext } from "react";
import {  Col, Form } from "react-bootstrap";
import { Redirect, withRouter } from "react-router";
import  app   from "../../utils/FirebaseConfig";
import UserModel from "../../models/UserModel";
import { AuthContext } from "../../utils/Auth";


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * SignUp page 
 *   *** This class will sign in new user to Firebase auth server
 * 
 **/



const SignUpPage = ({  userList, updateUsersList}) => {
  
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    //To do create a new user 
    const {email, password , firstName , lastName , address} = event.target.elements;

    updateUsersList( userList.concat( new UserModel(firstName.value, lastName.value, email.value, password.value ,address.value) ) );

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div id="p-sign-in">
      <h1>Sign up</h1>
      <Form onSubmit={handleSignUp}>

      <Form.Group controlId="formGridFirestName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" placeholder="Enter your last name" />
        </Form.Group>
        
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" placeholder="1234 Main St" />
        </Form.Group>



        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default withRouter(SignUpPage);