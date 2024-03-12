import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Oops, an error has occured</h1>
      <Link to={"/"}>Go back to homepage</Link>
    </>
  );
};

export default ErrorPage;
