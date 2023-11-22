/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import bgImage from "../../assets/images/Contact-Banner.jpg";
import { StaticInfo } from "../../components/Contact/StaticInfo";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { MailingList } from "../../components/Contact/MailingList";

const index = () => {
  return (
    <section className="pb-20">
      <div className="relative">
        <Image src={bgImage} alt="Contact Banner" height={800} />
        <div className="absolute mt-4 md:mt-0 text-2xl top-4 md:top-1/2 left-1/2 text-center px-5 md:px-0">
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
        <div className="mx-auto flex flex-col gap-8 w-full max-w-[350px] mt-20 md:mt-0 py-16 md:py-0">
          <Input variant="standard" type="text" label="Full Name" required />
          <Input variant="standard" type="email" label="Email" required />
          <Textarea variant="standard" label="Message" required />
          <div className="flex justify-end mt-4">
            <Button
              variant="outlined"
              className="hover:bg-black hover:text-white text-bold duration-300 text-black"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
      <MailingList />
    </section>
  );
};

export default index;
