import { Bolt } from "lucide-react";
import { Link } from "react-router-dom";

const Autotok = () => {
  return (
    <div className="h-screen">
      <div className="flex text-2xl p-2 w-auto">
        <Bolt size={32} /> <div className="w-2" />
        Autotok <div className="ml-auto" />
        <Link to={"/autotok/pp"}>Privacy Policy</Link>
        <Link to={"/autotok/tos"}>Terms Of Service</Link>
        <button title="Coming soon" disabled>
          Login
        </button>
      </div>

      <div className="h-1/4" />
      <div className="flex">
        <div className="w-1/5" />
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl">Autotok</h1>
          <h2 className="text-3xl">Generating content for you</h2>
        </div>
      </div>
    </div>
  );
};

export default Autotok;
