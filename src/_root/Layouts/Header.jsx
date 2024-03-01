import { Button, ButtonGroup } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-blue-gray-900 text-white p-4 flex flex-row items-center justify-between">
      <h1>Filmflix</h1>
      <ButtonGroup>
        <Button className="bg-white text-black">
          <Link to="/about">about</Link>
        </Button>
        <Button className="bg-white text-black">
          <Link to="/contact">Contact</Link>
        </Button>
        <Button className="bg-white text-black">Sign Up</Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
