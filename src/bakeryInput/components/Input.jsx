export default function Input({ label, type, placeholder, onChange }) {
    return (
      <div className="mb-3">
        <label className="block text-pink-700 font-semibold mb-1">{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          onChange={onChange} 
          className="w-full p-2 border border-pink-300 rounded bg-pink-50 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />
      </div>
    );
  }
  