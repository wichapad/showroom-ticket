import React from "react";

const NewsHome = () => {
  return (
    <div className=" w-full">
      <div className="mt-4 mx-4">
        <span className="text-2xl border-b-2 border-gray-900">
          Showroom News
        </span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-12">
          {/* item 1 */}
          <div className="shadow-lg rounded md:col-span-4 lg:col-span-6 row-span-3">
            <div className="">
              <img
                className="object-cover rounded w-full"
                src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="p-2 text-sm">
              <p className="text-gray-500 my-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.Lorem Ipsum
              </p>

              <div className="">
                <span className="font-semibold underline cursor-pointer">
                  See Detail
                </span>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="shadow-lg rounded flex md:block col-span-2 lg:col-span-3">
            <div className="w-80 md:w-full">
              <img
                className="object-cover rounded w-full"
                src="https://images.unsplash.com/photo-1504242425842-802eea352df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="p-2 text-sm md:p-4">
              <p className="text-gray-500 ">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.Lorem Ipsum
              </p>

              <div className="">
                <span className="font-semibold underline cursor-pointer">
                  See Detail
                </span>
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className=" shadow-lg rounded flex md:block col-span-2 lg:col-span-3">
            <div className="w-80 md:w-full">
              <img
                className="object-cover rounded  w-full"
                src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt=""
              />
            </div>
            <div className="p-2 text-sm md:p-4">
              <p className="text-gray-500 ">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.Lorem Ipsum
              </p>

              <div className="">
                <span className="font-semibold underline cursor-pointer">
                  See Detail
                </span>
              </div>
            </div>
          </div>

          {/* item 4 */}
          <div className="shadow-lg rounded flex md:block col-span-2 lg:col-span-3">
            <div className="w-80 md:w-full">
              <img
                className="object-cover rounded  w-full"
                src="https://images.unsplash.com/photo-1501527410-63b3b08336a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="p-2 text-sm md:p-4">
              <p className="text-gray-500 ">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.Lorem Ipsum
              </p>

              <div className="">
                <span className="font-semibold underline cursor-pointer">
                  See Detail
                </span>
              </div>
            </div>
          </div>
          {/* item 5 */}
          <div className="shadow-lg rounded flex md:block col-span-2 lg:col-span-3">
            <div className="w-80 md:w-full">
              <img
                className="object-cover rounded  w-full"
                src="https://images.unsplash.com/photo-1567593810070-7a3d471af022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </div>
            <div className="p-2 text-sm md:p-4">
              <p className="text-gray-500">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.Lorem Ipsum
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
    </div>
  );
};

export default NewsHome;
