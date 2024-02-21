import React, {lazy ,} from 'react';
// import ProducList from './componentsProducts/ProducList'
import { Circles } from "react-loader-spinner";
import HeroSection from './componentsProducts/HeroSection';
import FeaturedCategoryPro from './componentsProducts/FeatureCategory';
import ShopByCategory from './componentsProducts/ShopCateogory';
import FruitsVegetables from './componentsProducts/FruitsVegetables';


// const ProducList = React.lazy(() => import('./componentsProducts/ProducList'));
const ProducList = lazy(() => import('./componentsProducts/ProducList'));



const Product = () => {


  return (
    <>
      <HeroSection />
      <FeaturedCategoryPro />
      <ShopByCategory />
      <FruitsVegetables />

      <ProducList />
    </>
  );
}

export default Product