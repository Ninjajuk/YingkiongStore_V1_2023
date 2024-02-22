import React from 'react'

import Lightsidebarwithheader from '../componentsAdmin/AdminDashLayout';
import CustomersPage from './page';

const Customers = () => {
  return (
    <>
      <Lightsidebarwithheader>
       <CustomersPage/>
      </Lightsidebarwithheader>
    </>
  );
}

export default Customers