import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import magaSliderStyles from "./magaSlide.module.css";

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
  {/* <div className=" my-10 flex flex-row gap-3 overflow-x-auto scrollbar-hide">
  {magazinesList.map((maga: any) => <img
      src={maga?.image}
      alt="img"
      className="max-w-[25%] max-h-[45vh] rounded-md "
      key={maga?._id} />)} 
      </div>*/}
  return (
    <div className={magaSliderStyles.slider}>
      <div className={magaSliderStyles["slide-track"]}>
        {magazinesList.map((maga: any) => <div className={magaSliderStyles.slide} key={maga?._id}>
          <Link href='/magazines'>
            <a>
              <img
                src={maga?.image}
                alt="img"
                // className="max-w-[25%] max-h-[45vh] rounded-md "
                className="h-[258px] w-[200px] rounded-sm"
              />
            </a>
          </Link>
        </div>)}
      </div>
    </div>
  );
};

export default Magazines;
