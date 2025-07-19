import React from 'react';

const Signup = () => {
  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center px-4" data-aos="zoom-in">
      <div className="bg-[#1E1E1E] p-8 rounded-lg border border-[#444444] w-full max-w-sm">
        <h2 className="text-2xl text-[#E0E0E0] font-semibold mb-6 text-center">Create Your Account</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-[#121212] border border-[#444444] text-[#E0E0E0] rounded" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-[#121212] border border-[#444444] text-[#E0E0E0] rounded" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-[#121212] border border-[#444444] text-[#E0E0E0] rounded" />
          <button type="submit" className="w-full bg-[#888888] text-black py-2 rounded hover:bg-[#B0B0B0]">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
