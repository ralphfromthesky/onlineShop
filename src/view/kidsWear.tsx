import { useEffect, useState } from "react";
import Main from "../main/main";
import axios from "axios";

const KidsWear = () => {
  const [data, setdata] = useState<any>();

  const getData = async () => {
    try {
      const response = await axios.get("'http://localhost:5000/api/students");

        console.log(response.data)
      
    } catch (error) {console.log(error)}
  };
  useEffect(() => {
    getData()
  }, []);
  return (
    <Main>
      <div className="text-[black]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        consequatur illo repellat facere doloremque perspiciatis numquam
        pariatur rerum qui suscipit sit labore excepturi deleniti veniam maiores
        alias odio vitae enim nemo laudantium natus, necessitatibus recusandae
        dolorum! A exercitationem soluta nemo quis odit, rem voluptatem pariatur
        quidem suscipit repudiandae dolorum, iure reprehenderit cum sint non
        incidunt? Mollitia, hic rerum nihil eos eligendi eum rem! Eum veniam
        amet voluptatibus temporibus soluta? Ducimus molestias quos maxime
        voluptates porro aut doloribus rem. Qui fugiat architecto temporibus ad
        eum minima eligendi animi debitis accusamus! Maiores mollitia, nulla
        enim unde natus fugit saepe earum obcaecati dolorum!

      </div>
    </Main>
  );
};

export default KidsWear;
