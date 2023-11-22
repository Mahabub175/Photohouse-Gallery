import { Button, Input } from "@material-tailwind/react";

export const MailingList = () => {
  return (
    <div className="container mx-auto py-20 mt-20 px-10 md:px-0">
      <div className="text-center">
        <p className="text-6xl font-bold mb-4">Join our Newsletter</p>
        <p>
          Sign up for exclusive content, opportunities, news + plus a few
          surprises.
        </p>
      </div>
      <div className="flex flex-col gap-8  md:mt-10 py-16 md:py-0 items-center">
        <div className="flex flex-col md:flex-row w-full max-w-[800px] mx-auto gap-8">
          <Input
            variant="outlined"
            color="blue"
            type="text"
            label="Full Name"
            nonce={undefined}
            onResize={undefined}
            required
            onResizeCapture={undefined}
          />
          <Input
            variant="outlined"
            type="email"
            color="blue"
            label="Outlined"
            nonce={undefined}
            onResize={undefined}
            required
            onResizeCapture={undefined}
          />
        </div>

        <div className="">
          <Button
            variant="gradient"
            className="text-white text-bold duration-300  px-6"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
