import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { base_url } from "../configs";

type ApiData = {
  links: {
    Insta_access_token: string;
  };
};

const API_CONTEXT = createContext<
  { data: ApiData[]; setData: (data: ApiData[]) => void } | undefined
>(undefined);

type GlobalContextProps = {
  children: ReactNode;
};

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${base_url}/all`)
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {
          getData();
        });
    };

    getData();
  }, []);

  const value = {
    data,
    setData,
  };

  return <API_CONTEXT.Provider value={value}>{children}</API_CONTEXT.Provider>;
};

export { API_CONTEXT, GlobalContext as default };
