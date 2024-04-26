import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-cyan-500 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/' >
              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className="text-slate-500 text-3xl">Q</span>
                <span className="text-slate-700 text-3xl">areeb</span>
                
              </h1>
            </Link>
            <form className='bg-slate-100 p-2 rounded-lg flex items-center '>
                <input 
                type="text" 
                placeholder="Search..."
                className='bg-transparent focus:outline-none w-24 sm:w-64' 
                />

                <FaSearch className='text-slate-600' />

        </form>

        <ul className='flex gap-4'>
            <Link to='/'>
               <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/About'>
               <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/Sign-in'>
               <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
            </Link>
        </ul>
        </div>
        
    
    </header>
  )
}
