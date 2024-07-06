import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex bg-color-1 h-[8rem] justify-center items-cente w-[]">
        <div className=" w-[80vw] p-[.5rem] border-2 border-[red]">
          <div className="flex justify-between">
            <div className="flex gap-[.5rem]">
              <span>mall</span>shop<span></span>my shop<span></span>settingas
            </div>
            <div className="flex gap-[.5rem]">
              <span>mall</span>shop<span></span>my shop<span></span>settingas
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" flex items-center text-[1.5rem] font-size[10rem]">
              Online Shoes shop ni Gogo Rigor
            </div>
            <span>
              <input type="text" className="rounded w-[50rem] py-[.7rem]" />
            </span>
            <span>button</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[.5rem]">
              <span>mall</span>shop<span></span>my shop<span></span>settingas
            </div>
            <div className="flex gap-[.5rem]">
              <span>mall</span>shop<span></span>my shop<span></span>settingas
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2rem] bg-color-2 px-[1rem]">
        <div className="w-full flex justify-center gap-[5rem]">
          <Link to="/kidswear">
            <span>Home</span>
          </Link>
          <Link to="/analytics">
            <span>Analytics</span>
          </Link>
          <span>Men's Wear</span>
          <span>Kid's Wear</span>
          <span>HardWare</span>
          <span>Sex Toys</span>
          <span>Set's</span>
          <span>Air Supply</span>
          <span>Return</span>
          <span>Delivery</span>
          <span></span>
          <span>Items</span>
          <span>Toys</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
