import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const main = (props: any) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div>
        <Header />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div  className="flex justify-center w-screen pt-[1rem]">
          <div className="w-[80vw] border-2 border-color-1 h-[80vh] bg-[white]">{props.children}</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default main;
