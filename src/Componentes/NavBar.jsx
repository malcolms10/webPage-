import { MdDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiHistogram } from "react-icons/gi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";

export default function NavBar() {
    return(
        <>
            <div className='w-[15%] border-gray-200 border-2 border-t-0'>
                <div className=''>
                    <ul className='flex-col items-center justify-between p-2 space-y-2'>
                        <li className='flex items-center gap-3'><MdDashboard /> Dashboard</li>
                        <li className='flex items-center gap-3'><IoMdCart /> Orders</li>
                        <li className='flex items-center gap-3'><BsFillPeopleFill /> Costumers</li>
                        <li className='flex items-center gap-3'><GiHistogram /> Reports</li>
                        <li className='flex items-center gap-3'><HiMiniSquare3Stack3D /> Integrations</li>
                    </ul>
                </div>
                
                <div className='border-gray-200 border-t-2 p-2'>
                    <p className='text-sm text-center text-gray-500'>Saved reports</p>
                    <ul className='flex-col items-center justify-between p-2 space-y-2'>
                        <li className='flex items-center gap-3'><CgNotes /> Current month</li>
                        <li className='flex items-center gap-3'><CgNotes /> Last quarter</li>
                        <li className='flex items-center gap-3'><CgNotes /> Year-end sale</li>
                    </ul>
                
                </div>
            </div>
        </>
        
    )
}