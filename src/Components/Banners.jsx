import React from 'react';

const Banners = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.mod.go.jp/gsdf/jieikanbosyu/about/recruit/yobijieikanho.html" target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-blue-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src="src/assets/MOD.png" alt="" className="w-10 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            予備自衛官補になってみませんか？<br className="md:hidden" />
          </span>
        </a>
      </div>

      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.saitama-u.ac.jp/" target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-pink-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-red-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src="src/assets/saidai1.jpg" alt="埼玉大学" className="w-10 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            ITでも活躍中！<br className="md:hidden" />埼玉大学
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banners;