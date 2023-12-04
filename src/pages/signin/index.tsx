import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <section className="flex justify-center items-center">
      <Card
        className="w-96"
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
        <CardBody
          className="flex flex-col gap-4"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Input
            label="Email"
            size="lg"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
          <Input
            label="Password"
            size="lg"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
          <div className="-ml-2.5">
            <Checkbox
              label="Remember Me"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
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
      </Card>
    </section>
  );
};

export default index;
