import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined, UserAddOutlined} from "@ant-design/icons";
import { Input } from "antd";
import AntModal from "../antUI/antModal";
import SignInForm from "./form/signInForm";




const Header = () => {
const [openModal, setOpenModal] = useState<boolean>(false)
const closedModal = () => {
  setOpenModal(false)
}
 
  return (
    <div>
      <div className="flex bg-color-1 h-[8rem] justify-center items-cente w-[]">
        <div className=" w-[80vw] p-[.5rem]">
          <div className="flex justify-between">
            <div className="flex gap-[.5rem]">
          
            </div>
            <div className="flex gap-[.5rem]">
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" flex items-center text-[1.5rem] font-size[10rem]">
              Online Shoes shop ni Gogo Rigor
            </div>
            <span className="relative">
              <Input className="w-[50rem] h-[3rem]" />
              <Button
                type="primary"
                icon={<SearchOutlined />}
                className="bg-color-5 absolute top-[.5rem] right-[.8rem]"
              >
                Search
              </Button>
            </span>
            <span className="w-[20rem] flex justify-end gap-3" onClick={()=> setOpenModal(true)}>
            <UserAddOutlined className="text-[2rem]"/>

            </span>
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
      
        </div>
      </div>
      <AntModal
      bukasOpen={openModal}
      newTitle = "sign up"
      sarado={closedModal}
      componentPass={<SignInForm/>}
      />
    </div>
  );
};

export default Header;
