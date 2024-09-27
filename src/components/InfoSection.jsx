import React from 'react';

const InfoSection = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center">

                {/* Image */}
                <div className="md:w-1/2 w-full mb-6 md:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="House Image"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 w-full md:pl-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                    </p>
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700">
                        Get in Touch
                    </button>
                </div>

            </div>
        </div>
    );
};

export default InfoSection;
