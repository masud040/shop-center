const GetTouch = () => {
  return (
    <section class="bg-[#ced3ca] py-5 lg:py-16">
      <div class="w-10/12 lg:w-4/12 mx-auto">
        <h1 class="italic text-xl lg:text-3xl font-serif my-5 text-center">
          Get the inside scoop
        </h1>
        <p class="text-center text-sm lg:text-base">
          Sign up for new product drops, behind-the-scenes content, and monthly
          "5 Things I'm Digging" emails
        </p>
        <form action="#" class="mb-5">
          <input
            type="text"
            class="p-3 mt-10 border border-black focus:outline-none w-full"
            placeholder="Enter your email"
          />
          <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
            See what we're doing
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetTouch;
