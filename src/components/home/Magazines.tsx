import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Magazines: FC = () => {
  const [magazinesList, setmagazinesList]: any[] = useState([])
  useEffect(() => {
    const getData = async () => {
      await axios.get('https://api.photohousemagazine.com/magazines')
        .then((response) => { setmagazinesList(response.data.reverse()) })
        .catch((err) => { getData() })
    }
    getData()
  }, [])
  return (
    <div className=" my-10 flex flex-row gap-3 overflow-x-auto scrollbar-hide">
      {magazinesList.map((maga: any) => <img
        src={maga?.image}
        alt="img"
        className="max-w-[25%] max-h-[45vh] rounded-md "
        key={maga?._id} />)}
    </div>
  );
};

export default Magazines;
