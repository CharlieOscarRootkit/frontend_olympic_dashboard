"use client"
import React, { useState } from "react";
import Image from 'next/image'
import Label from '../../components/Label';
import FormErrorText from '../../components/FormErrorText';


import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const ManageUserInfo = () => {


		const [showProfileTab,setShowProfileTab] = useState(true)
		const [showPermissionTab,setShowPermissionTab] = useState(false)
		const [showPasswordTab,setShowPasswordTab] = useState(false)

		

		const switchTab = (tabName) => {

			if(tabName === "profile"){
				setShowProfileTab(true)
				setShowPasswordTab(false)
				setShowPermissionTab(false)
			}else if(tabName === "permission"){
				setShowProfileTab(false)
				setShowPasswordTab(false)
				setShowPermissionTab(true)
				
			}else if (tabName === "password"){
				setShowProfileTab(false)
				setShowPasswordTab(true)
				setShowPermissionTab(false)
			}

		}
		const tab_indicator = "rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
		return (

			<section className="w-full h-full ">
				<h1 className="font-bolder font-black text-2xl p-4 dark:text-white">
					Account Settings
				</h1>
				<div className="grid grid-cols-4 gap-2 w-full h-full">
					  <div className=" p-2">
					  	<div>
					  		<h2 className="font-bold font-black dark:font-gray-200 text-md">
					  			Account
					  		</h2>
					  		<div className="tab flex flex-col gap-2 p-2">
					  			<div className={`flex flex-row gap-2 py-2 cursor-pointer ${ showProfileTab ? tab_indicator : ""}`} onClick = {() => switchTab("profile")}>
					  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
												  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
												</svg>

									<p className="w-[70%] text-sm font-bold flex justify-left text-left" >
										Profile Settings
									</p>
									<Indicator />
					  			</div>
					  				<div class="border-t dark:border-white border-gray-900"></div>
					  			<div className={`flex flex-row gap-2 py-2 cursor-pointer ${ showPermissionTab ? tab_indicator : ""}`} onClick = {() => switchTab("permission")}>
					  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
									  <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
									</svg>

					  				
									<p className="text-medium w-[70%] font-bold text-sm flex justify-left text-left">
										Permissions 
									</p>
									<Indicator />
					  			</div>
					  			<div class="border-t dark:border-white border-gray-900"></div>

					  			<div className={`flex flex-row gap-2 py-2 cursor-pointer ${ showPasswordTab ? tab_indicator : ""}`} onClick = {() => switchTab("password")}>

						  				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
											  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
											</svg>


									<p className="w-[70%] text-sm font-bold flex justify-left text-left">
										Password
									</p>
									<Indicator />
					  			</div>
					  			

					  		</div>
					  	</div>	
					  </div>

					  <div className="col-span-2 gap-2">
						  {
						  	showProfileTab ? (<ProfileTab />) : showPermissionTab ? (<PermissionTab />) : showPasswordTab ? (<PasswordTab />) : null
						  }
					  </div>
					  
					  
					  <div className="image-management gap-2">
						  	<div>
						  		<h2 className="font-bold font-black dark:font-gray-200 text-md">
						  			Profile image
						  		</h2>
						  		<div className="tab flex flex-col gap-2 p-2">
						  			<ProfileImage />
						  		</div>
						  	</div>
					  </div>
				</div>
			</section>
				);
}

const ProfileTab = () => {
	return (
		
						  	<div>
						  		<h2 className="font-bold font-black dark:font-gray-200 text-md">
						  			User profile
						  		</h2>
						  		<div className="tab flex flex-col gap-2 p-2 ">
						  			<UserProfile />
						  		</div>
						  	</div>
					  
		)
}

const PermissionTab = () => {
	return <h2> Permissions </h2>
}

const PasswordTab = () => {

	const [passwordModification, setPasswordModification] = useState(false)

	 const [showpassC, setShowpassC] = useState(false)
	 const [showpassN, setShowpassN] = useState(false)
	 const [showpassM, setShowpassM] = useState(false)

	const switchPasswordification = () => {
		setPasswordModification(prev => !prev)
	}
	return (
		<div>
			<h2 className="font-bold font-black dark:font-gray-200 text-md">
				Password management
			</h2>
			<div className="tab flex flex-col gap-2 p-2">
				<p className=" text-sm text-gray-600">
					Current password
				</p>
				<div className="flex flex-row text-center">
					<p className="text-medium border-2 rounded-lg mt-2 ml-4 p-2 px-4 border-gray-200 inline-block max-w-[40%]">
					********************* 
				</p>
					{	passwordModification ? null :
						(<svg xmlns="http://www.w3.org/2000/svg" onClick={() => switchPasswordification()} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative left-[10px] bottom-[-28px] cursor-pointer">
						  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
						  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
						</svg> ) 
					}		
				</div>
				
			</div>
			{ passwordModification ? (
			<div className="tab flex flex-col gap-2 p-2" >
				<div className="flex flex-row justify-between">
				<h2 className="font-bold font-black dark:font-gray-200 text-md">
					Change password
				</h2>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative right-[100px] cursor-pointer" onClick={() => switchPasswordification()}>
		  				<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
					</svg>

				</div>

				<div>
					<div className="w-1/2">
				        <Label label="Current Password" htmlFor="Password" isRequired />
				        <div className="flex flex-row gap-4 justify-between">
				        	<input
				          className="border border-gray-300 rounded-md min-w-full ml-4 mt-2 p-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				          id="password"
				          // {...register('password')}
				          type={ showpassC? "text" : "password"}
				          placeholder="Enter the current Passord...."
				        />
				        <i onClick={() => setShowpassC((prev) => !prev)} className="color-blue">
				        	{showpassC? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
										</svg>

																			) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
										  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
										  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
										</svg>

									)}	
								</i>
				        
			        </div>
			        
			        {/*<FormErrorText errorMsg={errors?.password?.message} />*/}
			      </div>
				</div>

				<div>
					<div className="w-1/2">
				        <Label label="New  Password" htmlFor="Password" isRequired />
				        <div className="flex flex-row gap-4 justify-between">
				        	<input
				          className="border border-gray-300 rounded-md min-w-full ml-4 mt-2 p-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				          id="password"
				          // {...register('password')}
				          type={ showpassN? "text" : "password"}
				          placeholder="Enter the new passord...."
				        />
				        <i onClick={() => setShowpassN((prev) => !prev)} className="color-blue">
				        	{showpassN? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
										</svg>

																			) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
										  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
										  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
										</svg>

									)}	
								</i>
				        
			        </div>
			        
			        {/*<FormErrorText errorMsg={errors?.password?.message} />*/}
			      </div>
				</div>

				<div>
					<div className="w-1/2">
				        <Label label="New Password" htmlFor="NewPassword" isRequired />
				        <div className="flex flex-row gap-4 justify-between">
				        	<input
				          className="border border-gray-300 rounded-md min-w-full ml-4 mt-2 p-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				          id="password"
				          // {...register('password')}
				          type={ showpassM? "text" : "password"}
				          placeholder=" confirm new passord...."
				        />
				        <i onClick={() => setShowpassM((prev) => !prev)} className="color-blue">
				        	{showpassM? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
										</svg>

																			) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  relative left-[10px] bottom-[-20px] cursor-pointer">
										  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
										  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
										  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
										</svg>

									)}	
								</i>
				        
			        </div>
			        
			        {/*<FormErrorText errorMsg={errors?.password?.message} />*/}
			      </div>
				</div>
			</div>
			) : null
			}
		</div>
		)
}


const Indicator = ({tab}) => {
	return (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" className="w-5 h-5 cursor-pointer">
  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
		)
} 
const Displayer = ({content}) => {
	return (
		<p className="text-medium border-2 rounded-lg mt-2 ml-4 p-2 px-4 border-gray-200 inline-block min-w-[40%]">
		{content}
		</p>
		)
}	
const UserProfile = () => {
	const roles = ["Admin","Manager"]
	return (
			<div class="flex flex-col gap-2">
				<div className="first-name">
					<p className=" text-sm text-gray-600">
						First Name
					</p>
					<Displayer content="Charlie"/>
				</div>
				<div className="last-name">
					<p className=" text-sm text-gray-600">
						Last Name
					</p>
					<Displayer content="Oscar"/>
				</div>
				<div className="last-name">
					<p className=" text-sm text-gray-600">
						Email
					</p>
					<Displayer content="charlieoscar8@gmail.com"/>
				</div>
				<div className="last-name">
					<p className=" text-sm text-gray-600">
						Department
					</p>
					<Displayer content="Operations"/>
				</div>
				<div className="last-name">
					<p className=" text-sm text-gray-600">
						Role(s)
					</p>
					<div className="flex flex-row flex-wrap">
					{
						roles.map((role,index) =>  (<Displayer content={role} key={index}/>))
					}
					</div>
				</div>

				<div className="last-name">
					<p className=" text-sm text-gray-600">
						Employment Type
					</p>
					<Displayer content="Full Time"/>
				</div>
				
				
				
			</div>
		);
}

const ProfileImage = () => {

	const [file, setFile] = useState("/images/defualt_profile.png");
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div style={{ width: '100%' }} className="relative place-content-center flex flex-col gap-2 z-0">
            
      		<Image src={file} width={100} height={100}  className="rounded-full overflow-hidden" style={{ boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.5)' }} layout="responsive" />
            <input type="file" onChange={handleChange} className=""/>
     		<svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative",left: "42%",bottom: "80px"}} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer">
			  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
			</svg>
      
      

            
        </div>
 
    );
}
export default ManageUserInfo