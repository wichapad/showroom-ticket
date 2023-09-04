import React from "react";


const shop = () => {
  return (
    <div className="flex justify-center pt-[5rem] pb-[2rem]">
      <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-white rounded-lg shadow bg-gray-800 ">
          <img
            className="rounded w-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/en/b/b0/Yoasobi_-_Idol.png"
            alt=""
          />
          <div className="p-5 text-white">
            <p className="text-gray-500">Albums</p>
            <h1>Yoasobi</h1>
            <p className="py-2">Album: Yoru ni Kakeru</p>
            <p>29.99 $</p>
            <div className="pt-2 text-center">
              <button className="w-full uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-lg shadow bg-gray-800">
          <img
            className=" rounded w-full object-cover"
            src="https://shopeu.hstyles.co.uk/cdn/shop/products/whiterabbit.png?v=1662118076"
            alt=""
          />
          <div className="p-5 text-white">
            <p className="text-gray-500">T-shirt</p>
            <h1>Harry Style</h1>
            <p className="py-2">Love On Tour Bunny TV Longsleeve - White</p>
            <p>60.00 $</p>
            <div className="pt-2 text-center">
              <button className="w-full uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-lg shadow bg-gray-800">
          <img
            className="rounded w-full object-cover"
            src="https://e.snmc.io/i/600/s/71735f0d244ec9c5261daedf23b1a85e/8993070/annalynn-a-conversation-with-evil-Cover-Art.jpg"
            alt=""
          />
          <div className="p-5 text-white">
            <p className="text-gray-500">Albums</p>
            <h1>Annalynn</h1>
            <p className="py-2">Album: A Conversation With Evil</p>
            <p>29.99 $</p>
            <div className="pt-2 text-center">
              <button className="w-full uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-lg shadow bg-gray-800">
          <img
            className="rounded w-full object-cover"
            src="https://ryzm.imgix.net/sites/1f46106e-0d50-4f79-8418-1f8e72db18c8/images/608451fa-5d67-452b-bd16-e54dcb963a82?fit=crop&fill=blur&w=800&h=800"
            alt=""
          />
          <div className="p-5 text-white">
            <p className="text-gray-500">T-shirt</p>
            <h1>Coldrain</h1>
            <p className="py-2">RE:ADMISSION” 80's Crack T-Shirts</p>
            <p>31.99 $</p>
            <div className="pt-2 text-center">
              <button className="w-full uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-lg shadow bg-gray-800">
          <img
            className="rounded w-full object-cover"
            src="https://shop-us.bmthofficial.com/cdn/shop/files/T-shirt.jpg?v=1686329205&width=1000"
            alt=""
          />
          <div className="p-5 text-white">
            <p className="text-gray-500">T-shirt</p>
            <h1>Bring me the horizon</h1>
            <p className="py-2">Post Human:Next Gen Tee</p>
            <p>30.00 $</p>
            <div className="pt-2 text-center">
              <button className="w-full uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
