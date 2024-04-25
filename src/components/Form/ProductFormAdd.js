
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Lightsidebarwithheader from '../admin/componentsAdmin/AdminDashLayout'
import { useState } from 'react';
import uploadImage from '../../utility/uploadImageHelper'
import {productCategory,unitCategory} from '../../utility/productCategory'
// import {addProduct} from '../../API/productAPI'
const colors = [
    {
      name: 'White',
      class: 'bg-white',
      selectedClass: 'ring-gray-400',
      id: 'white',
    },
    {
      name: 'Gray',
      class: 'bg-gray-200',
      selectedClass: 'ring-gray-400',
      id: 'gray',
    },
    {
      name: 'Black',
      class: 'bg-gray-900',
      selectedClass: 'ring-gray-900',
      id: 'black',
    },
  ];

  const sizes = [
    { name: 'XXS', inStock: true, id: 'xxs' },
    { name: 'XS', inStock: true, id: 'xs' },
    { name: 'S', inStock: true, id: 's' },
    { name: 'M', inStock: true, id: 'm' },
    { name: 'L', inStock: true, id: 'l' },
    { name: 'XL', inStock: true, id: 'xl' },
    { name: '2XL', inStock: true, id: '2xl' },
    { name: '3XL', inStock: true, id: '3xl' },
  ];
export default function ProductAddForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false); // to track image upload status
    const initialstate={
        title:'',
        description:'',
        thumbnail:'',
        price:'',
        cuttedprice:'',
        discount:'',
        category:'',
        brand:'',
        unit:'',
        stock:'',
        rating:0,
        // highlight1:'',
        // highlight2:'',
        // highlight3:'',
    }
    const [productInfo,setProductInfo]=useState(initialstate)
    const handleChange=(e)=>{
        // Update the productInfo state with the new value
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        });
    }

    const handleUploadImage = async(event) => {
      try {
        // Get the selected file
        const file = event.target.files[0];
      
        // Update state to store the selected file
        setSelectedFile(file);
        const uploadImageCloudinary = await uploadImage(file);
        setProductInfo((prev) => ({
          ...prev,
          thumbnail: uploadImageCloudinary.url
        }));
        console.error(' uploading image:', uploadImageCloudinary.url);
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error (e.g., display error message to the user)
      }
    };
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        console.log({...productInfo,}); // Log the productInfo state along with the file URL to the console
       
        try {
          const response = await fetch('http://localhost:8000/products/addproduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
          });
      
          if (!response.ok) {
            throw new Error('Failed to add product');
          }
      
          const data = await response.json();
          console.log('Product added successfully:', data);
 
    setProductInfo(initialstate);            // Reset form after successful submission
          return data;
        } catch (error) {
          console.error('Error adding product:', error);
          throw error;
        }

        } 

    
  return (
    <>
    <Lightsidebarwithheader>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 px-8">

          <h2 className="mt-2 text-base font-bold leading-7 text-gray-900 lg:text-2xl">Add Products</h2>
          {/* <p className="my-2 text-sm leading-6 text-gray-600">
           
          </p> */}

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
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
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={productInfo.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the Products.</p>
            </div>



            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Product photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" onChange={handleUploadImage} name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 2MB</p>
                </div>
                {selectedFile && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Selected file: {selectedFile.name}</p>
          <img
            className="mt-2 w-32 h-32 object-cover"
            src={URL.createObjectURL(selectedFile)} // Use selectedFile for the image source
            alt="Selected file"
          />
        </div>
      )}
              </div>
            </div>
          </div>



   
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



          <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
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
              <label htmlFor="cuttedprice" className="block text-sm font-medium leading-6 text-gray-900">
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
              <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
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

            <div className="sm:col-span-2">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  value={productInfo.category}
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
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
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


            <div className="sm:col-start-1 sm:col-span-2">
              <label htmlFor="units" className="block text-sm font-medium leading-6 text-gray-900">
                Units
              </label>
              <div className="mt-2">
                <select
                  id="unit"
                  name="unit"
                  autoComplete="units-name"
                  value={productInfo.unit}
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
            </div>

            <div className="sm:col-span-2 ">
              <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
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

            <div className="sm:col-span-2">
              <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
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
      <div className=" px-8 py-6 flex items-center justify-end gap-x-6 shadow-lg">
        <button type="button" className="text-sm font-semibold leading-6 text-red-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Save
        </button>
      </div>
    </form>
    </Lightsidebarwithheader>

    </>

  )
}
