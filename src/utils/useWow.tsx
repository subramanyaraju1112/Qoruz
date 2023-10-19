import { useEffect } from 'react';
const useWOW = () => {
  useEffect(() => {
    let WOW: any;
    if (typeof window !== 'undefined') {
      // window.WOW = require('wowjs');
      WOW = require('wowjs');
    }
    new WOW.WOW().init();
  }, []);
};

export default useWOW;
