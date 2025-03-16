
import React from 'react';

const Background = () => {
  return (
    <>
      {/* Main background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black to-gray-900 z-[-2]" />
      
      {/* Grid pattern */}
      <div 
        className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxODE4MTgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDEwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBTNDAgMTUuNTIzIDQwIDEwczQuNDc3LTEwIDEwLTEwIDEwIDQuNDc3IDEwIDEweiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTIwIDYwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBTMCA1NS41MjMgMCA1MHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]
        opacity-30 z-[-1]"
      />
      
      {/* Subtle noise texture */}
      <div 
        className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]
        z-[-1] opacity-20"
      />
      
      {/* Radial gradient light in center */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] z-[-1] opacity-30 animate-pulse-slow"
      />
      
      {/* Subtle glow at the top */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 blur-[100px] z-[-1] opacity-30"
      />
    </>
  );
};

export default Background;
