const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between w-11/12 py-10 mx-auto lg:w-10/12 lg:py-16">
      <div className="w-6/12 lg:w-3/12">
        <p>Customer Service</p>
        <button className="block mt-2">Help/FAQ</button>
        <button className="block mt-2">Returns & Exchanges</button>
        <button className="block mt-2">Sizing</button>
        <button className="block mt-2">Gift Cards</button>
        <button className="block mt-2">Contact Us</button>
      </div>
      <div className="w-6/12 lg:w-3/12">
        <p>Customer Service</p>
        <button className="block mt-2">Help/FAQ</button>
        <button className="block mt-2">Returns & Exchanges</button>
        <button className="block mt-2">Sizing</button>
        <button className="block mt-2">Gift Cards</button>
        <button className="block mt-2">Contact Us</button>
      </div>
      <div className="w-full mt-10 lg:w-6/12 lg:mt-1">
        <div className="flex items-center justify-end gap-5">
          <div className="lg:w-[250px]">
            <span className="block text-center lg:text-right">
              © LWS Shop Center 2024
            </span>
            <p className="mt-2 text-center lg:text-right">
              All images and content may not be used without permission
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
