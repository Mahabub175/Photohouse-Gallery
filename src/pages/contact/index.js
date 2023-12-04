/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import bgImage from "../../assets/images/cont.jpg";
import { StaticInfo } from "../../components/Contact/StaticInfo";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { MailingList } from "../../components/Contact/MailingList";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useEffect } from "react";

const index = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;

    const templateParam = {
      from_name: data?.name,
      from_email: data?.email,
      to_name: "Photohouse Magazine",
      message: data?.message,
    };

    try {
      emailjs
        .send(serviceId, templateId, templateParam, publicKey)
        .then((res) => {
          toast.success(`Thanks for your message ${templateParam?.from_name}`);
        })
        .error(() => {
          toast.error("Something Went Wrong! Please Try Again");
        });
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  useEffect(() => {
    const formSection = document.getElementById("formSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="pb-20">
      <div className="relative">
        <div className="bg-[url('https://i.ibb.co/PNQkmRf/cont.jpg')] bg-cover bg-center h-[20vh] md:h-screen mx-auto flex justify-center items-center px-5 md:px-0">
          <div className="text-center px-5 md:px-0">
            <p className="text-2xl md:text-[100px] font-bold md:mb-8 font-sans">
              Contact Us
            </p>
            <p className="md:text-bold text-xs md:text-xl">
              Any question or remarks? Just write us a message!
            </p>
          </div>
          <div id="formSection"></div>
        </div>
      </div>
      <div className="-mt-3 md:flex items-center mx-auto bg-white">
        <div className="bg-[#0b0b0b] text-center px-10 py-[95px]">
          <StaticInfo />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex flex-col gap-8 w-full max-w-[550px] mt-20 md:mt-0 pb-10 md:py-10 px-10 md:px-0"
        >
          <Input
            {...register("name", { required: true })}
            variant="standard"
            type="text"
            label="Full Name"
            required
          />

          <Input
            {...register("email", { required: true })}
            variant="standard"
            type="email"
            label="Email"
            required
          />

          <Textarea
            {...register("message", { required: true })}
            variant="standard"
            label="Message"
            required
          />

          <div className="flex justify-end mt-4">
            <Button
              type="submit"
              variant="outlined"
              className="hover:bg-black hover:text-white text-bold duration-300 text-black"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      {/* <MailingList /> */}
    </section>
  );
};

export default index;
