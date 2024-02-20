import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import TestProducList from "./componentsProducts/TestProductList";



const TestProduct = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(null);
  const [index, setIndex] = useState(1);

  // const fetchData = useCallback(async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.get(`http://localhost:8000/products?offset=${index *10}&limit=12`);
  //     const data = response.data.products;
  //     console.log(response.data.products,'http://localhost:8000/products?offset=${index *10}&limit=12')

  //       setItems((prevItems) => [...prevItems, ...data]);
     
  //   } catch (error) {
  //     console.error('Error fetching products:', error)
  //   } 
  //   setIndex((prevIndex) => prevIndex + 1);
  //   setIsLoading(false);
  // }, [index,isLoading]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/products?offset=1&limit=12`
      );
      setItems(prevItems => [...prevItems, ...response.data.products]);
      setHasMore(response.data.hasMore);
      console.log('first ', response.data.hasMore);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []); 

  useEffect(() => {
    getData();
  }, [getData]); 

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } =
  //       document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight - 20) {
  //       console.log(fetchData());
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasMore]);


  return (
    <>

      {
    <div className='container'>
    <div className='row'>
      {items.map((item) => (
        <TestProducList data={items} key={item.id} />
      ))}
    </div>
    {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <Circles
            height="80"
            width="80"
            color="#7b09e7"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
  </div>
      }

{!hasMore && items.length > 0 && <div>No more products to load</div>}
    </>
  );
}

export default TestProduct

// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import { Circles } from "react-loader-spinner";
// import TestProducList from "./componentsProducts/TestProductList";
// import InfiniteScroll from "react-infinite-scroll-component";


// const TestProduct = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [index, setIndex] = useState(1);

//   useEffect(() => {
//     axios
//       // .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=12")
//       .get("http://localhost:8000/products?offset=1&limit=12")
//       .then((res) => {setItems(res.data.products)
//         console.log(res.data.products)
//         setIndex((prevIndex) => prevIndex + 1);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const fetchMoreData = () => {
//     axios

//       .get(`http://localhost:8000/products?offset=${index}0&limit=12`)
//       .then((res) => {
//         setItems((prevItems) => [...prevItems, ...res.data.products]);
//         console.log( res.data.products.length )

//         res.data.products.length > 0 ? setHasMore(true) : setHasMore(false);
//       })
//       .catch((err) => console.log(err));

//     setIndex((prevIndex) => prevIndex + 1);
//   };



//   return (
//     <>

//     <InfiniteScroll
//       dataLength={items.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={       <Circles
//         height="80"
//         width="80"
//         color="#7b09e7"
//         ariaLabel="circles-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />}
//     >
//       <div className='container'>
//         <div className='row'>
//         {items.map((item) => (
//         <TestProducList data={items} key={item.id} />
//       ))}
//       {!hasMore && items.length > 0 && <div>No more products to load</div>}
//         </div>
//       </div>
//     </InfiniteScroll>
//     </>
//   );
// }

// export default TestProduct