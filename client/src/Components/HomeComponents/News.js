// แสดง ข่าวสาร ต่างๆ
const News = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="my-4 mx-4">
        <span className="text-2xl">Showroom News</span>
      </div>
      <div className="flex justify-center p-4">
        <div className="max-w-screen-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* item 1 */}
            <div className="flex flex-col shadow-lg rounded  col-span-full">
              <div className="flex-1">
                <img
                  className="object-cover rounded h-72 w-full"
                  src="https://static.euronews.com/articles/stories/07/20/94/68/773x435_cmsv2_853c1552-18e0-5511-8eb9-acb5a9b089a0-7209468.jpg"
                  alt=""
                />
              </div>
              <div className="p-4 text-sm flex-1">
                <p className="text-gray-900 my-2">
                  Bad Blood: The Taylor Swift Ticketmaster fiasco gets political
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
                  src="https://static.euronews.com/articles/stories/06/21/49/36/773x435_cmsv2_54522c06-3fcc-5bcf-bf2b-d356a051a7f9-6214936.jpg"
                  alt=""
                />
              </div>
              <div className="p-4 text-sm flex-1">
                <p className="text-gray-500 my-2">
                  Astroworld: How could the crowd surge have been prevented?
                  Euronews talks to the safety experts
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
                  src="https://static.euronews.com/articles/stories/06/18/39/70/773x435_cmsv2_ed109f06-3010-5866-834b-a980a6e340d9-6183970.jpg"
                  alt=""
                />
              </div>
              <div className="p-4 text-sm flex-1">
                <p className="text-gray-500 my-2">
                  Under new guidance, crowd surfing will not be permitted and
                  nightclub goers must form a socially distanced queue to buy
                  drinks.
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
    </div>
  );
};

export default News;
