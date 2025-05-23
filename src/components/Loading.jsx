export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-cream-100">
            <div className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin mb-4">
                <div className="w-full h-full bg-orange-200 rounded-full animate-pulse"></div>
            </div>
            <p className="text-orange-600 text-lg font-poppins-extrabold">Loading...</p>
        </div>
    );
}
