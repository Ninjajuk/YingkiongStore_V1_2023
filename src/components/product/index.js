import React, {lazy ,} from 'react';
// import ProducList from './componentsProducts/ProducList'

import HeroSection from './componentsProducts/HeroSection';
import FeaturedCategoryPro from './componentsProducts/FeatureCategory';
import ShopByCategory from './componentsProducts/ShopCateogory';

import ProducList from './componentsProducts/ProducList'
import PromotionBanner from './componentsProducts/PromotionProduct';
import Incentive from './componentsProducts/Incentive';

import Fruits from './section/Fruits';
import Vegetables from './section/Vegetables';
import Local_Items from './section/Local_item';
import Foods from './section/Foods';


const Product = () => {
  


  return (
    <>
      <HeroSection />
      {/* <FeaturedCategoryPro /> */}
   
      <PromotionBanner/>
       <Incentive/>
      {/* <ShopByCategory /> */}
      <Vegetables/>
      <Fruits />
      <Local_Items/>
      <Foods/>

      <ProducList/>
    </>
  );
}

export default Product