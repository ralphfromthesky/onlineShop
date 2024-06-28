import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const main = (props: any) => {
  return (
    <div className="flex flex-col border-2 border-[red] w-screen h-screen">
      <div>
        <Header />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>{props.children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default main;
