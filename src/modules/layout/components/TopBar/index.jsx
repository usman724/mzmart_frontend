import React from "react";

const TopBar = () => {
  return (
    <div style={{background:"#f7941d"}} className="fixed top-0 w-full text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-center lg:w-full">
            <a href="#" className="text-sm font-medium">
              FREE TRACKED DELIVERY ON ORDERS OVER £150 |  EXPERTS SINCE 2020
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default TopBar;
