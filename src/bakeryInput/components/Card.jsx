export default function Card({ title, children }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 p-6">
        <div className="bg-rose-50 p-6 rounded-lg shadow-lg w-165">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-pink-900 font-semi">
            {title}
          </h2>
          {children}
        </div>
      </div>
    );
  }
  