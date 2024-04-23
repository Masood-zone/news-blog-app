import React from "react";

function AboutTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg">Name</th>
            <th className="text-lg">Index Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Data */}
          {data.map((member) => (
            <tr key={member.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={member.image_src}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium max-md:font-bold text-lg max-md:text-sm">
                      {member.name}
                    </div>
                    <div className="text-sm badge badge-neutral opacity-50">
                      {member.role}
                    </div>
                  </div>
                </div>
              </td>
              <td>{member.indexNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AboutTable;
