export default function Button({ label, onClick }) {
  return (
    <div className="flex justify-center">
      <button
        className="w-100 bg-blue-500 text-white p-2 rounded-lg hover:bg-pink-600 transition duration-300"
        onClick={onClick}
      >  
        {label}
      </button>
    </div>
  );
}
