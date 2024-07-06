import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Oops, an error has occured</h1>
      <Link className="primary-button" to={"/"}>
        Go back to homepage
      </Link>
    </>
  );
};

export default ErrorPage;
