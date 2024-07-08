import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '10rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const AntCarousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="https://m.media-amazon.com/images/I/816Q6G02a+L._AC_UY580_.jpg" className='w-full h-full' /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://cdna.lystit.com/200/250/tr/photos/kickscrew/371f7a1e/nike-blue-Nfl-X-Air-Zoom-Pegasus-38-chicago-Bears.jpeg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://cdn.dribbble.com/users/2247428/screenshots/15112194/media/bb568aeb7ec1da74e5f71d00357fc368.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="public/shoesCarousel.png" alt="" /></h3>
    </div>
  </Carousel>
);

export default AntCarousel;