import { setUser } from '@/redux/authSlice';
import { setUserCountry } from '@/redux/countrySlice';
import Calipitalize from '@/utils/Calipitalize';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user) || 'guest';
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    dispatch(setUser(''));
    localStorage.removeItem('token');
    dispatch(setUserCountry(''));
    localStorage.removeItem('userCountry');
    console.log('berhasil logout');
  }

  function handleResetMyCountry() {
    dispatch(setUserCountry(''));
    localStorage.removeItem('userCountry');
    alert('Success, Please repick any country.');
  }

  return (
    <nav className="bg-blue-600 text-white w-full font-serif font-bold flex justify-center">
      <div className="sm:h-24 h-16 flex justify-between items-center lg:w-[1440px] w-full">
        <div className="sm:p-5 p-4 sm:w-48">
          <Link href={'/'}>
            <svg
              className="sm:w-16 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
            </svg>
          </Link>
        </div>
        <div className="p-5 sm:block hidden">
          <span className="text-lg">Country App</span>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className=''>
          <div className="relative inline-block text-left">
            <div className="sm:p-5 p-4 sm:w-48 flex gap-2">
              <span className="text-nowrap">{Calipitalize(user)}</span>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
            </div>
            {isOpen && (

              <div className="absolute w-52 bg-blue-500 border rounded-md shadow-lg">
                <ul className="py-1">
                  {user == "Guest" ? (
                    <>
                      <li className="px-4 py-2 hover:bg-blue-800 cursor-pointer"><Link href={'/login'}>Login</Link></li>
                      <li className="px-4 py-2 hover:bg-blue-800 cursor-pointer"><Link href={'/register'}>Sign Up</Link></li>
                    </>
                  ) : (
                    <>
                      <li onClick={handleLogout} className="px-4 py-2 hover:bg-blue-800 cursor-pointer">Log out</li>

                    </>
                  )}
                  <li onClick={handleResetMyCountry} className="px-4 py-2 hover:bg-blue-800 cursor-pointer">Reset my Countries</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
