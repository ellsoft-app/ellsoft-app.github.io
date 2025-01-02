import { Bolt } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Autotok = () => {
  return (
    <div className="h-screen">
      <div className="flex text-2xl p-2 w-auto gap-2">
        <Bolt size={32} />
        Autotok <div className="ml-auto" />
        <Link to={"/autotok/pp"}>Privacy Policy</Link>
        <Separator orientation="vertical" />
        <Link to={"/autotok/tos"}>Terms Of Service</Link>
        <Separator orientation="vertical" />
        <Link to={"/"}>About us</Link>
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
