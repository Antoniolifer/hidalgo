/* eslint-disable react/prop-types */
import Modal from "./Modal";


const AboutModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-white">

                <h2 className="text-2xl underline font-bold my-2">About Hidalgo</h2>
                <p className="text-md">
                    <i>Hidalgo</i> is a task manager, an app for managing your tasks and goals.<br/>

                    <span className="bg-gray-700  px-2 py-1 my-2 rounded-2xl inline-block">Convenient, minimalistic user interface, bound together with smooth animations, responsive design 
                    and a unique theme, offer the user an engaging and satisfying experience in 
                    dealing with their daily plans.</span><br/>

                    The name of this project is a reference to the title of Don Quixote - a noble knight 
                    that set himself legendary quests and challenges, in a famous Spanish novel 
                    written by Miguel de Cervantes.

                </p>
                <h2 className="text-2xl underline font-bold my-2">About the stack</h2>
                <p className="text-md">
                <span className="bg-gray-700  px-2 py-1 rounded-2xl inline-block">This frontend-only Single Page application uses Vite, <strong>React.js</strong>, and Tailwind CSS.</span><br/>
                    
                    The core of the app is done in React, and requires react-icons for the graphical assets. Animations were done in vanilla Tailwind.<br/>
                    This app uses browser local storage for persistent data between sessions, and this app is hosted on Netlify.<br/>
                </p>
                <h2 className="text-2xl underline font-bold my-2">About the author</h2>
                <p className="text-md">
                <span className="bg-gray-700  px-2 py-1  rounded-2xl inline-block">My name is Anton Serdiuk and I am a <strong>Javascript/React.js</strong> web developer from Perth, WA.</span><br/>
                    I have created this app for expanding my practical knowledge of React.js, 
                    showcasing my developer skills, and simply because 
                    I was inspired to create a convenient, unique task manager that my friends and the wider internet community would enjoy using. 
                </p>

                <button
                    className="mt-4 px-4 py-2
                            bg-blue-500 text-white
                            hover:bg-blue-600
                            rounded-lg
                            block mx-auto
                            border-2 border-white
                            cursor-pointer
                            shadow-lg shadow-cyan-400/50"
                    onClick={onClose}
                >
                    Thank you for checking out Hidalgo!
                </button>
            </div>
        </Modal>
    );
};

export default AboutModal;