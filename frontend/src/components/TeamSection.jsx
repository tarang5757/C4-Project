import React, { useState } from 'react';

const teamMembers = [
  { name: 'Tarang Patel', initials: 'TP', role: 'Student' },
  { name: 'Jayson Amike', initials: 'JA', role: 'Student' },
  { name: 'Diane Serufuli', initials: 'DS', role: 'Student' },
  { name: 'Tandeep Sandhra', initials: 'TS', role: 'Student' },
  { name: 'Kunal', initials: 'K', role: 'Student' },
  { name: 'Jian Cheng', initials: 'JC', role: 'Student' },
  { name: 'Jacob Phillips', initials: 'JP', role: 'Student' },
  { name: 'Mianyi Huang', initials: 'MH', role: 'Student' },
  { name: 'Safiyyah Patel', initials: 'SP', role: 'Student' },
  { name: 'Kadijah Sesay', initials: 'KS', role: 'Student' },
  { name: 'Jenna Treftlin', initials: 'JT', role: 'Manager' },
  { name: 'Alina Khan', initials: 'AK', role: 'Manager' },
];

const TeamSection = () => {
  const [imageError, setImageError] = useState({});

  const handleImageError = (name) => {
    // When an image fails to load, attempt to load the .png version
    setImageError(prevState => ({
      ...prevState,
      [name]: true,
    }));
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            We are students from York University's C4 - Cross Campus Classroom platform. Through our research, we discovered the critical importance of raising awareness about food waste and the need to connect rural communities, city organizations, and farmers to ensure fresh food reaches those who need it most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const firstName = member.name.split(' ')[0]; // Extract the first name
            const imagePathJpg = `/Individual-Images/${firstName}.jpg`; // JPG image path
            const imagePathPng = `/Individual-Images/${firstName}.png`; // PNG image path
            const imageToDisplay = imageError[member.name] ? imagePathPng : imagePathJpg; // Switch to PNG if JPG fails

            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={imageToDisplay} 
                      alt={member.name} 
                      onError={() => handleImageError(member.name)} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-[#4CAF50]">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
