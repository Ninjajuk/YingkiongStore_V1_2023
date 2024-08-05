import React from 'react'
import Lightsidebarwithheader from '../AdminDashLayout';
import HomeAdmin from '../HomeAdmin';


const DashboardHomeAdmin = () => {
  return (
    <Lightsidebarwithheader>
      <section
        style={{
          height: "calc(100vh - 4rem)",
          // backgroundImage: `url(/img/YINGKIONG.jpg)`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat'
        }}
        className="flex flex-col"
      >
        {/* <HomeAdmin/> */}
        <div className='w-full h-2/5 '>
          <h1 className=" text-lg lg:text-5xl font-bold text-purple-800 text-center">
            Welcome to YingKiong Store!
          </h1>
        </div>
        <div className='w-full lg:h-3/5 '></div>
      </section>
    </Lightsidebarwithheader>
  );
}

export default DashboardHomeAdmin