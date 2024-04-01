import { Button, ButtonGroup } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full bg-blue-gray-900 text-white p-3 flex flex-row items-center justify-between px-40">
      <h1 className="font-bold text-4xl text-blue-500">Filmflix</h1>
      <div className="flex flex-row items-center justify-between gap-1">
        <ButtonGroup>
          <Button className="bg-transparent text-white">
            <FaSearch />
          </Button>
          <Button className="bg-transparent text-white">
            <Link to="/contact">Movies</Link>
          </Button>
          <Button className="bg-transparent text-white">Series</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Header;
