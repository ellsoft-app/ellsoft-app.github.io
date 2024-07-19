import { Link } from "react-router-dom";

const QuickDraw = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="flex justify-center text-9xl">Quick Draw</h1>
        <p className="flex justify-center text-2xl pt-20">
          Quick draw game where players test their reaction times in shooting
          different numbers of targets or throwing knives at moving targets.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              (location.href =
                "https://www.meta.com/en-gb/experiences/7492629460764141/")
            }
            className="text-2xl rounded-md border-2 border-black p-2 mt-20"
          >
            Get now
          </button>
        </div>
      </div>

      <div className="absolute bottom-2 left-2">
        <Link to={"/qd/pp"}>Privacy Policy</Link> and{" "}
        <Link to={"/qd/tc"}>Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default QuickDraw;
