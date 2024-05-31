
import { useState,useEffect  } from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import './style.css'
const PromotionBanner=()=>{

  const images=[
    '/img/slide1.jpg',
    '/img/slide2.jpg',
    '/img/slide3.jpg',

  ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === 0) {
          return images.length - 1;  // If at the first image, cycle to the last image
        } else {
          return prevIndex - 1;
        }
      });
    };
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNextImage();
      }, 2000); // Adjust the interval time (in milliseconds) as needed
  
      return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, [currentImageIndex]);
  

    return (
      <>


        <section className="w-full bg-white ">
        <h1 className="text-3xl text-center py-6 font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
                  Rich<span className="text-purple-800"> Cultural Heritage</span> of
                  YingKiong
                </h1>
          <div className=" py-4 ">
            <div className="relative w-full h-48 sm:h-64 lg:h-[32rem] overflow-hidden flex justify-center">
              <img
                src={images[currentImageIndex]}
                className="h-full max-w-full object-center  object-fill sm:object-cover "
                // height="500" width="500"
              />
              {/* Left arrow icon */}
              <div
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 sm:ml-4  cursor-pointer transition-background-color duration-300"
              >
                <FaAngleLeft className="w-8 h-8" />
              </div>

              {/* Right arrow icon */}
              <div
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 sm:mr-4 cursor-pointer transition-background-color duration-300"
              >
                <FaAngleRight className="w-8 h-8" />
              </div>
            </div>
          </div>
          {/* <div className="relative w-full aspect-ratio">
    <img
      src={imageslider[currentImageIndex]}
      alt="Slider"
    />

    <div
      onClick={handlePrevImage}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 cursor-pointer transition-background-color duration-300"
    >
      <FaAngleLeft className="w-8 h-8" />
    </div>


    <div
      onClick={handleNextImage}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 cursor-pointer transition-background-color duration-300"
    >
      <FaAngleRight className="w-8 h-8" />
    </div>
  </div> */}
        </section>



 
      </>
    );
}
export default PromotionBanner;