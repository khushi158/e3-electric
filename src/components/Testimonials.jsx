import React from "react";
import one from "../assets/image (9).svg";
import two from "../assets/image (10).svg";
import three from "../assets/image (11).svg";

const TestimonialCard = ({ name, role, quote, avatar }) => (
  <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
    {/* Star Ratings */}
    <div className="flex justify-center mb-4">
      {"★★★★★".split("").map((star, index) => (
        <span key={index} className="text-yellow-500 text-lg">★</span>
      ))}
    </div>

    {/* Quote */}
    <p className="text-gray-700 italic text-center mb-4">"{quote}"</p>

    {/* Profile Section */}
    <div className="flex items-center justify-center">
      <img
        src={avatar || "/placeholder.svg"}
        alt={name}
        className="w-12 h-12 rounded-full mr-3"
      />
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Serhiy Hipskyy",
      role: "CEO, Universal",
      quote:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      avatar: one,  // ✅ Corrected
    },
    {
      name: "Justus Menke",
      role: "CEO, Enronman",
      quote:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      avatar: two,  // ✅ Corrected
    },
    {
      name: "Britain Eriksen",
      role: "CEO, Universal",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      avatar: three,  // ✅ Corrected
    },
  ];

  return (
    <section id="testimonials" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
