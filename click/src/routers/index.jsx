import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginMenu } from "../components/login/login";
import Main from "../components/main";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginMenu />} />
      </Routes>
    </>
  );
};

export default UserRouter;
