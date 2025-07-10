import { useState } from 'react';
import { Header } from "../components/Header";

export const Compare = () => {
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [submittedTags, setSubmittedTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tag1.trim()) {
      setSubmittedTags([...submittedTags, tag1.trim()]);
      setTag1('');
      setTag2('');
    }
  };

  return (
    <div className="w-full min-h-screen relative fadeIn flex flex-col items-center bg-white">
      <Header />
      <h1 className="text-3xl font-bold text-center text-slate-800 mt-8">Comparison Form</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md mt-6 px-4 space-y-4">
        <input
          type="text"
          value={tag1}
          onChange={(e) => setTag1(e.target.value)}
          placeholder="Tag 1"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={tag2}
          onChange={(e) => setTag2(e.target.value)}
          placeholder="Tag 2"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700"
        >
          Add Tag 1
        </button>
      </form>

      <ul className="mt-6 list-disc list-inside text-slate-700">
        {submittedTags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
