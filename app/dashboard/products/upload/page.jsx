"use client"
import {useState} from 'react'
import Tooltip from "../../components/Tooltip.jsx"
import FormErrorText from "../../components/FormErrorText.jsx"
import DropImages from "../components/DropImages.jsx"

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export default function ProductUpload(){
	let serverURL = "http://127.0.0.1/api/product"
	const [specifications,setSpecifications] = useState([])
	const [variants, setVariants] = useState([])
	const [categories,setCategories] = useState([])
  const [textareaValue, setTextareaValue] = useState('');

  const [images,setImages] = useState([])

 

const sendToServer = async (dataObject,files) => {
  // Create a FormData object to hold both data and images
  const formData = new FormData();

  // Append the data object as JSON to the FormData
  formData.append('data', JSON.stringify(dataObject));

  // Append the image files to the FormData under the 'images' key
  files.forEach((file, index) => {
    formData.append('images', file);
  });
  console.log(formData.get(data))

  // try {
  //   // Send a POST request to your Strapi CMS endpoint
  //   const response = await fetch('https://your-strapi-server.com/api/your-endpoint', {
  //     method: 'POST',
  //     body: formData
  //   });

  //   if (response.ok) {
  //     console.log('Data and images successfully uploaded to the server.');
  //     // Optionally, you can reset the files state after successful upload
  //     setFiles([]);
  //   } else {
  //     console.error('Failed to upload data and images to the server.');
  //   }
  // } catch (error) {
  //   console.error('Error uploading data and images:', error);
  // }
};




const Schema = yup.object().shape({
  title: yup.string().required('Title is required.'),
  description: yup.string().required('Description is required.'),
  brand: yup.string().required('Brand is required.'),
  cost: yup.number().required('Cost is required.'),
  price: yup.number().required("Product's price is required."),
  quantity: yup.number().required("Product's stock quantity is required."),
  unit_of_measurement: yup.string().required("Unit of measurement is required."),
  reorder_point: yup.number().required("The reorder point is needed."),
  location: yup.string(),
  supplier_name: yup.string(),
  supplier_email: yup.string(),
  supplier_phone: yup.string()
});


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });



 const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);

    // Set the textarea height to auto to calculate the natural height
    event.target.style.height = 'auto';

    // Set the height of the textarea to its scroll height
    event.target.style.height = `${event.target.scrollHeight}px`;
  };




const onSubmitHandler = (values) => {

    console.log({ values });
    const features = selectSpecifications()
    const extractedValues = {
		  title: values.title,
		  description: values.description,
		  brand: values.brand,
		  cost: values.cost,
		  price: values.price,
		  quantity: values.quantity,
		  features
		};

		// Usage example
		console.log(extractedValues);
		sendToServer(extractedValues,images)
		    // reset();
  };



	// States methods
	
	/* Add a new specification*/
	const addSpecification = () => {
		const newSpecification = new Object({key:"",value:""})
		setSpecifications([...specifications,newSpecification])
		console.log(newSpecification)
	}

	const selectSpecifications = () => {
	  const features = {};
	  specifications.forEach((spec) => {
	    features[spec.key] = spec.value;
	  });
	  return features;
	};

	const changeSpecificationKey = (idx, current_val) => {
	  const updatedSpecifications = specifications.map((spec, index) => {
	    if (idx === index) {
	      return { ...spec, key: current_val };
	    }
	    return spec;
	  });

	  setSpecifications(updatedSpecifications);
	  console.log(updatedSpecifications);
	};

	const changeSpecificationValue = (idx, current_val) => {
	  const updatedSpecifications = specifications.map((spec, index) => {
	    if (idx === index) {
	      return { ...spec, value: current_val };
	    }
	    return spec;
	  });

	  setSpecifications(updatedSpecifications);
	  console.log(updatedSpecifications);
	};

	/* Delete a specification */
	const deleteSpecification = (index) => {
	  const updatedSpecifications = specifications.filter((spec, idx) => idx !== index);
	  setSpecifications(updatedSpecifications);
	};



	/* Add a new category*/
	const addCategory = () => {
	  const newCategory = `Category ${categories.length + 1}`; // Increment the length and use a template string
	  setCategories([...categories, newCategory]);
	  console.log(newCategory);
};

/* Delete a category */
	const deleteCategory = (index) => {
	  const updatedCategories = categories.filter((spec, idx) => idx !== index);
	  setCategories(updatedCategories);
	};
		return (
		
			<div className="flex flex-col justify-between py-24 dar:bg-gray-900">
				<header>

				</header>	
				<main className="w-full flex flex-col gap-2">
					
					  
						<form
						onSubmit={handleSubmit(onSubmitHandler)}
				      encType="multipart/form-data"
				      id="product-upload"
				      className="grid grid-cols-3 gap-2 w-full xs:flex xs:flex-col"
						>
								  <div class="col-span-2 w-full min-h-[400px] flex flex-col gap-4">

								  		  

									  		<fieldset className="basic-info border-2 border-gray-300 rounded-lg p-2">
									  		
													  			<legend className="px-2">Basic Information</legend>	
													  			<div className="flex flex-col gap-2 p-2">
													  				<div className="flex flex-row">
													  					<Label label="Title" htmlFor="product_title" isRequired />
														  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																		  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																		</svg>
													  				</div>
																		<input className="inline-block max-w-[70%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
																          id="product_title"
																          {...register('title')}
																          type="text"
																          placeholder="Enter Products Title or Name...."/>
																           <FormErrorText errorMsg={errors?.title?.message} />
													  			</div>

													  			<div className="flex flex-col gap-2 p-2">
													  				<div className="flex flex-row">
													  					<Label label="Description" htmlFor="product_description" isRequired />
														  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																	  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																	</svg>	

													  				</div>

																<textarea
																  className="inline-block max-w-[90%] min-h-[60px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
																  id="product_description"
																  name="product_description"
																  {...register('description')}
																  placeholder="Enter Product Description...."
																  onChange={handleTextareaChange}
																></textarea>
																 <FormErrorText errorMsg={errors?.description?.message} />
													  			</div>

													  		
														  		<div className="info flex flex-col p-2 gap-2 ">
														  			<div>	
														  				 
														  				 <div className="flex flex-row">
																  					<Label label="Brand" htmlFor="Brand" isRequired/>
																	  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																					  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																					</svg>
														  				</div>
														  				 <input className="inline-block max-w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
																	          id="brand"
																	          type="text"
																	          {...register('brand')}
																	          placeholder="Enter Product's Brand...." />
																	           <FormErrorText errorMsg={errors?.brand?.message} />
														  			</div>
													  			</div>

													  			<hr class="border-1 border-gray-300 dark:white mt-4" /> 

													  			<div className="specification-block py-4 flex flex-row justify-between px-2">
													  				<h2 className="text-lg font-bold">
													  				Specifications
													  				</h2>

													  				<button type="button" onClick={() => {addSpecification()}} className=" text-sm flex flex-row gap-2 font-bold text-blue-400 cursor-pointer" >
													  					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
																		  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
																		</svg>
																		<p >
																			ADD SPECIFICATION
																		</p>
																		{/*<Tooltip />*/}
													  				</button>
													  			</div>
													  			{	specifications.length > 0 ? (
															  			<div className="flex flex-col gap-2">
															  				<div className="flex flex-row justify-between">
															  					<div className="text-md text-gray-600 w-[40%] text-center">
																		          Specification name
																		        </div>
																		        <div className="text-md text-gray-600 w-[40%] ">
																		        	Description
																		        </div>
															  				</div>
															  					{
															  				specifications.map((specification,index) => {
															  					return <Specification idx={index} changeSpecificationValue={changeSpecificationValue} changeSpecificationKey={changeSpecificationKey} deleteSpecification={deleteSpecification} key={index} />
															  				})
															  			}
															  			</div>
															  			) : null
													  			}						  		
									  		</fieldset>

									  		{/*Variance*/}

										  		{/*<div className="basic-info border-2 border-gray-300 rounded-lg p-2">
										  			
										  			<div className="specification-block py-4 flex flex-row justify-between px-2">
										  				<h2 className="text-lg font-bold">
										  				Variants
										  				</h2>
										  				<button type="button" onClick={() => {}} className=" text-sm flex flex-row gap-2 font-bold text-blue-400 cursor-pointer" >
										  					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
															  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
															</svg>
															<p >
																ADD VARIANT
															</p>
										  				</button>
										  			</div>
										  			
										  			<div> 
										  				
										  			{
													 variants.length > 0 ? (
													    
													      <div className="flex flex-col gap-2">
													        <div className="text-md text-gray-600 py-2">
													          Variant name
													        </div>

													        {
													          variants.map((variant, index) => <Variant key={index} variant={variant} />)
													        }
													      </div>
													    
													  ) : null
													}

										  			</div>

										  		</div>
										  		*/}

									  		{/*End of variance*/}
									  	
								  </div>

								  	<div className="flex flex-col gap-3">
										  <fieldset class="w-full border-2 border-gray-300 p-2 flex flex-col gap-6 rounded-lg  inline-block min-h-[220px]">
										  		<legend className="px-2">Cost and Pricing </legend>
										  		

										  		<div className="info flex flex-col ">
										  			<div>	
										  				 
										  				 <div className="flex flex-row">
										  					<Label label="Cost" htmlFor="cost" isRequired/>
											  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
															  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
															</svg>
										  				</div>
										  				 <input className="inline-block max-w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
													          id="cost"
													          type="number" 
													          {...register('cost')}
													          step="0.01"
													          placeholder="Enter Cost of production...." />
													           <FormErrorText errorMsg={errors?.cost?.message} />
										  			</div>
										  		</div>


										  		<div className="info flex flex-col ">
										  			<div>	
										  				 
										  				 <div className="flex flex-row">
										  					<Label label="Price" htmlFor="price" isRequired/>
											  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
															  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
															</svg>
										  				</div>
										  				 <input className="inline-block max-w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
													          id="price"
													          {...register('price')}
													          type="number" 
													          step="0.01"
													          placeholder="Enter Product's Price...." />
													           <FormErrorText errorMsg={errors?.price?.message} />
										  			</div>
										  		</div>	  		
										  </fieldset>
										  <div className="flex flex-row justify-between px-2">
										  				 <Tooltip content="Abandon Creation Mindfully">
										  				   <button type="submit" className="flex flex-row border rounded-lg cursor-pointer px-2 py-2  font-bold" onClick ={(e) => {e.preventDefault()} }>Discard</button>
										  				 </Tooltip>
										  				 <Tooltip content="Initiate Product Addition">
										  	  			 <button type="submit" className="flex flex-row items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-2 py-2 text-white font-bold">Add Product</button>
										  	  		 </Tooltip>
										  </div>
									  </div>
									    
									  <fieldset class="col-start-1 col-end-3 w-full border-2 border-gray-300 p-2 flex flex-col gap-6 rounded-lg  inline-block min-h-[100px]">
									  		<legend className="px-2">Category </legend>
									  		

									  	

									  		<div>
									  			<Category required={true}/>
									  			{
									  				categories.map((category,idx) => (<Category required={false} key={idx} deleteCategory={deleteCategory} index={idx}/>)

									  				)
									  			}
									  		</div>
									  			<div className="info flex flex-row justify-between p-4">
										  				<div>
										  				</div>

									  					<button type="button" onClick={() => {addCategory()}} className=" text-sm flex flex-row gap-2 font-bold text-blue-400 cursor-pointer" >
													  					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
																		  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
																		</svg>
																		<p >
																			ADD CATEGORY
																		</p>
																		{/*<Tooltip />*/}
													  	</button>
									  		</div>
									  </fieldset>
									  
									   <fieldset class="w-full col-start-1 col-end-3 border-2 border-gray-300 p-4 flex flex-col gap-6 rounded-lg  inline-block max-h-[350px] relative ">
											  		<legend className="px-2">Supplier Information</legend>
											  		

											  		<div className="info flex flex-col">
											  			<div>	
											  				 
											  				 <div className="flex flex-row">
											  					<Label label="Name" htmlFor="supplier-name" isRequired/>
												  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																</svg>
											  				</div>
											  				 <input className="inline-block max-w-full border border-gray-300 rounded-md px-4 py-2 min-w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
														          id="supplier-name"
														          type="text" 
														          {...register('supplier_name')}
														          
														          placeholder="supplier's name...." />
											  			</div>
											  		</div>


											  		<div className="info flex flex-col ">
											  			<div>	
											  				 
											  				 <div className="flex flex-row">
											  					<Label label="Tel" htmlFor="supplier-phone" />
												  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																</svg>
											  				</div>
											  				 <input className="inline-block max-w-full border border-gray-300 min-w-[70%]  rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
														          id="supplier-phone"
														          {...register('supplier_phone')}
														          type="tel" 
														          
														          placeholder="Enter Supplier's Number...." />
														           <FormErrorText errorMsg={errors?.price?.message} />
											  			</div>
											  		</div>

											  		<div className="info flex flex-col ">
											  			<div>	
											  				 
											  				 <div className="flex flex-row">
											  					<Label label="Email" htmlFor="supplier-email" />
												  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																</svg>
											  				</div>
											  				 <input className="inline-block max-w-full border border-gray-300 min-w-[70%] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
														          id="supplier-email"
														          {...register('supplier_email')}
														          type="email" 
														          
														          placeholder="Enter Supplier's Number...." />
														           <FormErrorText errorMsg={errors?.price?.message} />
											  			</div>
											  		</div>
									  </fieldset> 


										<fieldset className="col-start-1 col-end-3 w-full border-2 border-gray-300 p-2 flex flex-row flex-wrap gap-4 rounded-lg  inline-block justify-left">
												<legend className="px-2">Inventory</legend>
												
									  		<div className="info flex flex-col p-2">
									  			<div className="">	
									  				 
									  				 <div className="flex flex-row p-2">
									  					<Label label="Quantity" htmlFor="quantity" isRequired/>
										  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
														  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
														</svg>
									  				</div>
									  				 <input className="inline-block min-w-[100px] max-w-[150px] flex border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												          id="quantity"
												          {...register('quantity')}
												          type="number" 
												          placeholder="Enter Product's quantity...." />
												           <FormErrorText errorMsg={errors?.quantity?.message} />
									  			</div>
									  		</div>


									  		<div className="info flex flex-col p-2">
									  			<div className="">	
									  				 
									  				 <div className="flex flex-row p-2">
									  					<Label label="Unit of measurement" htmlFor="unit_of_measurement" isRequired/>
										  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
														  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
														</svg>
									  				</div>
									  				 <input className="inline-block min-w-[300px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												          id="unit_of_measurement"
												          {...register('unit_of_measurement')}
												          type="string" 
												          placeholder="Enter Product's unit of measurement...." />
												           <FormErrorText errorMsg={errors?.unit_of_measurement?.message} />
									  			</div>
									  		</div>

									  		<div className="info flex flex-col p-2">
									  			<div className="">	
									  				 
									  				 <div className="flex flex-row p-2">
									  					<Label label="Reorder point" htmlFor="reorder_point" isRequired/>
										  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
														  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
														</svg>
									  				</div>
									  				 <input className="inline-block  min-w-[100px] max-w-[150px] flex border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												          id="reorder_point"
												          {...register('reorder_point')}
												          type="number" 
												          placeholder="The Product's reorder point is needed...." />
												           <FormErrorText errorMsg={errors?.reorder_point?.message} />
									  			</div>
									  		</div>

										  		<div className="flex flex-col gap-2 p-2">
															  				<div className="flex flex-row">
															  					<Label label="Location" htmlFor="Location"  />
																  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																			  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																			</svg>	

															  				</div>

																		<textarea
																		  className="inline-block min-w-[90%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
																		  id="location"
																		  name="location"
																		  {...register('location')}
																		   onChange={handleTextareaChange}
																		  placeholder="Enter Product's Location...."
																		></textarea>
																		 
													</div>
										</fieldset>				    
					</form>  

					<DropImages setImages={setImages}/>
				</main>
			</div>
		
		)
}

const Label = ({label,htmlFor,isRequired}) => {
	return (
		 <label htmlFor={htmlFor} className="block text-md text-gray-600">
      			{label} {isRequired && <span className="required text-green-500 font-bold">*</span>}
    	</label>
		)
}

const Specification =  ({idx,deleteSpecification,changeSpecificationKey,changeSpecificationValue}) => {
	const index = idx;
	
	return (
			<div className="flex flex-row gap-4 justify-between" >
				
				<input type="text" className="specification-name p-1 border border-gray-300 rounded-lg w-[45%]" onChange={(event) => {changeSpecificationKey(index,event.target.value)}}/>
				<input type="text" className="specification-name p-1 border border-gray-300 rounded-lg w-[45%]"onChange={(event) => {changeSpecificationValue(index,event.target.value)}}/>
				
				<button type="button" onClick={() => {deleteSpecification(index)}} class="flex items-center justify-center border border-gray-300 rounded-lg w-8 h-auto font-bold cursor-pointer">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
					<path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
				  </svg>

				</button>
			</div>
		)
}

const Category = ({required,deleteCategory,index}) => {

	const Categories = ["Electronics","Sheos","Outfits","Papers","House"]
	return (
		<div className="p-2">
			<div className="flex flex-row">
														  					<Label label="Product Category" htmlFor="product-category" isRequired={required}/>
															  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 relative left-[10%]">
																			  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
																			</svg>
												  					</div>
			<div className="flex flex-row justify-between px-4">											  					
				<select className="inline-block min-w-[60%] border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ">
					{
						Categories.map((category,idx) => <option value={category} key={idx} className="font-bold">{category} </option>)
					}
				</select>

				{ index >=0 ? (<button type="button" onClick={() => {deleteCategory(index)}} class="flex items-center justify-center border border-gray-300 rounded-lg w-8 h-auto font-bold cursor-pointer">
									  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
									  </svg>
				
									</button>) : null }

			</div>	
		</div>
		);
}
const Variant = () => {
	return (
		<div className="flex flex-row justify-between gap-2">

			<div className="border border-gray-300 rounded-lg p-1 px-2  flex flex-row gap-4 justify-between text-center w-[90%]">
				<input type="text" className="variant-name w-auto inline-block p-1 border-0 outline-none focus:ring-0" placeholder="name ....." />
				<div className="">
					hello
				</div>
			</div>
			<button type="button" class="flex items-center justify-center border border-gray-300 rounded-lg w-10 h-auto font-bold cursor-pointer">
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ">
			    <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
			  </svg>
			</button>
		</div>	
	)

}