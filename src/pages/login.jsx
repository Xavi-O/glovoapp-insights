import { Button, Card, Grid, Metric, TextInput } from "@tremor/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <Card className="w-1/2 mx-auto">
          <Metric className="my-10">Enter your login details</Metric>
          <TextInput id="user" error={true} errorMessage="Wrong username" />
          <TextInput placeholder="Type password here" type="password" />
          <Button className="my-10"><Link to='/home'>Sign In</Link></Button>
        </Card>
      </div>
    </>
  );
}
