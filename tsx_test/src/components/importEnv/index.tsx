import React from "react";

const ImportEnv = (): JSX.Element => {
  const envConfig = {
    test: process.env.REACT_APP_TEST,
  };
  console.log(envConfig.test);
  return (
    <>
      <span>{envConfig.test}</span>
    </>
  );
};

export default ImportEnv;
