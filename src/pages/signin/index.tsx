/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaEye } from "react-icons/fa";
import { useState } from "react";
import { API_CONTEXT } from "../../utils/GlobalContext";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { signInUser, googleSignIn, facebookSignIn } = useContext(API_CONTEXT);
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const onSubmit = (data: any) => {
    signInUser(data?.email, data?.password).then((result: any) => {
      toast.success("Welcome To Photohouse Magazine!");
      reset();
      router.push("/");
      console.log(result);
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result: any) => {
      toast.success("Welcome To Photohouse Magazine!");
      router.push("/");
      console.log(result);
    });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn().then((result: any) => {
      toast.success("Welcome To Photohouse Magazine!");
      router.push("/");
      console.log(result);
    });
  };

  return (
    <section className="bg-[url('https://i.ibb.co/PNQkmRf/cont.jpg')] bg-cover bg-center h-screen mx-auto flex justify-center items-center px-5 md:px-0">
      <Card
        className="md:w-3/12"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Typography
            variant="h3"
            color="white"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody
            className="flex flex-col gap-4"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <div
                className="flex items-center gap-2 bg-gray-500 px-4 py-3 rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl duration-300"
                onClick={handleFacebookSignIn}
              >
                <FaFacebook className="text-blue-700 text-2xl" />
                <p className="text-white text-bold">Sign In With Facebook</p>
              </div>

              <div
                className="flex items-center gap-2 bg-gray-500 px-7 py-3 rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl duration-300"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle className="text-blue-400 text-xl" />
                <p className="text-white text-bold">Sign In With Google</p>
              </div>
            </div>
            <p className="text-center">Or</p>
            <Input
              label="Email"
              size="lg"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              {...register("email", { required: true })}
              required={true}
              type="email"
            />
            <div className="relative">
              <Input
                label="Password"
                size="lg"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                {...register("password", { required: true })}
                required={true}
                type={showPass ? "text" : "password"}
              />
              <FaEye
                className="absolute top-1/3 right-4"
                onClick={handleShowPass}
              />
            </div>
          </CardBody>
          <CardFooter
            className="pt-0"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Button
              variant="gradient"
              fullWidth
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              type="submit"
            >
              Sign In
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-center"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Don&apos;t have an account?
              <Link href={"/signup"}>
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  Sign Up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default index;
