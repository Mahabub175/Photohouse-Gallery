/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import bgImage from "../../assets/images/contact-2.jpg";
import { StaticInfo } from "../../components/Contact/StaticInfo";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { MailingList } from "../../components/Contact/MailingList";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
  return (
    <section className="pb-20">
      <div className="relative">
        <Image src={bgImage} alt="Contact Banner" height={900} />
        <div className="md:mt-20 mb-20 text-2xl text-center px-5 md:px-0 mx-auto">
          <p className="md:text-7xl font-bold mb-4 font-sans">Contact Us</p>
          <p className="text-bold text-xs md:text-xl">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>
      <div className="md:flex items-center container mx-auto bg-white mt-20 rounded-lg">
        <div className="bg-black text-center py-32 px-10 rounded-lg relative">
          <StaticInfo />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex flex-col gap-8 w-full max-w-[350px] mt-20 md:mt-0 py-16 md:py-0"
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
      <MailingList />
    </section>
  );
};

export default index;
