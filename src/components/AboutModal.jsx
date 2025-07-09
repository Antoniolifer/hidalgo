/* eslint-disable react/prop-types */
import Modal from "./Modal";

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white text-xl">
        <h2 className="text-2xl underline font-bold my-2">About Hidalgo</h2>
        <p>
          <span className="bg-gray-700 text-xl px-8 lg:px-42 py-2 my-6 text-center rounded-2xl inline-block">
            <i>Hidalgo</i> is a task manager, focused on practical utility
            and providing a satisfying, polished experience.
          </span>
          <br />
          It was developed using <strong>React</strong> and <strong>Tailwind</strong>, and it is built with <strong>vite</strong>.
          <br />
          <br />
          My name is Anton Serdiuk and I am a Javascript & React developer from
          Perth, WA.
          <br />
          <br />
          Check out my code and read about this project&apos;s development on
          the{" "}
          <a
            href="https://github.com/Antoniolifer/hidalgo"
            target="_blank"
            className="text-blue-400 underline font-bold underline-offset-3 cursor-pointer w-5"
          >
            github repo
          </a>
          .
        </p>

        <p className="text-lg italic mt-10 mb-8 font-thin">
          I have created this app for expanding my practical knowledge of React.js, showcasing my developer skills, and because I was inspired to create a convenient, unique task manager that my friends and the wider internet community would enjoy using.
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
