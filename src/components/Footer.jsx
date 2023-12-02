import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="relative flex items-center justify-center bg-transparent py-4 px-2 w-full h-full">
        <div className="max-w-full py-4 px-2 w-full text-center font-bold">
          <p>&copy; 2023 Explore UNCAus.</p>
          <p>Desarrolladores</p>
          <div><a href="#">Narela: delvis.N.LOT@gmail.com</a></div>
          <div><a href="#">Agustín: agustingodoyomg@gmail.com</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;