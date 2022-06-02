import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/api/axios";

export const LoginMenu = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [isLog, setIsLog] = useState(false);
  const [res, setRes] = useState([]);

  const isLogin = () => {
    axios
      .get(`${BASE_URL}/api/users`, {
        username: loginInput.email,
        password: loginInput.password,
      })
      .then((response) => {
        console.log(response);
        setIsLog(!isLog);
        setRes(response.data);
      })
      .catch(() => {
        alert("실패");
      });
  };

  return (
    <>
      <input
        type="email"
        placeholder="email을 입력해주세요."
        value={loginInput.email}
        onChange={(e) => setLoginInput(e.target.value)}
      />
      <input
        type="password"
        placeholder="password를 입력하세요."
        value={loginInput.password}
        onChange={(e) => setLoginInput(e.target.value)}
      />
      <button type="submit" onClick={isLogin}>
        로그인
      </button>
      {isLog
        ? res.map((value, index) => {
            return (
              <div key={index}>
                <span>{value.username}</span>
                <span>{value.password}</span>
              </div>
            );
          })
        : null}
    </>
  );
};
