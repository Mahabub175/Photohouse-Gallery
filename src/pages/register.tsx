import { useRouter } from "next/router";
import { useState } from "react";
import AvatarUpload from "../components/UI/AvatarUpload";
import { base_url } from "../configs";
import { countries } from "../utils/countries";
const Register = () => {
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
      field: "LinkedIn",
      type: "text",
      label: "LinkedIn",
    },
    {
      field: "Website",
      type: "text",
      label: "Website",
    },
  ];
  // useEffect(() => {
  //   console.log(countries);
  //   sessionStorage.setItem('countries', JSON.stringify(countries))
  // }, [])
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
    LinkedIn: '',
    email: '',
    firstname: '',
    lastname: '',
    profession: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userData, JSON.parse(userData.Country)?.name, JSON.parse(userData.Country)?.flag)
    const formData = new FormData()
    formData.append('file', file);
    formData.append('Country', JSON.parse(userData.Country)?.name);
    formData.append('Flag', JSON.parse(userData.Country)?.flag);
    formData.append('Facebook', userData.Facebook);
    formData.append('Instagram', userData.Instagram);
    formData.append('Website', userData.Website);
    formData.append('LinkedIn', userData.LinkedIn);
    formData.append('email', userData.email);
    formData.append('profession', userData.profession);
    formData.append('name', userData.firstname + " " + userData.lastname);
    // console.log(formData);
    setLoading(true)
    fetch(`${base_url}/regn_memeber`, {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        // console.log(data)
        router.push("/members")
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  };
  const handleChange = (e: any) => {
    // console.log(e.target.value)

    setUserData({ ...userData, [e.target.name]: e.target.value })
  };
  return (
    <main className=" py-12 min-h-[100vh] px-[10%] text-xl">
      <form onSubmit={handleSubmit}>
        {/* <AvatarUpload setFile={setFile} /> */}
        <div className="flex justify-center pb-4">
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
                // required
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
              {countries?.sort(function (a: any, b: any) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
              }).map((country: any) => {
                // console.log(country)
                return <option
                  value={JSON.stringify(country)}
                  key={country.name}>
                  {country.name}
                </option>
              })}

            </select>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="btn-blue px-12 rounded-md " disabled={loading}>
            {loading ? <span className="animate-pulse">Loading...</span> : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Register;
