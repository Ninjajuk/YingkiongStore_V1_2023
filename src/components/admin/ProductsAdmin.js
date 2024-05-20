

import { useEffect, useState } from 'react';
import {getallProducts,deleteProduct,editProduct} from '../../API/productAPI'

import Lightsidebarwithheader from './componentsAdmin/AdminDashLayout';
import { useNavigate } from 'react-router-dom';
import { DeleteModal } from '../modal/DeleteModal';
import EditProductModal from '../modal/EditProductModal';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


 function AdminProductList() {
  const [data,setData]=useState([])
  const [openDeleteModal, setOpenDeleteModal] = useState(false)       //Flag for the DeleteProduct  Modal
  const [productIdToDelete, setProductIdToDelete] = useState(null);  //Flag for the DeleteProduct Id 

  const [openEditProductModal, setOpenEditProductModal] = useState(false)       //Flag for the Edit Product  Modal
  const [productIdToEdit, setProductIdToEdit] = useState(null);                 //Flag for the Edit Product Id 

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState([]);
const navigate=useNavigate()

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(()=>{
    async function getData() {
      try {
        const product = await getallProducts();
        setData(product);

            // Extract unique categories
            const categories = [...new Set(product.map(item => item.category))];
            setUniqueCategories(categories);
      } catch (error) {
        console.log('Error in fetching data:', error);
     
      }
    }

    getData();
  },[])

  // Filter products based on the selected category and search term
  const filteredProducts = data.filter((product) =>
    (sortBy ? product.category === sortBy : true) &&
    (searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true)
  );

  const handleEditProductButtonClick = (productId) => {
    setProductIdToEdit(productId);
    setOpenEditProductModal(true);
    console.log(productId)
  };





  const handleDeleteButtonClick = (productId) => {
    setProductIdToDelete(productId);
    setOpenDeleteModal(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      // After successful deletion, you may want to refresh the product list
      const updatedData = await getallProducts();
      setData(updatedData);
      console.log(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <Lightsidebarwithheader>
      <section className="w-full   h-full ">
        <div className="w-full flex-flex-col h-full">
          <div className="w-full lg:h-1/6 bg-white flex flex-col">
            <h1 className="px-6 py-1 md:text-xl font font-semibold  text-sky-600">
              Add your products
            </h1>
            {/* <p className="px-6">Navigating Orders with Confidence</p> */}
            <div className="py-1 px-6 mx-auto flex flex-col md:flex-row items-center gap-1">
              <input
                type="text"
                placeholder="Search"
                className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={searchTerm}
                onChange={handleFilter}
              />
              <div className="flex">
                {" "}
                <label className="ml-4">Filter By:</label>
                <select
                  className="ml-2 border-2  rounded-md py-1.5 px-2  focus:ring-0 sm:text-sm sm:leading-6"
                  value={sortBy}
                  onChange={handleFilterSelect}
                >
                  <option value="">All </option>
                  {uniqueCategories.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-gray-600 py-2"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex px-6 py-2 ">
                <button
                  type="button"
                  onClick={() => navigate("/admin/addproducts")}
                  className="px-4 py-2 bg-green-600 hover:bg-green-800 hover:text-white rounded-md cursor-pointer"
                >
                  Add Products
                </button>
              </div>
            </div>
          </div>
          {/* Product Headline */}

          {/* <h2 className="text-2xl font-semibold  bg-white px-6 py-2">
            Product List
          </h2> */}
          <div className="h-5/6  overflow-y-auto flex-grow">
            <div className="max-h-full">
              <table className="min-w-full ">
                <thead className="sticky top-0">
                  <tr>
                    <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={product.thumbnail}
                              alt={product.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="text-sm leading-5 text-gray-900">
                          ₹{product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <img
                          className="h-16 w-16"
                          src={product.thumbnail}
                          alt={product.title}
                        />
                      </td>
                      <td className="lg:px-6 py-4 whitespace-no-wrap">
                        <button
                          className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                          onClick={() => handleEditProductButtonClick(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="ml-4 text-red-600 hover:text-red-900 focus:outline-none"
                          // onClick={() => handleDeleteProduct(product._id)}
                          onClick={() => handleDeleteButtonClick(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
      {/* <ToastContainer /> */}
      </section>

      {openEditProductModal && (
        <EditProductModal
        closeModal={() => setOpenEditProductModal(false)}
        // onEdit={() => handleEditProduct(productIdToEdit)}
        product={productIdToEdit}
        refreshProductList={setData} // Pass the setData function to update the product list
        />
      )}
      {openDeleteModal && (
        <DeleteModal
        closeModal={() => setOpenDeleteModal(false)}
        onDelete={() => handleDeleteProduct(productIdToDelete)}
        productId={productIdToDelete}
        />
      )}
    </Lightsidebarwithheader>
  );
}

export default AdminProductList;