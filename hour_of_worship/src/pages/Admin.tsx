// import { useEffect, useState } from "react";

// const Admin = () => {
//     const [registrations, setRegistrations] = useState([]);

//     useEffect(() => {
//         const fakeData = [
//             {
//                 id: 1,
//                 name: "Raphael Onuoha",
//                 phone: "07053077873",
//                 email: "ddralpho@gmail.com",
//                 prayer: "Prayer for financial breakthrough"
//             },
//         ];

//         setRegistrations(fakeData);
//     }, []);
//     return (
//         <div className="min-h-screen bg-gray-100 px-4 py-10">
//             <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

//             <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
//                 <table className='w-full borer-collapse'>
//                     <thead>
//                         <tr className="bg-indigo-600 text-white">
//                             <th className="py-3 px-4 text-left">Name</th>
//                             <th className="py-3 px-4 text-left">Phone</th>
//                             <th className="py-3 px-4 text-left">Email</th>
//                             <th className="py-3 px-4 text-left">Prayer Request</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {registrations.map((r) => (
//                             <tr key={r.id} className="border-b hover:bg-gray-50">
//                                 <td className="py-3 px-4">{r.name}</td>
//                                 <td className="py-3 px-4">{r.phone}</td>
//                                 <td className="py-3 px-4">{r.email}</td>
//                                 <td className="py-3 px-4">{r.prayer || "-"}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Admin;