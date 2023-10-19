import MapStyled from '@qoruz/pages/contact/ContactMap/maps.style';
import React from 'react';

export default function MapContainer() {
  return (
    <MapStyled>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17518.512568360333!2d77.63637352501695!3d12.93165398352092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159749a2d959%3A0x3c70c2c3d0ae1a16!2sQoruz!5e0!3m2!1sen!2sin!4v1683714086624!5m2!1sen!2sin'
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      />
    </MapStyled>
  );
}
