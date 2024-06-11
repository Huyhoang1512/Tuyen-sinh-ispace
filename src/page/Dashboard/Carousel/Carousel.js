import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://sheet.best/api/sheets/2cd626b2-0c71-450d-81ea-a9aad6841c17');
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <table className="min-w-full bg-orange">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray">Họ Tên</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray">Số Điện Thoại</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray">Đối Tượng</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray">Khóa Học</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{row.Name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.Email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.Phone}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.Target}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.Program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
