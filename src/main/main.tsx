import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import AntCarousel from "../antUI/carousel";
import { NotificationOutlined} from "@ant-design/icons";


const Main = (props: any) => {
  return (
    <div className="flex flex-col w-screen h-screen relative">
      <div className="fixed w-full z-10">
        <Header />
      </div>
      <div className="flex mt-[15vh]">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-center w-screen pt-[1rem]">
          <div className="w-[80vw] border-2 border-color-1 h-[80vh] bg-[white]">
            <div className="px-[1rem] pt-[1rem]"><AntCarousel/></div>
            <div className="mx-[1rem] my-[.5rem]"><span><NotificationOutlined className="text-[2rem] text-color-5"/></span><span></span></div>
          <div className="border-2 border-red h-[100vh]"> {props.children}</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
