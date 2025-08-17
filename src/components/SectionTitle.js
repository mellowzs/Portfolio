import React, { useRef, useEffect, useState } from 'react'

function SectionTitle({ title, className = "" }) {
  const lineRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      // Responsive maxWidth
      const isMobile = window.innerWidth <= 640; // Tailwind's sm breakpoint
      const minWidth = 100, maxWidth = isMobile ? 200 : 400;
      const minHeight = 5, maxHeight = 6;

      setWidth(minWidth + (maxWidth - minWidth) * progress);
      setHeight(minHeight + (maxHeight - minHeight) * progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial width

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex gap-10 items-center py-10 ${className}`}>
      <h1 className='text-2xl sm:text-lg text-white font-semibold'>{title}</h1>
      <div
        ref={lineRef}
        className='bg-tertiary transition-all duration-100 rounded'
        style={{ width: `${width}px`, height: `${height}px` }}
      ></div>
    </div>
  )
}
export default SectionTitle
