import {GiMountedKnight} from 'react-icons/gi';

function Navbar() {
  return (
    <div className="container bg-gray-800 text-white text-4xl p-1 mx-auto rounded-lg">
    
        <a href='/home'>
        <GiMountedKnight className=' inline text-6xl ml-1 mb-1'/>
        <h1 className='font-makh inline align-[-4px] h-auto'>Hidalgo</h1>
        </a>
    </div>
  )
}

export default Navbar