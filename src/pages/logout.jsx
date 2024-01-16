import { Button, Card, Grid, Metric } from "@tremor/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <Card className="w-1/2 mx-auto">
          <Metric>You are about to be logged out</Metric>
          <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6 mb-6">
            <Button>
              <Link to="/home">Stay Signed In</Link>
            </Button>
            <Button
              color="red"
              onClick={() => {
                window.location.replace("/login");
              }}
            >
              Confirm Logout
            </Button>
          </Grid>
        </Card>
      </div>
    </>
  );
}
