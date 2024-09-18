import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Input } from "antd";
import AntModal from "../antUI/antModal";
import LoginForm from "./form/loginForm";
import RegisterForm from "./form/registerForm";
import { useLogOut, axiosGet } from "../globalFunction/axios";
import { useQuery } from "@tanstack/react-query";


const Header = () => {
  const [openRegister, setRegister] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const closedLogin = () => {
    setOpenLogin(false);
  };

  const closedRegister = () => {
    setRegister(false)
  }

  const { refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => axiosGet("/api/userInformation"),
    select: (data) => {
      console.log(data);
     
    },

  });

 
  return (
    <div>
      <div className="flex bg-color-1 h-[8rem] justify-center items-cente w-[]">
        <div className=" w-[80vw] p-[.5rem]">
          <div className="flex justify-between">
            <div className="flex gap-[.5rem]"></div>
            <div className="flex gap-[.5rem]"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" flex items-center text-[1.5rem] font-size[10rem]">
              Online Shoes shop 
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
            <div className="flex gap-2">
              <span onClick={() => setOpenLogin(true)}>
                {/* <UserAddOutlined className="text-[2rem]"/> */}
                <Button>Log in </Button>
              </span>
              <span onClick={() => setRegister(true)}>
                <Button>Register </Button>
              </span>
              <span >
                <Button onClick={() => refetch()}>Log out </Button>
              </span>

            </div>
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
        bukasOpen={openLogin}
        newTitle="Login"
        sarado={closedLogin}
        componentPass={<LoginForm />}
      />
      <AntModal
        bukasOpen={openRegister}
        newTitle="Register form"
        sarado={closedRegister}
        componentPass={<RegisterForm />}
      />
    </div>
  );
};

export default Header;
