import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ExcelAnalytics</h1>
          <div className="space-x-6 text-sm font-medium flex items-center">
            <Link to="#" className="relative group inline-block pb-1">
              <span className="text-gray-700 group-hover:text-blue-600">Home</span>
              <span className="underline-hover"></span>
            </Link>
            <Link to="#features" className="relative group inline-block pb-1">
              <span className="text-gray-700 group-hover:text-blue-600">Features</span>
              <span className="underline-hover"></span>
            </Link>
            <Link to="#how" className="relative group inline-block pb-1">
              <span className="text-gray-700 group-hover:text-blue-600">How it Works</span>
              <span className="underline-hover"></span>
            </Link>
            <Link to="#contact" className="relative group inline-block pb-1">
              <span className="text-gray-700 group-hover:text-blue-600">Contact</span>
              <span className="underline-hover"></span>
            </Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <section className="text-center py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Visualize Your Excel Data Smarter
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Upload Excel files, choose your axes, and generate stunning 2D/3D charts – all in one place.
          </p>
          <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 hover:scale-105">
            Get Started
          </Link>
        </div>
      </section>

      <section id="features" className="py-20 bg-white px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {[
            { title: "📄 Excel Upload", desc: "Upload .xls/.xlsx files easily using a drag-and-drop interface." },
            { title: "📊 Dynamic Charting", desc: "Render 2D/3D charts with Chart.js and Three.js libraries." },
            { title: "📅 Download Graphs", desc: "Download visualizations as PNG or PDF formats." },
            { title: "🔐 Secure Auth", desc: "JWT-based login for users and admins." },
            { title: "📈 Upload History", desc: "Access past uploads and generated charts." },
            { title: "🤖 AI Insights", desc: "Optional AI-generated summaries from uploaded data." },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="py-24 bg-gray-100 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {[
            { step: "1️⃣", title: "Upload Excel", desc: "Choose or drag & drop your Excel file to start analysis." },
            { step: "2️⃣", title: "Select Axes", desc: "Pick X & Y columns from your Excel sheet." },
            { step: "3️⃣", title: "Visualize & Download", desc: "Render and download your customized chart." },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-5xl text-blue-600 mb-4">{item.step}</div>
              <p className="text-xl font-semibold mb-2">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-white py-6 text-center text-sm text-gray-500 border-t">
        &copy; 2025 ExcelAnalytics | Made for Zidio MERN Internship | Contact: hr@zidio.in
      </footer>
    </>
  );
}
