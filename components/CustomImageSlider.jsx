"use client";
import Image from "next/image";
import { useState } from "react";

const CustomImageSlider = ({ thumbnail, images }) => {
  const [thumbnailImage, setThumbnailImage] = useState(thumbnail);

  return (
    <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
      <Image
        src={thumbnailImage}
        width={400}
        height={400}
        className="w-[400px] h-[500px] object-cover mx-auto "
        alt=""
      />

      <div className="flex gap-4 mt-4">
        {images?.map((imageURL) => (
          <Image
            key={imageURL}
            src={imageURL}
            width={100}
            height={100}
            onClick={() => setThumbnailImage(imageURL)}
            className={`${
              thumbnailImage === imageURL &&
              "border-2 border-indigo-600 p-0.5 rounded-md"
            } w-[100px]  h-[100px] mx-auto border object-cover`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default CustomImageSlider;
