import React from 'react'
import PromotionBanner from './PromotionProduct';

const HeroSection = () => {
  return (
    <>
      <div className="w-full">
   
        <div className="w-full flex flex-col lg:flex-row  ">
    
            <div className="mx-auto w-full lg:w-2/5 py-16  lg:py-36 px-4 lg:px-8">
              <div className="lg:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  Discover the <span className="text-purple-800">Art</span> of
                  Shopping
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Welcome to{" "}
                  <span className="text-purple-800 font-bold">
                    YingKiong Store
                  </span>
                  - Where Every Purchase Tells a Story.
                </p>
                <div className="mt-6">
                  <a
                    href="/shop"
                    className="inline-block rounded-md border border-transparent bg-purple-600 py-3 px-8 font-medium text-white hover:bg-purple-700"
                  >
                    Shop Productivity
                  </a>
                </div>
              </div>
            </div>

          <div className="h-48 w-full   lg:h-[42rem] lg:w-3/5">
          <img
            src="/img/YINGKIONG.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          {/* <PromotionBanner/> */}
        </div>
        </div>

      </div>
      {/* <div className="w-full h-[32rem] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full ">
          <div className="mx-auto max-w-2xl py-16 lg:max-w-none lg:py-48 px-4">
            <div className="lg:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                Discover the <span className="text-purple-800">Art</span> of
                Shopping
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Welcome to{" "}
                <span className="text-purple-800 font-bold">
                  YingKiong Store
                </span>
                - Where Every Purchase Tells a Story.
              </p>
              <div className="mt-6">
                <a
                  href="/shop"
                  className="inline-block rounded-md border border-transparent bg-purple-600 py-3 px-8 font-medium text-white hover:bg-purple-700"
                >
                  Shop Productivity
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-64 lg:h-full ">
          <div className="h-full w-full  ">
            <img
              src="/img/YINGKIONG.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HeroSection