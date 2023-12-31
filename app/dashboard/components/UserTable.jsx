import Link from 'next/link';


const UserTables = () => {
  const users = [1, 2, 3, 4, 5];

  return (
    <table className="min-w-full divide-y table-auto divide-gray-200 overflow-x-scroll dark:bg-gray-900/80">
      <thead className="bg-gray-50 dark:bg-gray-900 ">
        <tr>
          <th scope="col" className=" py-3 dark:text-white text-center text-xs font-bold  text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className=" py-3 dark:text-white text-center text-xs font-bold  text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th scope="col" className=" py-3 dark:text-white text-left text-xs fond-bold  text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
        {users.map((user, index) => (
          <UserTableRow key={index} />
        ))}
      </tbody>
    </table>
  );
};


const UserTableRow = () => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center  w-min-content">
          <div className="flex-shrink-0 h-10 w-10 inline-block">
            <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
          </div>
          <div className="ml-4  w-min-content dar">
            <div className="text-sm font-medium text-gray-900  w-min-content dark:text-white">
              Jane Cooper
            </div>
            <div className="text-sm text-gray-500 ">
              jane.cooper@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        < Manager />
        {/*<Admin/>*/}
        <Employee/>
        {/*</>*/}
        <Customer/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex flex-row text-sm font-medium">
        <Link href="#" className="text-indigo-600 hover:text-indigo-900">
        	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

        </Link>
        <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
        	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

        </Link>
      </td>
    </tr>
  );
};

const Admin = () => {
	return (
		<div className="border-none rounded-full inline-block text-white p-2 px-3 bg-green-900 font-bold mx-2">
			Admin
		</div>
		)
}

const Manager = () => {
  return (
    <div className="border-none rounded-full inline-block text-gray-200 p-2 px-3 bg-blue-900 font-bold mx-2">
      Manager
    </div>
  );
};

const Employee = () => {
	return (
		<div className="border-none rounded-full inline-block text-white p-2 px-3 bg-green-500 font-bold mx-2">
			Employee
		</div>
		)
}

const Customer = () => {
	return (
		<div className="border-none mx-2 rounded-full inline-block text-gray-800 p-2 px-3 bg-yellow-300 font-bold">
			Customer
		</div>
		)
}
export default UserTables;