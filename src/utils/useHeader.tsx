import { useEffect, useState } from 'react';

const useHeader = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName('secondary-header');
      if (window.scrollY > 280 && window.scrollY < height) {
        header[0].classList.add('hide-secondary-header');
        header[0].classList.remove('show-secondary-header');
        header[0].classList.remove('fixed-secondary-header');
      } else if (window.scrollY < 292 && window.scrollY < height) {
        setIsPinned(false);
        header[0].classList.add('show-secondary-header');
        header[0].classList.remove('hide-secondary-header');
        header[0].classList.remove('fixed-secondary-header');
      } else if (window.scrollY > height) {
        header[0].classList.add('fixed-secondary-header');
        header[0].classList.remove('hide-secondary-header');

        setIsPinned(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  const getInnerHeight = (height: number) => {
    setHeight(window.innerHeight - height);
  };
  return { isPinned, getInnerHeight };
};

export default useHeader;
