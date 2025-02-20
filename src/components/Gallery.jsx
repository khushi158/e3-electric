import React from "react";
import image1 from '../assets/image (5).svg';


const MotorView = () => {
  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4 max-w-4xl">
        
        
        <div className="relative group rounded-xl overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          High Efficiency Motor
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Advanced design for maximum performance and reliability
        </p>
          <img
            src={image1}
            alt="Exploded view of motor components showing internal parts and assembly"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 ">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorView;