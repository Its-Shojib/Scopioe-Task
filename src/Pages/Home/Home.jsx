import { NavLink, Outlet } from 'react-router-dom';
import { FaHome,  FaSignOutAlt, FaUsers, FaVoicemail, FaWineBottle } from 'react-icons/fa';
import {  } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    let { Logout } = useAuth()
    return (
        <div>
            <div className="max-w-full mx-auto flex">
                <div className="w-64 h-screen bg-[#172935] text-white sticky top-0">
                    <div className='text-center my-10'>
                        <h1 className='text-3xl font-bold'>Milon Mela</h1>
                        <p className='text-xl'>Matrimony</p>
                    </div>
                    {
                        <>
                            <ul className='menu flex flex-col mt-10 px-6 space-y-3'>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='admin-home' >
                                        <FaHome></FaHome>Home</NavLink>
                                </li>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='manage-user' >
                                        <FaUsers></FaUsers>New Listing</NavLink>
                                </li>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='approve-con-request' >
                                        <FaVoicemail></FaVoicemail>Search</NavLink>
                                </li>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='approve-premium' ><MdOutlineWorkspacePremium />About</NavLink>
                                </li>
                                <li >
                                    <NavLink className='flex items-center font-bold gap-2'
                                        to='success-story' ><FaWineBottle></FaWineBottle>Favorites</NavLink>
                                </li>

                            </ul>
                        </>
                    }

                    <hr className='w-full my-5' />

                    <ul className='menu flex flex-col px-6 space-y-3'>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/' >
                                <FaHome></FaHome>Help Center</NavLink>
                        </li>

                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/biodatas' >
                                <FaUsers></FaUsers>Settings</NavLink>
                        </li>
                        <li >
                            <NavLink onClick={() => Logout().then().catch()} className='flex items-center font-bold gap-2' ><FaSignOutAlt></FaSignOutAlt> Logout</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-200 overflow-y-scroll">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    )
}
export default Home;