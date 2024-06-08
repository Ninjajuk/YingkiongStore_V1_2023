import React from 'react'
import Lightsidebarwithheader from '../AdminDashLayout';
import HomeAdmin from '../HomeAdmin';


const DashboardHomeAdmin = () => {
  return (
    <Lightsidebarwithheader>
      <section 
              style={{
                height: 'calc(100vh - 4rem)',
                // backgroundImage: `url(/img/YINGKIONG.jpg)`,
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat'
              }}
      className="flex items-center justify-center">
        <h1 className=" text-2xl lg:text-5xl font-bold text-purple-800">
          Welcome to YingKiong Store!
        </h1>
        {/* <HomeAdmin/> */}
      </section>
    </Lightsidebarwithheader>
  );
}

export default DashboardHomeAdmin