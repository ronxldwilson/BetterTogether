'use client'
import React from 'react';

export default function PackagesInfo() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl text-gray-900 mb-4">Our Integrated Wellness Plans</h1>
        <p className="">
          At Better Together, we believe that lasting mental well-being is deeply connected to physical vitality.
          Our curated packages are designed by professionals to blend evidence-based therapy with energizing fitness,
          nutrition, and community support so you feel better, stronger, and more balanced every day.
        </p>
      </div>

      {/* Packages */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Package 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Therapy + Fitness Plan</h2>
          <p className="text-gray-800 text-lg mb-4">
            A comprehensive starter plan designed to support your mental and physical transformation:
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-6 space-y-1">
            <li>4 one-on-one therapy sessions with licensed professionals</li>
            <li>12 dynamic group fitness classes with certified trainers</li>
            <li>Personalized support tailored to your well-being goals</li>
            <li>Perfect for building consistency and creating balance</li>
          </ul>
          <div className="text-gray-900 font-bold text-xl mb-1">₹10,000</div>
          <p className="text-gray-500 mb-6 text-sm">1-month integrated plan</p>
          <button
            className="w-full font-medium py-2 px-4 rounded-xl"
            onClick={() => window.location.href = 'https://rzp.io/rzp/therapy-plus-fitness'}
          >
            Start Today
          </button>

        </div>

        {/* Package 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Therapy Package</h2>
          <p className="text-gray-800 text-lg mb-4">
            Extend your healing journey with focused therapeutic support:
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-6 space-y-1">
            <li>4 one-on-one therapy sessions</li>
            <li>Designed to deepen reflection and personal growth</li>
            <li>Emotional clarity and working towards personalized resolutions</li>
          </ul>
          <div className="text-gray-900 font-bold text-xl mb-1">₹3,500</div>
          <button className="w-full font-medium py-2 px-4 rounded-xl transition"
            onClick={() => window.location.href = 'https://rzp.io/rzp/therapy-package'}
          >
            Start Today
          </button>

        </div>

        {/* Package 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Bright As You Program</h2>
          <p className="text-lg text-gray-800 mb-4">
            Our most holistic offering a flagship journey for long-term well-being:
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-6 space-y-1">
            <li>4 individual therapy sessions with seasoned experts</li>
            <li>Emotional clarity and working towards personalized resolutions</li>
            <li>12 group fitness classes to build strength and confidence</li>
            <li>Optional psychiatric consultation, if needed</li>
            <li>Personalized nutrition guidance with a professional nutritionist</li>
            <li>Ongoing access to a curated community and support circles</li>
          </ul>
          <div className="text-gray-900 font-bold text-xl mb-1">₹16,000</div>
          <button className="w-full font-medium py-2 px-4 rounded-xl"
            onClick={() => window.location.href = 'https://rzp.io/rzp/bettertogether'}>
            Enroll in Full Program
          </button>
        </div>
      </div>
    </section>
  );
}
