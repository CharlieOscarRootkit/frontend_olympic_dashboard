"use client"
import React,{useState} from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Label from '../components/Label';
import FormErrorText from '../components/FormErrorText';

const RegisterUser = () => {
  const formId = 'registration-form';

  const [showpass, setShowpass] = useState(false)

  const Schema = yup.object().shape({
  first_name: yup.string().required('First Name is required.'),
  last_name: yup.string().required('Last Name is required.'),
  email: yup.string().required('Email is required.'),
  password: yup.string().required('Password is required.'),
  role: yup.string().required('Roles are required.'),
  department: yup.string().required('Department is required.'),
  employment_type: yup.string().required('Employment Type is required.'),
  start_date: yup.date().required('Start Date is required.'),
  country: yup.string().required('Country is required.'),
  region: yup.string(),
  address: yup.string(),
  city: yup.string().required('City is required.'),
  phone: yup.string(),
  phone_2: yup.string(),
  date_of_birth : yup.date(),
  gender : yup.string()
});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (values) => {
    console.log({ values });
    const data_to_submit = {
    			  accountType: "employee",
  			  	userInfo: {
					    basic: {
					      firstName: values.first_name,
					      lastName: values.last_name,
					      email: values.email,
					      password: values.password
					    },
					    details: {
					      roles: [values.role],
					      department: values.department,
					      employmentType: values.employment_type,
					      startDate: values.start_date,
					      contact: {
					        phone: [values.phone,values.phone_2],
					        email: values.email,
					        address: {
					        	region:values.region,
					          street: "",
					          city: values.city,
					          postalCode: "",
					          country: values.country
					        }
					      }
					    },
    					optional: {
					      dateOfBirth: values.date_of_birth,
					      gender: values.gender
    					}
  							}
    }
    console.log(data_to_submit)
    // Code to handle form submission
    reset();
  };

  return (
  	<section className="flex flex-col justify-center place-content-center  text-gray-600 lg:block dark:text-gray-300 ">
  		   <div>

  		   </div>
  		   <fieldset className="border border-gray-500 border-solid border-2 p-4">
  				<legend className="text-gray-500 px-4 font-semibold">Fill the following info</legend>
  		    <form
		      onSubmit={handleSubmit(onSubmitHandler)}
		      encType="multipart/form-data"
		      id={formId}
		      className="flex flex-col justify-center place-content-center px-16 py-4 gap-4"
			    >
			      <div className="flex flex-row justify-between name">
				      	
				      	<div className="flex flex-col w-1/3">
					        <Label label="First Name" htmlFor="first_name" isRequired />
					        <input
					          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					          id="first_name"
					          {...register('first_name')}
					          type="text"
					          placeholder="Enter First Name...."
					        />
					        <FormErrorText errorMsg={errors?.first_name?.message} />
				      	</div>

				      	<div className="flex flex-col w-1/3">
					        <Label label="Last Name" htmlFor="last_name" isRequired />
					        <input
					          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					          id="last_name"
					          {...register('last_name')}
					          type="text"
					          placeholder="Enter Last Name..."
					        />
					        <FormErrorText errorMsg={errors?.last_name?.message} />
				      	</div>
			      </div>
			      

			      <div className="w-full">
			        <Label label="Email" htmlFor="Email" isRequired />
			        <input
			          class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-1/2"
			          id="email"
			          {...register('email')}
			          type="email" name="email" autocomplete="email"
			          placeholder="Enter the Email...."
			        />
			        <FormErrorText errorMsg={errors?.email?.message} />
			      </div>

			      <div className="w-1/2">
			        <Label label="Password" htmlFor="Password" isRequired />
			        <div className="flex flex-row gap-4 justify-between">
			        	<input
			          className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			          id="password"
			          {...register('password')}
			          type={ showpass? "text" : "password"}
			          placeholder="Enter the Passord...."
			        />
			        <i onClick={() => setShowpass((prev) => !prev)} className="color-blue">
			        	{showpass? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							  	<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
								  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
								</svg>
								)}	
							</i>
			        
			        </div>
			        
			        <FormErrorText errorMsg={errors?.password?.message} />
			      </div>

			      <div className="w-full">
			        <Label label="Department" htmlFor="Department" isRequired />
			        <input
			          className="border border-gray-300 w-1/2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			          id="department"
			          {...register('department')}
			          type="text"
			          placeholder="Enter the Department...."
			        />
			        <FormErrorText errorMsg={errors?.department?.message} />
			      </div>

			      <div className="w-full">
			      	<Label label="Employment Type" htmlFor="Employment Type"isRequired/>
							
							<select id="employment_type" name="employment_type" {...register('employment_type')} className="border w-1/3 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
							  <option value="full_time">Full Time</option>
							  <option value="part_time">Part Time</option>
							  <option value="contract">Contract</option>
							</select>	      		
			      	
			      	<FormErrorText errorMsg={errors?.employment_type?.message}/>
			      </div>

			      <div className="w-full">
			        <Label label="Role" htmlFor="Role" isRequired />
			        <input
			          className="border border-gray-300 w-1/2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			          id="department"
			          {...register('role')}
			          type="text"
			          placeholder="Enter the Role..."
			        />
			       <FormErrorText errorMsg={errors?.role?.message} />
			      </div>


			      <div className="w-full">
			        <Label label="Start Date" htmlFor="Start Date" isRequired />
			        <input
			          className="border border-gray-300 w-1/2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			          id="start-date"
			          {...register('start_date')}
			          type="date"
			          placeholder="Enter the Start Date...."
			        />
			        <FormErrorText errorMsg={errors?.start_date?.message} />
			      </div>

			      <div className="flex flex-wrap justify-between address w-full">

				      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
							  <Label label="Country" htmlFor="country" isRequired />
							  {/*<select
							    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							    id="country"
							    {...register('country')}
							  >
							    <option value="">Select a country</option>
							    <option value="USA">USA</option>
							    <option value="Canada">Canada</option>
							    <option value="UK">UK</option>
							    
							  </select>*/}
							   <input
					        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="city"
					        {...register('country')}
					        type="text"
					        placeholder="Enter the Country...."
					      />
							  <FormErrorText errorMsg={errors?.country?.message} />
							</div>

							<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
					      <Label label="City" htmlFor="city" isRequired />
					      <input
					        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="city"
					        {...register('city')}
					        type="text"
					        placeholder="Enter the City...."
					      />
					      <FormErrorText errorMsg={errors?.city?.message} />
					    </div>

					    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 py-4">
					      <Label label="Address" htmlFor="Address" />
					      <input
					        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="address" name="address" autocomplete="address-level1"
					        placeholder="Enter the Address...."
					      />
					      {/*<FormErrorText errorMsg={errors?.region?.message} />*/}
					    </div>

					  </div>  
					  <div className="w-full ">
					      <Label label="Phone 1" htmlFor="Phone" isRequired />
					      <input
					        className="border w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="phone"
					        {...register('phone')}
					        type="phone"
					        placeholder="Enter the Contact...."
					      />
					      <FormErrorText errorMsg={errors?.contact?.message} />
					    </div>
					  <div className="w-full ">
					      <Label label="Phone 2" htmlFor="Phone" />
					      <input
					        className="border w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="phone-2"
					        {...register('phone_2')}
					        type="phone"
					        placeholder="Enter the Contact...."
					      />
					      
					    </div>


					    <div className="w-full ">
					      <Label label="Date of Birth" htmlFor="Date of Birth" />
					      <input
					        className="border w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					        id="date-of-birth"
					        {...register('date_of_birth')}
					        type="date"
					        placeholder="Enter the Date of Birth...."
					      />
					      
					    </div>

					    <div className="w-full ">
					      <Label label="Gender" htmlFor="Gender" />
					      <select
							    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							    id="country"
							    {...register('gender')}
							  >
							    <option value="Male">Male</option>
							    <option value="Female">Female</option>
							    <option value="Other">Other..</option>
							    
							  </select>
					      
					    </div>

			      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-1/4 self-center">Submit</button>
			    </form>
		    </fieldset>
  	</section>

  );
};

export default RegisterUser;