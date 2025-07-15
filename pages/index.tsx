import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/workout_data.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">3-Month Workout Program</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              {data[0] && Object.keys(data[0]).map((key) => (
                <th className="border px-4 py-2" key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, i) => (
                  <td className="border px-4 py-2 text-sm" key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
