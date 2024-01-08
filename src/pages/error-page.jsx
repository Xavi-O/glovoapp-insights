import { Metric, Title } from "@tremor/react";
import React from "react";

export default function ErrorPage() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Metric>404 Error!</Metric>
        <img src="remove_link.png" alt="Link" />
        <Title>Oops! This page was not found</Title>
      </div>
    </>
  );
}
