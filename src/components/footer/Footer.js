import {footerdata,} from './footerdata'

import { FaWhatsapp,FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-[#eff1f4]  py-4 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
          <div className="flex flex-col md:flex-row  w-full py-2">
            <div className="md:w-2/5  flex flex-col px-2 py-4">
              <div className="mb-4" >
                <h1 className='text-4xl font-bold text-purple-700'>Yingkiong Store</h1>
              </div>
              <div className="mb-4">
                <p>Yingkiong Store was born out of a love for our product and a commitment to what makes our brand unique</p>
              </div>
              <div className="flex "></div>
            </div>

            <div className="md:w-3/5  px-2 py-4">
              <h1 className=' text-2xl font-semibold text-sky-400'>Shop</h1>
              <div className="w-full flex flex-col md:flex-row pl-4 pr-1">
                <div className=" flex flex-col flex-wrap pb-8">
                  <div className="flex flex-wrap">
                    {footerdata.map((item,index) => (
                      <a href={item.href} key={index} className="py-2 w-1/2 md:w-full hover:underline">
                        {item.title}
                      </a>
                    ))}
                  </div>
                  
                </div>
                {/* <div className="flex flex-wrap">
                    {footerdata.map((item,index) => (
                      <a href={item.href} key={index} className="py-2 w-1/2 md:w-full hover:underline">
                        {item.title}
                      </a>
                    ))}
                  </div> */}
             
              </div>
              
            </div>
            <div className="w-full md:w-2/5">
                  <div className="w-full md:px-4">
                    <div>
                      {/* Email subscription form */}
                      <form className="flex flex-col ">
                        <label className="font-medium text-lg">Subscribe for latest updates & offers</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full p-2 border border-gray-300 rounded-l my-2"
                        />
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-800 text-white p-2 rounded-r w-full my-2"
                        >
                          Subscribe
                        </button>
                      </form>
                      <h5 className="my-2 font-bold text-lg">
                        Visit our store
                      </h5>
                      <ul>
                        <li className="mb-8">
                          <span>
                            Bentuk Village Near Baptism Church
                            <br _ngcontent-serverapp-c9="" /> Arunachal Pradesh 
                          </span>
                        </li>
                        <li className="flex items-center ">
                          <span>
                            <img
                              width="12"
                              height="12"
                              alt="call"
                              class="  ng-lazyloaded"
                              src="https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg"
                            />
                          </span>
                          <span
                            _ngcontent-serverapp-c9=""
                            class="footer-text font-14 ms-1 mr_sp ps-1"
                          >
                            7629826114
                          </span>
                        </li>
                        <li className="flex items-center">
                          <img
                            _ngcontent-serverapp-c9=""
                            width="12"
                            height="12"
                            alt="mail"
                            class="  ng-lazyloaded"
                            src="https://cdnstatic.nextias.com/assets/images/icons/email.svg"
                          />
                          <span
                            _ngcontent-serverapp-c9=""
                            class="footer-text font-14 ms-1 mr_sp ps-1"
                          >
                            yingkiongstore@gmail.com
                          </span>
                        </li>
                      </ul>
                      <h5 className="mb-4 font-medium text-lg pt-4">
                        Follow Us here
                      </h5>
                      <div className="flex items-center">
                        <span className="px-2 w-10 h-10 text-2xl  text-green-500">
                          <FaWhatsapp />
                        </span>
                        <span className="px-2 w-10 h-10 text-2xl text-red-700">
                          <FaInstagram />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

          <div className="flex  items-center border-t-2 border-red-500 pt-4"></div>
          <div className='flex items-center justify-center'>
                <ul className='flex'>
                    <li className='px-2 hover:text-blue-400'><a href=''>Terms & Conditions</a></li>
                    <li className='px-2 hover:text-blue-400'><a href=''>Privacy Policy</a></li>
                    <li className='px-2 hover:text-blue-400'><a href=''>Shipping & Payment Policy</a></li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center pt-4'>
              <h1 className=" text-red-700 font-medium py-2"> @ Copyright 2023 Yingkiong Store. All right reserved</h1>
              <h1 className=" text-red-700 font-medium py-2"> Designed by Samsu</h1>
              </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  