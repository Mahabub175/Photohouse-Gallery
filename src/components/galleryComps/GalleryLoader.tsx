import { Skeleton } from "@mui/material";

const GalleryLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto container mt-32 gap-10">
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={400}
      />
    </div>
  );
};

export default GalleryLoader;
