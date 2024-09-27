import React from 'react';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import Testimonials from './Testimonials';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />

            <div className="relative h-[88vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        Let us find your <span className="text-pink-500">Forever Food.</span>
                    </h1>
                    <p className="text-lg mb-8 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>
                    <div className="space-x-4">
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md">Search Now</button>
                        <button className="bg-white text-pink-500 hover:bg-gray-100 border border-pink-500 px-6 py-3 rounded-md">Know more</button>
                    </div>
                </div>
            </div>

            <InfoSection />
            
            <Testimonials />
            
            <Footer/>

         
        </>
    );
};

export default HomePage;
