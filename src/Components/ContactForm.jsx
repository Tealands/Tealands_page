import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
        <input 
          type="text" 
          placeholder="Project collaboration"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
        <textarea 
          rows="5"
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-300"
        ></textarea>
      </div>

      <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-200">
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;