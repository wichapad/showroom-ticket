import logo from "../../../images/showroomlogowhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="slide-bg-image">
      <div className="text-white grid grid-cols-2 sm:gap-4 md:flex justify-around lg:flex lg:justify-between max-w-screen-lg mx-auto">
        <div className="w-48">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </a>
          <div className="mt-4 text-sm text-gray-300">
            <p>
              553/2,Ramintra ,Tha Raeng, Bang Khen, Bangkok, Thailand 32105{" "}
            </p>
            <p className="py-2">Call: 012-345-6789</p>
            <p>Email: showroom@gmail.com</p>
          </div>
        </div>
        <div>
          <h1 className="uppercase">ShowRoom</h1>
          <div className="mt-4 text-sm text-gray-300">
            <p>About Us</p>
            <p className="py-2">Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <div>
          <h1 className="uppercase">Services</h1>
          <div className="mt-4 text-sm text-gray-300">
            <ul >
              <li>
                <Link to="/events">Event</Link>
              </li>
              <li className="py-2">
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <p>News</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="uppercase">Help</h1>
          <div className="mt-4 text-sm text-gray-300">
            <p>Contact Us</p>
            <p className="py-2">Payment Method</p>
            <p>Customer Service</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-6 h-6 ">
            <img
              className="mr-2"
              src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png"
              alt=""
            />
            <img
              className="mr-2"
              src="https://cdn-icons-png.flaticon.com/128/3670/3670089.png"
              alt=""
            />
            <img
              className="mr-2"
              src="https://cdn-icons-png.flaticon.com/128/4494/4494488.png"
              alt=""
            />
            <img
              className="mr-2"
              src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png"
              alt=""
            />
            <img
              className="mr-2"
              src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png"
              alt=""
            />
          </div>
          <div className="mt-4 text-ms text-gray-500">
            <p>Showroom &copy; 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
