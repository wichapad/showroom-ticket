// แสดง ข่าวสาร ต่างๆ
const News = () => {
  return (

    <div className="max-w-screen-lg p-4">
      <div className="border-b-2 border-black my-4">
        <span className="text-2xl">Showroom News</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* item 1 */}
        <div className="flex flex-col shadow-lg rounded col-span-full">
          <div className="flex-1">
            <img
              className="object-cover rounded h-72 w-full"
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="p-4 text-sm flex-1">
            <p className="text-gray-500 my-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown.Lorem Ipsum
            </p>

            <div className="">
              <span className="font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-col shadow-lg rounded">
          <div className="flex-1">
            <img
              className="object-cover rounded sm:h-72 lg:h-full w-full"
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="p-4 text-sm flex-1">
            <p className="text-gray-500 my-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown.Lorem Ipsum
            </p>

            <div className="">
              <span className="font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex flex-col shadow-lg rounded">
          <div className="flex-1">
            <img
              className="object-cover rounded sm:h-72 lg:h-full w-full"
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="p-4 text-sm flex-1">
            <p className="text-gray-500 my-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown.Lorem Ipsum
            </p>

            <div className="">
              <span className="font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex flex-col shadow-lg rounded">
          <div className="flex-1">
            <img
              className="object-cover rounded sm:h-72 lg:h-full w-full"
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="p-4 text-sm flex-1">
            <p className="text-gray-500 my-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown.Lorem Ipsum
            </p>

            <div className="">
              <span className="font-semibold underline cursor-pointer">
                See Detail
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default News;
