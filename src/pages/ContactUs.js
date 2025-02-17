import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Navbar1 from '../components/Navbar/NavbarDark';
import Footer1 from '../components/footer/Footer1';
import { Circles } from 'react-loader-spinner';
import useLoading from '../customhooks/Loading';
import HeaderScrollingInfinite from '../components/Navbar/HeaderTopInfiniteScroll';

const ContactUs = () => {
  const loading = useLoading();
  return (
    <>
      <HeaderScrollingInfinite />
      <Navbar1 />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <Circles height="80" width="80" color="#7b09e7" ariaLabel="circles-loading" visible={true} />
        </div>
      ) : (
        <section className="w-full bg-gray-100 py-12 px-6 md:px-12">
          <div className="mx-auto max-w-3xl lg:max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-12">
            <h1 className="text-2xl font-extrabold text-purple-800 text-center mb-6">Product Support & Queries</h1>
            <div className="flex flex-col items-center text-center space-y-4">
              <p className="text-gray-600 text-lg font-medium">Contact Us</p>
              <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <a href="tel:+917629826114" className="text-blue-600 hover:text-blue-800">7629826114</a>
              </h2>
              <p className="text-lg font-medium flex items-center gap-2">
                <FaEnvelope className="text-red-600" />
                <a href="mailto:yingkiongstore@gmail.com" className="text-gray-600 hover:text-gray-800">yingkiongstore@gmail.com</a>
              </p>
              <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
                <FaWhatsapp className="text-green-600" />
                <a href="https://wa.me/917629826114" className="text-blue-600 hover:text-blue-800">WhatsApp</a>
              </h2>
              <div className="text-gray-600 text-sm">
                <p>Bentuk Village, Near Baptism Church</p>
                <p>Arunachal Pradesh</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer1 />
    </>
  );
};

export default ContactUs;
