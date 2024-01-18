import { FaBell } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

export default function Header() {
    return(
        <header>
            <div className='flex'>
                {/* Lado esquerdo */}

                <div className='border-gray-200 border-2 border-b-0 w-[15%] flex items-center justify-end pr-4'>
                    <FaAngleLeft />
                </div>

                {/* Lado direito */}

                <div className='w-[85%] bg-blue-500'>
                    <div className='flex justify-between items-center p-4'>
                        <p className='text-sm text-white'>Dashboard</p>
                        <FaBell size={20} color='#FFF' />
                    </div>
                </div>
            
            </div>
        </header>
    )
}