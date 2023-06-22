const News = () => {
  return (
    <div className="w-full my-8">
      {/* item 1 */}
      <div className="flex shadow-lg mx-8 rounded">
        <div className="w-60">
          <img
            className="w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
        <div className="p-4 ">
          <span className="bg-red-600 rounded p-1 text-white">News</span>
          <p className="my-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-500 ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          
          <div className=" mt-16 ">
            <span className="text-sm font-semibold underline cursor-pointer">
              See Detail
            </span>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col"> */}
        {/* item 2 */}
        {/* <div className="flex shadow-lg my-2 mx-2 rounded">
          <div className="w-60">
            <img
              className="w-full h-full object-cover rounded"
              src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
              alt=""
            />
          </div>
          <div className="p-4 ">
            <span className="bg-red-600 rounded p-1 text-white">News</span>
            <p className="my-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className=" mt-16 ">
              <span className="text-sm font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div> */}
        {/* item 3 */}
        {/* <div className="flex  shadow-lg my-2 mx-2 rounded">
          <div className="w-60">
            <img
              className="w-full h-full object-cover rounded"
              src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="bg-red-600 rounded p-1 text-white">News</span>
            <p className="my-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className=" mt-16">
              <span className="text-sm font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div> */}
        {/* item 4 */}
        {/* <div className="flex shadow-lg my-2 mx-2   rounded">
          <div className="w-60">
            <img
              className="w-full h-full object-cover rounded"
              src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="bg-red-600 rounded p-1 text-white">News</span>
            <p className="my-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className=" mt-16">
              <span className="text-sm font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default News;
