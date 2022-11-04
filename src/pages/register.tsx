import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Camera } from "react-feather";

const Register = (props: { countries: [] }) => {
  const router = useRouter();

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
    // {
    //   field: "Country",
    //   type: "text",
    //   label: "Country",
    // },
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
  useEffect(() => {
    console.log(props.countries);
  }, [])
  const [file, setFile]: any = useState(null);
  const [Preview, setPreview]: any = useState("");
  const [loading, setLoading]: any = useState(false);
  const handleFile = (e: any) => {
    const newfile = e.target.files[0];
    if (newfile) {
      setPreview(URL.createObjectURL(newfile))
      setFile(newfile);
    }
  }
  const [userData, setUserData]: any = useState({
    Country: 'Afganistan',
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
    // console.log(userData)
    const formData = new FormData()
    formData.append('file', file);
    formData.append('Country', userData.Country);
    formData.append('Facebook', userData.Facebook);
    formData.append('Instagram', userData.Instagram);
    formData.append('Website', userData.Website);
    formData.append('Youtube', userData.Youtube);
    formData.append('email', userData.email);
    formData.append('profession', userData.profession);
    formData.append('name', userData.firstname + " " + userData.lastname);
    console.log(formData);
    setLoading(true)
    fetch('https://api.photohousemagazine.com/regn_memeber', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        router.push("/members")
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  };
  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  };
  // const rnderDiv = (item: { field: string, type: string, label: string }, index: number): any => {  }
  return (
    <main className=" py-12 min-h-[100vh] px-[10%] text-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center pb-4">
          <div className="relative w-[100px]">
            <input onChange={handleFile} type="file" className="cursor-pointer h-[100px] w-[100px] opacity-0 relative z-10" id="photo" name="photo" required />
            <div className="border-dashed border-2 border-gray-300 h-[100px] w-[100px] rounded-full mt-[-100px] ">
              {!Preview ? <Camera color="whitesmoke" size={40} className='m-auto mt-[25%]' /> : <Image
                priority
                src={Preview}
                width={100}
                height={100}
                alt="image"
                className={`rounded-full shadow-lg `}
              />}
            </div>
          </div>

        </div>
        <div className="grid md:grid-cols-2 md:gap-6 gap-2">
          {data.slice(0, 4).map((item, index) => (
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
          {data.slice(4).map((item, index) => (
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
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
          <div>
            <label htmlFor="Country" className="block mb-2 text-sm font-mediumtext-gray-400">Select your country</label>
            <select
              id="Country"
              name="Country"
              onChange={handleChange}
              className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            >
              {props.countries.map((country: any) => country.name.common).sort().map((name: string) => <option
                value={name}
                key={name}>
                {name}
              </option>)}

            </select>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="btn-blue px-12 rounded-md" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
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
