import { useMutation, useQuery } from "@tanstack/react-query";
import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { postData, loginData } from "../../globalFunction/axios";
import AntMessage from "../../antUI/antMessage";


const RegisterForm = () => {
  const [message, setMesage] = useState<string>('')

  const [form, setForm] = useState<any>({
    username: "",
    password: "",
  });

  const { mutate: sendRegister } = useMutation({
    mutationFn: (payload: any) => postData("/api/userRegistration", payload),
    onSuccess: (data) => {
      setMesage(data.data?.content?.error[0]?.msg)
    },
  
    onError: (err: any) => console.log(`err: ${err}`),
  });

  const regiterForm = (e: any) => {
    e.preventDefault();
    // if (form.username === "") {
    //   alert("username is empty");
    //   return;
    // }
    // if (form.password === "") {
    //   alert("password cannot be empty");
    //   return;
    // }
    sendRegister(form);
  };

  return (
    <div className="">
      <div className="px-1 my-[2rem]">
        <form onSubmit={regiterForm}>
          <div className="text-center"></div>
          <div className="mb-2">
            <Input
              placeholder="Username here"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <Input
              placeholder="Type your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div>
            <div className="mt-2">
              <Button type="primary" className="w-full" onClick={regiterForm}>
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
      <AntMessage infoPass={message}/>

    </div>
  );
};

export default RegisterForm;
