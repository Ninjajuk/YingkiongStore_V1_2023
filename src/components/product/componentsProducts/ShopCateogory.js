import React from 'react';

const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 min-w-[14rem] max-h-[300px] hover:scale-105 transition duration-700 ease-in-out">
    <div className='w-full h-2/3'>
          <img src={image} alt={title} className="mb-4 rounded-md w-full h-full object-cover" />
    </div>
  
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);



const ShopByCategory = () => {
  const categories = [
    {
      title: 'New Arrival',
      description: 'Explore the latest additions to our collection.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
      text:''
    },
    {
      title: 'Cosmetic',
      description: 'Boost your confidence with Cosmetic for Modern Living',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
      text:'Explore our range of cutting-edge electronics designed to enhance your everyday life. From smart home devices to the latest gadgets, we have the technology you need to stay connected and entertained.'
    },
    {
      title: 'Stationery',
      description: 'Convenient and Essential Stationery Items',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
      text:'Find all your essential grocery items in one place. From pantry staples to household necessities, we have a wide selection of products to make your shopping experience convenient and hassle-free.'
    },
    {
      title: 'Meat',
      description: 'High-Quality Meat for Every Occasion',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg?tr=w-640,q=80',
    //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    text:'Choose from our selection of high-quality meat for all your cooking needs. From tender steaks to succulent roasts, our meat is sourced from trusted suppliers to ensure the best taste and quality.'
    },
  ];

  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="w-full  bg-gray-100 rounded-md px-4">
          <h1 className="text-2xl md:text-4xl font-bold py-4  text-blue-800">
            Shop by Category
          </h1>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
