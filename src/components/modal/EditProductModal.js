
import React, { useState ,} from 'react'
import {editProduct,getallProducts} from '../../API/productAPI'
import { toast } from 'react-toastify'
const EditProductModal = ({closeModal, onEdit,product,refreshProductList}) => {

    const [productInfo,setProductInfo]=useState(product)


    const handleChange=(e)=>{
        // Update the productInfo state with the new value
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        });
    }
    const notifyAdd = () => toast.success("Product Edited Successfully!");
    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
          const updatedData = productInfo; // Assuming productInfo contains all updated data
          const productId = product._id; // Assuming product has an id property
          const data = await editProduct(productId, updatedData);
          console.log('Product updated successfully:', data);
          notifyAdd()
           const newRefreshedData = await getallProducts();         // After successful deletion, you may want to refresh the product list
          refreshProductList(newRefreshedData);

          closeModal(); // Close the modal
        } catch (error) {
          console.error('Error updating product:', error);
          // Handle error if needed
        }

        } 


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 h-auto">
        <div className="absolute inset-0 bg-gray-700 opacity-75 "> </div>
        <div className="relative z-10 bg-white p-4 max-w-md rounded-lg my-4 overflow-y-auto max-h-full">

          <form onSubmit={handleSubmit} className="">
            <div className="space-y-12 px-8">
              <h2 className="mt-2 text-base font-bold leading-7 text-gray-900 lg:text-2xl">
                Edit Products
              </h2>
              {/* <p className="my-2 text-sm leading-6 text-gray-600">
           
          </p> */}

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        value={productInfo.title}
                        onChange={handleChange}
                        required
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     
                      defaultValue={productInfo.description}
                        
                        onChange={handleChange}
                      required
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about the Products.
                  </p>
                </div>


              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      autoComplete="price"
                        value={productInfo.price}
                        onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="cuttedprice"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cutted Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="cuttedprice"
                      id="cuttedprice"
                      autoComplete="cuttedprice"
                        value={productInfo.cuttedprice}
                        onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Discount
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="discount"
                      name="discount"
                      autoComplete="discount"
                        value={productInfo.discount}
                        onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
{/* Category */}
                {/* <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      autoComplete="category-name"
                        value={product.category}
                        onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Category</option>
                      {
                    productCategory.map((el,index)=>{
                      return(
                        <option value={el.value} key={el.value+index}>{el.label}</option>
                      )
                    })
                  }
                    </select>
                  </div>
                </div> */}

                <div className="sm:col-span-6">
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Brand
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      autoComplete="brand"
                        value={productInfo.brand}
                        onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* <div className="sm:col-start-1 sm:col-span-2">
                  <label
                    htmlFor="units"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Units
                  </label>
                  <div className="mt-2">
                    <select
                      id="unit"
                      name="unit"
                      autoComplete="units-name"
                        value={product.unit}
                        onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={""}>Select Units</option>
                      {
                    unitCategory.map((el,index)=>{
                      return(
                        <option value={el.value} key={el.value+index}>{el.label}</option>
                      )
                    })
                  }
                    </select>
                  </div>
                </div> */}

                <div className="sm:col-start-1 sm:col-span-3 ">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stocks
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="stock"
                      id="stock"
                      autoComplete="stock"
                        value={productInfo.stock}
                        onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Rating
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="rating"
                      id="rating"
                      autoComplete="rating"
                        value={productInfo.rating}
                        onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* HighLights */}
                {/* <div className="sm:col-span-3">
              <label htmlFor="highlight1" className="block text-sm font-medium leading-6 text-gray-900">
                Highlight1
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="highlight1"
                  id="highlight1"
                  autoComplete="highlight1"
                  value={productInfo.highlight1}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="highlight2" className="block text-sm font-medium leading-6 text-gray-900">
              Highlight2
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="highlight2"
                  id="highlight2"
                  autoComplete="highlight2"
                  value={productInfo.highlight2}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="highlight3" className="block text-sm font-medium leading-6 text-gray-900">
              Highlight3
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="highlight3"
                  id="highlight3"
                  autoComplete="highlight3"
                  value={productInfo.highlight3}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

                {/* <div className="col-span-full">
                <label
                  htmlFor="colors"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Colors
                </label>
                <div className="mt-2">
                  {colors.map((color) => (
                    <>
                      <input
                        type="checkbox"
                        {...register('colors', {})}
                        key={color.id}
                        value={color.id}
                      />{' '}
                      {color.name}
                    </>
                  ))}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="sizes"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sizes
                </label>
                <div className="mt-2">
                  {sizes.map((size) => (
                    <>
                      <input
                        type="checkbox"
                        {...register('sizes', {})}
                        key={size.id}
                        value={size.id}
                      />{' '}
                      {size.name}
                    </>
                  ))}
                </div>
              </div> */}
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-8"></div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type='submit'
              // onClick={() => {
              //   onEdit(); // Call the onEdit function when "Edit" is clicked
              //   closeModal(); // Close the modal
              // }}
              className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
          </form>


        </div>
      </div>
    </>
  );
}

export default EditProductModal