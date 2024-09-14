
import React from 'react';
import Navbar1 from '../components/Navbar/NavbarDark';
import Footer1 from '../components/footer/Footer1';
import { Circles } from "react-loader-spinner";
import useLoading from '../customhooks/Loading';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/cartSliceasyn';
import HeaderScrollingInfinite from '../components/Navbar/HeaderTopInfiniteScroll'


const Card = ({ title, content,listItems,bgcolor }) => (
  <div className={` ${bgcolor} p-6 rounded-lg shadow-md mb-6`}>
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
    {listItems ? (
      <ul className="list-disc ml-8 text-gray-700">
        {listItems.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700">{content}</p>
    )}
  </div>
);

const AboutUs = () => {

  const items=useSelector((state)=>state.cart.items)
  // console.log(items,"Items from the cart in about us page console")
  const loading = useLoading();


  return (
    <>
    <HeaderScrollingInfinite/>
    <Navbar1/>
    {loading ? (
       <div className="flex items-center justify-center h-screen">    <Circles
       height="80"
       width="80"
       color="#7b09e7"
       ariaLabel="circles-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       /></div>

    ):(
    <section className='mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8'>
          <div className="  rounded-md">
      <h1 className="text-4xl font-bold mb-8  text-purple-800">About Us</h1>
   



      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
        <Card
          title="Our Story"
          content="Founded in 2024, Yingkiong Store was born out of a love for our product and a commitment to what makes our brand unique. What started as a small idea has now grown into a  thriving community of our customer base who share our passion."
          bgcolor='bg-yellow-400'
        />

        <Card
          title="Our Mission"
          bgcolor='bg-green-400'
          content="At Yingkiong Store, our mission is to make our product better. We believe in  core beliefs, and every product we offer is a reflection of that commitment. We strive to excel in every aspect of our business."
        />
      </div>
    </div>

    </section>
    )}

    <Footer1/>
    </>
    

  );
};

export default AboutUs;
