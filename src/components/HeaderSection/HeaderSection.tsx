'use client';
import React from 'react';

const HeaderSection = () => {
  return (
    <div className="w-full bg-white py-4 px-8 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-green-500 border border-gray-400"></div>
        <div className="w-3 h-3 rounded-full border bg-yellow-500 border-gray-400"></div>
        <div className="w-3 h-3 rounded-full border bg-red-500 border-gray-400"></div>
      </div>
      <div className="flex items-center space-x-2">
        {/* SVG for document icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM12 11H6V13H12V11ZM12 15H6V17H12V15Z" fill="#333333"/>
        </svg>
        <span className="text-gray-800 font-medium">about page</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4L6 8L10 4" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="w-4 h-4"></div> {/* Placeholder for right side if needed */}

      {/* Timeline/Ruler */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`h-2 ${i % 5 === 0 ? 'w-px bg-gray-400' : 'w-px bg-gray-300'}`}></div>
        ))}
        <div className="absolute left-[20%] bottom-0 w-3 h-4 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-180"></div>
        <div className="absolute left-[80%] bottom-0 w-3 h-4 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-180"></div>
      </div>
    </div>
  );
};

export default HeaderSection; 