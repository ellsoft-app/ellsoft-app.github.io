import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="flex justify-center text-8xl pt-10">Ellsoft</h1>
      <div className="p-20"></div>
      <div className="flex justify-center gap-4">
        <Link to={"/qd"}>
          <h2 className="text-4xl text-center pb-2">Quick Draw</h2>
          <p>Test your reactions. How quickly can you shoot the targets?</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
