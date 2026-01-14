import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/path-to-sunset-image.jpg')` }} // 夕焼け画像
    >
      {/* 背景の明るさを抑えるオーバーレイ */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* コンテンツコンテナ */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* 左側：入力フォーム */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact Me</h2>
          <ContactForm />
        </div>

        {/* 右側：連絡先情報 (グレー系の背景で分ける) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-slate-50/80 flex flex-col justify-center gap-6">
          <ContactInfo />
        </div>

      </div>
    </div>
  );
};

export default ContactPage;