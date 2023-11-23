import { Button, Input } from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
}

export const MailingList: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const serviceId: any = process.env.NEXT_PUBLIC_SERVICEID;
    const templateId: any = process.env.NEXT_PUBLIC_SECOND_TEMPLATEID;
    const publicKey: any = process.env.NEXT_PUBLIC_PUBLICKEY;

    const templateParam = {
      from_name: data?.name,
      from_email: data?.email,
      to_name: "Photohouse Magazine",
    };

    try {
      emailjs
        .send(serviceId, templateId, templateParam, publicKey)
        .then((res) => {
          toast.success(
            `Welcome to our Newsletter ${templateParam?.from_name}`
          );
        })
        .catch(() => {
          toast.error("Something Went Wrong! Please Try Again");
        });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div className="container mx-auto py-10 mt-20 px-10 md:px-0">
      <div className="text-center">
        <p className="text-6xl font-bold mb-4">Join our Newsletter</p>
        <p>
          Sign up for exclusive content, opportunities, news + plus a few
          surprises.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8  md:mt-10 py-16 md:py-0 items-center"
      >
        <div className="flex flex-col md:flex-row w-full max-w-[800px] mx-auto gap-8">
          <Input
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            {...register("name", { required: true })}
            variant="outlined"
            color="blue"
            type="text"
            label="Full Name"
            required
          />
          <Input
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            {...register("email", { required: true })}
            variant="outlined"
            type="email"
            color="blue"
            label="Email"
            required
          />
        </div>

        <div className="">
          <Button
            type="submit"
            variant="gradient"
            className="text-white text-bold duration-300  px-6"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
