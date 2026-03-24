import React from 'react';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0F1626]">
      <main className="w-full max-w-sm sm:max-w-[26rem] bg-gradient-to-b from-[#2B3544] to-[#1F2735] rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-gray-700/30">
        
        {/* Logo */}
        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)]">
          <img 
            src={logo} 
            alt="BK-Reports Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-white text-center mb-4 tracking-wide uppercase flex items-center gap-2">
          BK REPORTS™ <span className="text-2xl">🔥</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-300/90 text-center text-[14px] leading-relaxed mb-8 font-light">
          Daily clean & structured updates delivered<br/>
          directly to your Telegram. No spam. No<br/>
          confusion. Just useful insights you can rely on.
        </p>

        {/* Features List */}
        <div className="w-full mb-8 space-y-3 px-2">
           <div className="flex items-center space-x-2 text-gray-200">
              <span className="text-white text-sm">✔</span>
              <span className="text-[14.5px] font-light tracking-wide">No spam, only genuine updates</span>
            </div>
             <div className="flex items-center space-x-2 text-gray-200">
              <span className="text-white text-sm">✔</span>
              <span className="text-[14.5px] font-light tracking-wide">Easy-to-understand information</span>
            </div>
             <div className="flex items-center space-x-2 text-gray-200">
              <span className="text-white text-sm">✔</span>
              <span className="text-[14.5px] font-light tracking-wide">Real-time alerts & notifications</span>
            </div>
             <div className="flex items-center space-x-2 text-gray-200">
              <span className="text-white text-sm">✔</span>
              <span className="text-[14.5px] font-light tracking-wide">Safe, private & secure community</span>
            </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://t.me/+Qd4nn6kIPdcxYzFl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block text-center py-[14px] px-6 bg-[#3AA1E3] hover:bg-[#318bc4] text-white font-bold text-[16px] rounded-xl shadow-[0_0_20px_rgba(58,161,227,0.3)] transition-all duration-300"
        >
          Join Channel Now
        </a>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-[11px] tracking-wider font-light">
          <p>© 2025 • All rights reserved • Telegram Community</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
