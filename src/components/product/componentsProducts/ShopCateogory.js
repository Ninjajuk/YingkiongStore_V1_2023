import React from 'react';

const CategoryCard = ({ title, description, image,  }) => (
  <div   className="bg-white cursor-pointer p-6 rounded-lg shadow-md mb-6 min-w-[14rem] max-h-[300px] hover:scale-105 transition duration-700 ease-in-out">
    <div className='w-full h-2/3'>
          <img src={image} alt={title} className="mb-4 rounded-md w-full h-full object-cover" />
    </div>
  
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ShopByCategory = ({ onSelectCategory   }) => {
  const categories = [
    {
      title: 'Local Items',
      description: 'Explore the special additions of Arunachal',
      image: '/img/LocalItems.jpg',
      text:''
    },
    {
      title: 'Food',
      description: 'Our tasty rich cultural foods',
      image: '/img/Food.jpg',
      text:'Explore our range of cutting-edge electronics designed to enhance your everyday life. From smart home devices to the latest gadgets, we have the technology you need to stay connected and entertained.'
    },
    {
      title: 'Fruits',
      description: 'Find fresh and wide variety of juicy and delicious fruits.',
      image: '/img/fruits.jpg',
      text:'Find all your essential grocery items in one place. From pantry staples to household necessities, we have a wide selection of products to make your shopping experience convenient and hassle-free.'
    },
    {
      title: 'Meat',
      description: 'High-Quality Meat for Every Occasion',
      image: '/img/meat.png',
    text:'Choose from our selection of high-quality meat for all your cooking needs. From tender steaks to succulent roasts, our meat is sourced from trusted suppliers to ensure the best taste and quality.'
    },
  ];

  return (
    <section className="w-full bg-gray-100 m-0">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="w-full  bg-gray-100 rounded-md px-4">
          <h1 className="text-xl lg:text-2xl font-bold py-4 px-2 text-purple-800">
            Shop by Category
          </h1>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} onClick={onSelectCategory } />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
