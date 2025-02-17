import {GiMountedKnight} from 'react-icons/gi';

import AboutModal from './AboutModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="container flex justify-between
    bg-gray-800 text-white text-4xl p-1 mx-auto rounded-lg">
    
        <a href='/home'>
        <GiMountedKnight className=' inline text-6xl ml-1 mb-1'/>
        <h1 className='font-makh inline align-[-4px] h-auto'>Hidalgo</h1>
        </a>
        <button
                className="px-4 py-2 m-1 bg-gray-600
                           text-white rounded-lg font-makh text-2xl"
                onClick={() => setModalOpen(true)}
            >
                About
            </button>
            {createPortal(
    <AboutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />,
    document.getElementById('root')
    )}

    </div>
  )
}

export default Navbar