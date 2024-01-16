import {
  Button,
  Metric,
  TextInput,
  Title,
  Italic,
  Card,
} from "@tremor/react";
import React, { useState } from "react";

export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        //retrieved the username
        const userName = document.getElementById("userTxt").value;
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Italic className="error">{errorMessages.message}</Italic>
    );

  return (
    <div className="login-form flex flex-col h-screen justify-center items-center">
      {isSubmitted ? (
        window.location.replace("/home")
      ) : (
        <div className="form flex flex-col h-screen justify-center items-center">
          <Metric className="title">Sign In</Metric>
          <Card>
            <form onSubmit={handleSubmit}>
              <div className="input-container mb-8">
                <Title>Username</Title>
                <TextInput
                  id="userTxt"
                  error={renderErrorMessage("uname") ? true : false}
                  errorMessage={
                    renderErrorMessage("uname")
                      ? renderErrorMessage("uname")
                      : ""
                  }
                  type="text"
                  name="uname"
                  required
                />
              </div>
              <div className="input-container">
                <Title>Password</Title>
                <TextInput
                  error={renderErrorMessage("pass") ? true : false}
                  errorMessage={
                    renderErrorMessage("pass") ? renderErrorMessage("pass") : ""
                  }
                  type="password"
                  name="pass"
                  required
                />
              </div>
              <Button className="mt-6" type="submit">
                Login
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}