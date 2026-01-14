import React from 'react';
import { Github, Linkedin, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const infoItems = [
    {
      title: "GitHub",
      value: "github.com/yourusername",
      icon: <Github className="text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      icon: <Linkedin className="text-blue-600" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Location",
      value: "Your City, Country",
      icon: <MapPin className="text-emerald-600" />,
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <>
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
          <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mr-5`}>
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{item.title}</h4>
            <p className="text-indigo-500 text-sm">{item.value}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;