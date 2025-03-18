/* eslint-disable react/prop-types */


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleClick = (e) => {
        if (e.target.id !== 'outside')
            return;
        onClose();
    }
    return (
        <div id='outside' className="fixed z-20 inset-0 flex
                        items-start justify-center h-100% 
                        bg-black/75" onClick={handleClick}>
            <div className="bg-gray-600 rounded-xl
                            shadow-lg p-6 m-2 max-w-5xl top-5 md:top-15
                            w-4/5 absolute overflow-y-auto overscroll-none max-h-[90vh]">
                <button
                    className="absolute top-2 right-2 text-2xl
                               text-gray-200 hover:text-gray-700
                               cursor-pointer
                               bg-gray-700 hover:bg-gray-200 px-3 py-1 rounded-3xl"
                    onClick={onClose}
                >
                    &#x2715; {/* Close button */}
                </button>
                {children}
            </div>
        </div>
    );
};


export default Modal;