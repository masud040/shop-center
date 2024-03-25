import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <Image
        src="/loading.svg"
        className="animate-spin"
        height={30}
        width={30}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
