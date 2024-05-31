import React, {lazy ,} from 'react';
// import ProducList from './componentsProducts/ProducList'

import HeroSection from './componentsProducts/HeroSection';
import FeaturedCategoryPro from './componentsProducts/FeatureCategory';
import ShopByCategory from './componentsProducts/ShopCateogory';
import FruitsVegetables from './componentsProducts/FruitsVegetables';
import ProducList from './componentsProducts/ProducList'
import PromotionBanner from './componentsProducts/PromotionProduct';


const Product = () => {
  


  return (
    <>
      <HeroSection />
      {/* <FeaturedCategoryPro /> */}
      <PromotionBanner/>
      <ShopByCategory />
      <FruitsVegetables />

      <ProducList/>
    </>
  );
}

export default Product