
import { useState,useEffect  } from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const PromotionBanner=()=>{

  const images=[
    'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80',
    'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-06.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-07-product-05.jpg',

  
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
  


    const imageslider=[
        'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80',
        'https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80',
        'https://cdnstatic.nextias.com/ibt_banner_images/4275570Optional%20foudation%20course%20banner%20%2817%29.jpg'
        ]

    return (
      <>


        <section className="w-full bg-[#cee3d9] ">
          <div className="  ">
            <div className="relative w-full  md:h-[550px] ">
              <img
                src={imageslider[currentImageIndex]}
                className="h-full w-full object-fit "
                style={{ height: "100%", }}
              />
              {/* Left arrow icon */}
              <div
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 ml-4 cursor-pointer transition-background-color duration-300"
              >
                <FaAngleLeft className="w-8 h-8" />
              </div>

              {/* Right arrow icon */}
              <div
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 mr-4 cursor-pointer transition-background-color duration-300"
              >
                <FaAngleRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>



 
      </>
    );
}
export default PromotionBanner;