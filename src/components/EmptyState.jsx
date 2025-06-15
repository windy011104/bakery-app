export default function EmptyState({ text = "Data tidak ditemukan." }) {
  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-2 rounded-lg text-center italic">
      ⚠️ {text}
    </div>
  );
}
