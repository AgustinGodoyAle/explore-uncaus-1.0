import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="relative overflow-y-hidden flex items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <div>
            <p>&copy; 2023 Explore UNCAus. Todos los derechos reservados.</p>
            <div><a href="#">Facebook</a></div>
            <div><a href="#">Twitter</a></div>
            <div><a href="#">Instagram</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;