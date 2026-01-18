import React from 'react';

const Banners = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.mod.go.jp/gsdf/jieikanbosyu/about/recruit/yobijieikanho.html" target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-pink-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-red-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src="src/assets/MOD.png" alt="" className="w-10 h-10 rounded-full border-2 border-white bg-white" />
          <span>
            予備自衛官補って<br></br>
            知ってますか？<br className="md:hidden" />
          </span>
        </a>
      </div>

      <div className="w-full h-28 flex items-center justify-center">
        <a href="https://www.flightsimulator.com/" target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-white text-white px-14 py-2 rounded-lg shadow-lg font-bold text-lg hover:from-blue-800 hover:to-gray-900 transition duration-300 ease-in-out w-full h-full">
          <img src="src/assets/MSF.jpeg" alt="Microsoft Flight Simulator 2024" className="w-12 h-10 rounded-full border-2 border-white bg-white" />
          <span>
           Microsoft Flight Simulator 2024<br className="md:hidden" />
           好評発売中！
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banners;