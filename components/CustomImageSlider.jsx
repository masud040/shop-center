import Image from "next/image";

const CustomImageSlider = () => {
  return (
    <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
      <Image
        src="/iphone.jpg"
        width={400}
        height={400}
        className="object-cover mx-auto "
        alt=""
      />

      <div className="flex gap-4 mt-4">
        <Image
          src="/iphone.jpg"
          width={100}
          height={100}
          className="w-[100px] h-[100px] mx-auto border object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomImageSlider;
