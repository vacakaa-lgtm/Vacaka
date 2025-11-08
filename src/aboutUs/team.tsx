import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  image: string;
  description?: string;
  linkedinUrl?: string;
  imageOnRight?: boolean;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

interface TeamSectionProps {
  members?: TeamMember[];
  title?: string;
}

 const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'KAUSHAL SETHI',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      linkedinUrl: 'https://linkedin.com/in/example1'
    },
    {
      id: '2',
      name: 'DEEPASHA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedinUrl: 'https://linkedin.com/in/example2'
    },
    {
      id: '3',
      name: 'SAHIL THAKUR',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      linkedinUrl: 'https://linkedin.com/in/example3'
    }
  ];

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <img
          src={member.image}
          alt={member.name}
          className="w-50 h-50 object-cover rounded"
        />
        <span className="font-bold text-sm tracking-wide text-black block mt-2 text-center">{member.name}</span>
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-6 -right-14 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection: React.FC<TeamSectionProps> = ({ members = teamMembers,
  title = "MEET THE TEAM" 
}) => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-4xl font-bold mb-16 tracking-wider">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center gap-40 max-w-6xl">
        {members.map((member: TeamMember) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};


export default TeamSection;