import axios from "axios";
import { useEffect, useState } from "react";

const Register = (props: { countries: [] }) => {
  const data = [
    {
      field: "firstname",
      type: "text",
      label: "First Name",
    },
    {
      field: "lastname",
      type: "text",
      label: "Last Name",
    },
    {
      field: "email",
      type: "email",
      label: "Email",
    },
    {
      field: "profession",
      type: "text",
      label: "Profession",
    },
    {
      field: "Country",
      type: "text",
      label: "Country",
    },
    {
      field: "Facebook",
      type: "text",
      label: "Facebook",
    },
    {
      field: "Instagram",
      type: "text",
      label: "Instagram",
    },
    {
      field: "Youtube",
      type: "text",
      label: "Youtube",
    },
    {
      field: "Website",
      type: "text",
      label: "Website",
    },
  ];
  // useEffect(() => {
  //   console.log(props.countries);
  // }, [])

  const [userData, setUserData]: any = useState({
    Country: '',
    Facebook: '',
    Instagram: '',
    Website: '',
    Youtube: '',
    email: '',
    firstname: '',
    lastname: '',
    profession: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userData)
  };
  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  };
  // const rnderDiv = (item: { field: string, type: string, label: string }, index: number): any => {  }
  return (
    <main className=" py-12 min-h-[100vh] px-[10%] text-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 md:gap-6">
          {data.slice(0, 3).map((item, index) => (
            <div className="relative z-0 mb-6 w-full group" key={index}>
              <input
                required
                onChange={handleChange}
                value={userData[item.field]}
                type={item.type}
                name={item.field}
                id={item.field}
                className="block py-2.5 px-0 w-full text-md  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                placeholder=" "
              />
              <label
                htmlFor={item.field}
                className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          {data.slice(3, 5).map((item, index) => (
            <div className="relative z-0 mb-6 w-full group" key={index}>
              <input
                required
                onChange={handleChange}
                value={userData[item.field]}
                type={item.type}
                name={item.field}
                id={item.field}
                className="block py-2.5 px-0 w-full text-md  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                placeholder=" "
              />
              <label
                htmlFor={item.field}
                className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2">
          {data.slice(5).map((item, index) => (
            <div className="relative z-0 mb-6 w-full group" key={index}>
              <input
                required
                onChange={handleChange}
                value={userData[item.field]}
                type={item.type}
                name={item.field}
                id={item.field}
                className="block py-2.5 px-0 w-full text-md  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                placeholder=" "
              />
              <label
                htmlFor={item.field}
                className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <button type="submit" className="btn-blue px-12 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Register;

export async function getStaticProps() {
  const countries = await axios.get('https://restcountries.com/v3.1/all').then((response) => {
    return response.data.map((c: any) => { return { name: c.name, flag: c.flags } })
  })
  return {
    props: {
      countries
    }
  }
}
