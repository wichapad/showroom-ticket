import React from "react";

const shop = () => {
  return (
    <div className="pt-[5rem] pb-[2rem] px-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-screen-2xl mx-auto">
        <div className="shop-container">
          <div>
            <img
            className="shop-image"
            src="https://upload.wikimedia.org/wikipedia/en/b/b0/Yoasobi_-_Idol.png"
            alt=""
          />
          </div>
          <div className="shop-text">
            <h1>Yoasobi</h1>
            <p>Album: Yoru ni Kakeru</p>
          </div>
          <div className="shop-price">
            <p>$29.99 </p>
          </div>
        </div>
        <div className="shop-container">
          <img
            className="shop-image"
            src="https://shopeu.hstyles.co.uk/cdn/shop/products/whiterabbit.png?v=1662118076"
            alt=""
          />
          <div className="shop-text">
            <h1>Harry Style</h1>
            <p>Love On Tour Bunny TV Longsleeve - White</p>
          </div>
          <div className="shop-price">
            <p>$29.99 </p>
          </div>
        </div>
        <div className="shop-container">
          <img
            className="shop-image"
            src="https://e.snmc.io/i/600/s/71735f0d244ec9c5261daedf23b1a85e/8993070/annalynn-a-conversation-with-evil-Cover-Art.jpg"
            alt=""
          />
          <div className="shop-text">
            <h1>Annalynn</h1>
            <p>Album: A Conversation With Evil</p>
          </div>
          <div className="shop-price">
            <p>$29.99 </p>
          </div>
        </div>
        <div className="shop-container">
          <img
            className="shop-image"
            src="https://ryzm.imgix.net/sites/1f46106e-0d50-4f79-8418-1f8e72db18c8/images/608451fa-5d67-452b-bd16-e54dcb963a82?fit=crop&fill=blur&w=800&h=800"
            alt=""
          />
          <div className="shop-text">
            <h1>Coldrain</h1>
            <p>RE:ADMISSION” 80's Crack T-Shirts</p>
          </div>
          <div className="shop-price">
            <p>$29.99 </p>
          </div>
        </div>
        <div className="shop-container">
          <img
            className="shop-image"
            src="https://shop-us.bmthofficial.com/cdn/shop/files/T-shirt.jpg?v=1686329205&width=1000"
            alt=""
          />
          <div className="shop-text">
            <h1>Bring me the horizon</h1>
            <p>Post Human:Next Gen Tee</p>
          </div>
          <div className="shop-price">
            <p>$29.99 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
