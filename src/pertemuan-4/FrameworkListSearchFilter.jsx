import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");
const [dataForm, setDataForm] = useState({
	searchTerm: "",
	selectedTag: "",
	/*Tambah state lain beserta default value*/
	});

// Handle perubahan nilai input form
const handleChange = (evt) => {
	const { name, value } = evt.target;
	setDataForm({
		...dataForm,
		[name]: value,
	});
};

  const _searchTerm =dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        // onChange={(e)=> setSearchTerm(e.target.value)}
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        // onChange={(e)=> setSelectedTag(e.target.value)}
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-1">{item.description}</p>

          <p className="text-gray-600 mt-1">
            Developed by:{" "}
            <span className="font-semibold">{item.details.developer}</span> (
            {item.details.releaseYear})
          </p>

          <p
            href={item.details.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 mt-2 font-medium"
          >
            🔗 Visit Website
          </p>

          <h3 className="text-green-600 text-md font-medium mb-2">
            {item.details.developer}
          </h3>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
