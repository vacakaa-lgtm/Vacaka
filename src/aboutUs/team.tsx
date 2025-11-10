import React from "react";
import { teamMembers, type TeamMember } from "../data";
import { Images } from "../constants/svgPaths";
interface TeamMemberCardProps {
  member: TeamMember;
}

interface TeamSectionProps {
  members?: TeamMember[];
  title?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="relative">
      <div className=" py-4 rounded-lg shadow-md">
        <img
          src={member.image}
          alt={member.name}
          className="w-60 h-60 object-cover rounded scale-130"
        />
        {/* <span className="font-bold text-sm tracking-wide text-black block mt-2 text-center">
          {member.name}
        </span> */}
        <div className="flex z-10">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-8 -right-16 rounded-full shadow-lg transition-colors duration-200"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <img
                src={Images.MEET_TEAM_LINKEDIN}
                alt="LinkedIn"
                className="w-14 h-14 object-cover"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC<TeamSectionProps> = ({
  members = teamMembers,
  title = "MEET THE TEAM",
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
