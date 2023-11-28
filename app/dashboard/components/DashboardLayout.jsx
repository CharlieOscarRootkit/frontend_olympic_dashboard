import ThemeSwithcher from "../../components/ThemeSwitcher"

const DashboardLayout = ({ children }) => {
	return (

        <body class="bg-gray-100 dark:bg-gray-900 h-full">
		  
		  <aside class="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[15%] xl:w-[15%] 2xl:w-[10%] dark:bg-gray-800 dark:border-gray-700 overflow-x-hidden overflow-y-visible">
		    <div>
{/*		      <div class="-mx-6 px-6 py-4">
		        <a href="#" title="home">
		          <img src="https://tailus.io/sources/blocks/navigation-layout/preview/images/logo.svg" class="w-32" alt="tailus logo" />
		        </a>
		      </div>

		      <div class="mt-8 text-center ">
		        <img
		          src="https://tailus.io/sources/blocks/navigation-layout/preview/images/second_user.webp"
		          alt=""
		          class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
		        />
		        <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Cynthia J. Watts</h5>
		        <span class="hidden text-gray-400 lg:block">Admin</span>
		      </div>
*/}
		      {/*<ul class="mt-8 space-y-2 tracking-wide ">
		        <li>
		          <a
		            href="#"
		            aria-label="dashboard"
		            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
		          >
		            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
		              <path
		                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
		                class="dark:fill-slate-600 fill-current text-cyan-400"
		              ></path>
		              <path
		                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
		                class="fill-current text-cyan-200 group-hover:text-cyan-300"
		              ></path>
		              <path
		                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
		                class="fill-current group-hover:text-sky-300"
		              ></path>
		            </svg>
		            <span class="-mr-1 font-medium">Dashboard</span>
		          </a>
		        </li>
		        <li>
		          <a
		            href="#"
		            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="h-5 w-5"
		              viewBox="0 0 20 20"
		              fill="currentColor"
		            >
		              <path
		                class="fill-current text-gray-300 group-hover:text-cyan-300"
		                fill-rule="evenodd"
		                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
		                clip-rule="evenodd"
		              />
		              <path
		                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
		                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
		              />
		            </svg>
		            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Categories</span>
		          </a>
		        </li>
		        <li>
		          <a
		            href="#"
		            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="h-5 w-5"
		              viewBox="0 0 20 20"
		              fill="currentColor"
		            >
		              <path
		                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
		                fill-rule="evenodd"
		                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
		                clip-rule="evenodd"
		              />
		              <path
		                class="fill-current text-gray-300 group-hover:text-cyan-300"
		                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
		              />
		            </svg>
		            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Reports</span>
		          </a>
		        </li>
		        <li>
		          <a
		            href="#"
		            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="h-5 w-5"
		              viewBox="0 0 20 20"
		              fill="currentColor"
		            >
		              <path
		                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
		                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
		              />
		              <path
		                class="fill-current text-gray-300 group-hover:text-cyan-300"
		                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
		              />
		            </svg>
		            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
		          </a>
		        </li>
		        <li>
		          <a
		            href="#"
		            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="h-5 w-5"
		              viewBox="0 0 20 20"
		              fill="currentColor"
		            >
		              <path
		                class="fill-current text-gray-300 group-hover:text-cyan-300"
		                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
		              />
		              <path
		                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
		                fill-rule="evenodd"
		                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
		                clip-rule="evenodd"
		              />
		            </svg>
		            <span class="group-hover:text-gray-700 dark:group-hover:text-white">Finance</span>
		          </a>
		        </li>
		      </ul>
		      */}

		      	<ul class="flex flex-col gap-6 max-w-[280px] mx-auto mt-24">

				    <li className="py-1">
				        <details class="group">

				            <summary
				                class="flex items-center justify-between gap-3 font-medium marker:content-none hover:cursor-pointer">

				                <span class="flex gap-4">

								<svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
						              <path
						                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
						                class="dark:fill-slate-600 fill-current text-cyan-400"
						              ></path>
						              <path
						                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
						                class="fill-current text-cyan-200 group-hover:text-cyan-300"
						              ></path>
						              <path
						                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
						                class="fill-current group-hover:text-sky-300"
						              ></path>
						            </svg>

				                    <span>
				                        Dashboard
				                    </span>
				                </span>
				                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
				                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				                    <path fill-rule="evenodd"
				                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
				                    </path>
				                </svg>
				            </summary>

				            <article class="px-4 pb-4">

				                <ul class="flex flex-col gap-4 pl-2 mt-4">

				                    <li class="flex gap-2">
				                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                            stroke="currentColor" class="w-6 h-6">
				                            <path stroke-linecap="round" stroke-linejoin="round"
				                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
				                            </path>
				                        </svg>


				                        <a href="http://127.0.0.1:8000/user/dashboard">
				                            Dashboard
				                        </a>
				                    </li>


				                    <li class="flex gap-2">
				                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                            stroke="currentColor" class="w-6 h-6">
				                            <path stroke-linecap="round" stroke-linejoin="round"
				                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
				                            </path>
				                        </svg>

				                        <a href="http://127.0.0.1:8000/user/study-lists">
				                            Study Lists
				                        </a>
				                    </li>


				                    <li class="flex gap-2">
				                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                            stroke="currentColor" class="w-6 h-6">
				                            <path stroke-linecap="round" stroke-linejoin="round"
				                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
				                            </path>
				                        </svg>


				                        <a href="http://127.0.0.1:8000/user/contribution">
				                            Your contribution
				                        </a>
				                    </li>


				                    <li class="flex gap-2">
				                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                            stroke="currentColor" class="w-6 h-6">
				                            <path stroke-linecap="round" stroke-linejoin="round"
				                                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
				                            </path>
				                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
				                            </path>
				                        </svg>


				                        <a href="http://127.0.0.1:8000/user/settings">
				                            Settings
				                        </a>
				                    </li>


				                    <form action="http://127.0.0.1:8000/auth/logout" method="POST">
				                        <input type="hidden" name="_token" value="ymEkCLBFpgkdaSbidUArRsdHbER5DkT6ByS3eJYb" />
				                        <button type="submit" class="text-red-500 text-sm px-2 py-1 hover:bg-red-200 rounded-md">
				                            Log Out
				                        </button>
				                    </form>

				                </ul>

				            </article>

				        </details>
				    </li>

				    <li className="py-1">
				        <details class="group">

				            <summary
				                class="flex items-center justify-between gap-3 font-medium marker:content-none hover:cursor-pointer">

				                <span class="flex gap-4">
				                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                        stroke="currentColor" class="w-6 h-6">
				                        <path stroke-linecap="round" stroke-linejoin="round"
				                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				                    </svg>

				                    <span>
				                        Product
				                    </span>
				                </span>
				                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
				                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				                    <path fill-rule="evenodd"
				                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
				                    </path>
				                </svg>
				            </summary>

				            <article class="px-4 pb-4">
				                <ul class="flex flex-col gap-1 pl-2">
				                    <li><a href="">Document title</a></li>
				                    <li><a href="">Document title</a></li>
				                    <li><a href="">Document title</a></li>
				                </ul>
				            </article>

				        </details>
				    </li>

				    <li className="py-1">
				        <details class="group">

				            <summary
				                class="flex items-center justify-between gap-3 font-medium marker:content-none hover:cursor-pointer">

				                <span class="flex gap-4">
				                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                        stroke="currentColor" class="w-6 h-6">
				                        <path stroke-linecap="round" stroke-linejoin="round"
				                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
				                    </svg>
				                    <span>
				                        Users
				                    </span>
				                </span>
				                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
				                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				                    <path fill-rule="evenodd"
				                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
				                    </path>
				                </svg>


				            </summary>

				            <article class="px-4 pb-4">
				                <ul class="flex flex-col gap-1 pl-2">
				                    <li><a href="">Course title</a></li>
				                    <li><a href="">Course title</a></li>
				                    <li><a href="">Course title</a></li>
				                </ul>
				            </article>

				        </details>
				    </li>

				</ul>


		    </div>

		    <div class="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
		      <button class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
		        <svg
		          xmlns="http://www.w3.org/2000/svg"
		          class="h-6 w-6"
		          fill="none"
		          viewBox="0 0 24 24"
		          stroke="currentColor"
		        >
		          <path
		            stroke-linecap="round"
		            stroke-linejoin="round"
		            stroke-width="2"
		            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
		          />
		        </svg>
		        <span class="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
		      </button>
		    </div>
		  </aside>

		  <div class="ml-auto mb-6 lg:w-[85%] xl:w-[85%] 2xl:w-[90%]">
		    
		    <div class="sticky z-100 top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5 ">
		      <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
		        
		        <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
		        
		        <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            class="my-auto h-6 w-6"
		            fill="none"
		            viewBox="0 0 24 24"
		            stroke="currentColor"
		          >
		            <path
		              stroke-linecap="round"
		              stroke-linejoin="round"
		              stroke-width="2"
		              d="M4 6h16M4 12h16M4 18h16"
		            />
		          </svg>
		        </button>
		        
		        <div class="flex space-x-4">
		          {/*search bar */}
		          <div hidden class="md:block">
		            <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
		              <span class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
		                <svg
		                  xmlns="http://ww50w3.org/2000/svg"
		                  class="w-4 fill-current"
		                  viewBox="0 0 35.997 36.004"
		                >
		                  <path
		                    id="Icon_awesome-search"
		                    data-name="search"
		                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
		                  ></path>
		                </svg>
		              </span>
		              <input
		                type="search"
		                name="leadingIcon"
		                id="leadingIcon"
		                placeholder="Search here"
		                class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
		              />
		            </div>
		          </div>
		          {/*<!--/search bar -->*/}
		          <button
		            aria-label="search"
		            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
		          >
		            <svg
		              xmlns="http://ww50w3.org/2000/svg"
		              class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
		              viewBox="0 0 35.997 36.004"
		            >
		              <path
		                id="Icon_awesome-search"
		                data-name="search"
		                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
		              ></path>
		            </svg>
		          </button>
		          <button
		            aria-label="chat"
		            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
		              fill="none"
		              viewBox="0 0 24 24"
		              stroke="currentColor"
		            >
		              <path
		                stroke-linecap="round"
		                stroke-linejoin="round"
		                stroke-width="2"
		                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
		              />
		            </svg>
		          </button>
		          <button
		            aria-label="notification"
		            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
		          >
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
		              viewBox="0 0 20 20"
		              fill="currentColor"
		            >
		              <path
		                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
		              />
		            </svg>
		          </button>
		          
		          	<ThemeSwithcher/>
		          
		        </div>
		      </div>
		    </div>

		    <div class="px-6 pt-6 2xl:container py-24 bg-white dark:bg-gray-900">
		    
		      	{children}
		        
		    
		    </div>

		  </div>

		</body>
                                    
		)
}

export default DashboardLayout