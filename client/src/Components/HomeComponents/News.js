const News = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4  my-8 mx-16">
      <div className="border-b-2 border-black w-full">
      <span className="text-2xl">Showroom News</span>
      </div>
      {/* item 1 */}
      <div className="relative flex shadow-lg mx-2  md:col-span-2 lg:col-span-3 rounded">
        <div className="w-96 md:w-60 lg:w-60">
          <img
            className=" w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
        <div className="p-4 text-sm">
          <span className="bg-red-600 rounded p-1 text-base text-white">
            News
          </span>

          <p className="text-gray-500 my-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.Lorem Ipsum
          </p>

          <div className="absolute bottom-3">
            <span className=" font-semibold underline cursor-pointer">
              See Detail
            </span>
          </div>
        </div>
      </div>

      {/* item 2 */}
      <div className="relative flex lg:flex-col lg:w-60 shadow-lg mx-2 md:col-span-2 lg:col-span-1  rounded">
        <div className="w-96 md:w-60">
          <img
            className=" w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
        <div className="p-4 text-sm">
          <p className="text-gray-500 my-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.Lorem Ipsum
          </p>
        </div>
      </div>
      {/* item 3 */}
      <div className="relative flex lg:flex-col lg:w-60 shadow-lg mx-2 md:col-span-2 lg:col-span-1  rounded">
        <div className="w-96 md:w-60 ">
          <img
            className=" w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
        <div className="p-4 text-sm">
          <p className="text-gray-500 my-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.Lorem Ipsum
          </p>
        </div>
      </div>
      {/* item 4 */}
      <div className="relative flex lg:flex-col lg:w-60 shadow-lg mx-2 md:col-span-2 lg:col-span-1  rounded">
        <div className="w-96 md:w-60">
          <img
            className=" w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
        <div className="p-4 text-sm">
          <p className="text-gray-500 my-2">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
