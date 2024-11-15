import React from "react";
import { ContainerProps } from "@/types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto">{children} </div>
  );
};

export default Container;
