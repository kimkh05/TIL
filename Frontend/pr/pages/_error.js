function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An Error ${statusCode} occurred on server`
        : `An Error occurred on client`}
    </p>
  );
}

Error.getInitalProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404; // status code 설정해주기 404 or 500과 같은 것을 말한다. 
  return { statusCode };
};

export default Error;
