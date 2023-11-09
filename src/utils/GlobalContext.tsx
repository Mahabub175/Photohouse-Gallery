import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { base_url } from "../configs";

type ApiData = {
  links: {
    Insta_access_token: string;
  };
};

interface ApiContextInterface {
  data: ApiData[];
  setData: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

const API_CONTEXT = createContext<ApiContextInterface | undefined>(undefined);

type GlobalContextProps = {
  children: ReactNode;
};

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/all`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        await fetchData();
      }
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const contextValue: ApiContextInterface = {
    data,
    setData,
  };

  return (
    <API_CONTEXT.Provider value={contextValue}>{children}</API_CONTEXT.Provider>
  );
};

export { API_CONTEXT, GlobalContext as default };
