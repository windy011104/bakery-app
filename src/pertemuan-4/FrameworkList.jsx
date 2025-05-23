import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
        {frameworkData.map((item) => (
          <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{item.name}</h2>

            <p className="text-gray-600 mt-1">{item.description}</p>

            <p className="text-gray-600 mt-1">
                Developed by:{" "}
            <span className="font-semibold">{item.details.developer}</span>{" "}
                    ({item.details.releaseYear})
            </p>

            <p
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 mt-2 font-medium"
            >🔗 Visit Website</p>
      
            <h3 className="text-green-600 text-md font-medium mb-2">{item.details.developer}</h3>
      
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full">
                  {tag}</span> ))}
            </div>
          </div>
        ))}
      </div>
    )      
}