import React from 'react'

const HeroSection = () => {
  return (
    <>
                  <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
            <div aria-hidden="true" className="bg-gray-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 lg:max-w-none lg:py-48">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    Discover the Art of Shopping
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                    Welcome to YingKiong Store- Where Every Purchase Tells a Story
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
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
    </>
  )
}

export default HeroSection