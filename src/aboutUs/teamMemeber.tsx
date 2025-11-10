import { teamMembers, type TeamMember } from "../data";

interface TeamMemberCardProps {
  member: TeamMember;
}

interface TeamMemberListProps {
  members?: TeamMember[];
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const imageCard = (
    <div className="flex-shrink-0">
      <div className="rounded-lg p-3 shadow-lg">
        <img
          src={member.image}
          alt={`${member.name} profile picture`}
          className="w-60 h-78 object-cover rounded-xl"
        />
        {/* <div className="mt-3 text-center"> */}
          {/* <h3 className="text-black font-bold text-sm uppercase tracking-wide"> */}
            {/* {member.name} */}
          {/* </h3> */}
        {/* </div> */}
      </div>
    </div>
  );

  const descriptionCard = (
    <div className="flex-1 pt-2">
      <p className="text-white leading-relaxed text-base">
        {member.description}
      </p>
    </div>
  );

  return (
    <div className="flex items-center gap-16 px-40 py-10 bg-black text-white">
      {member.imageOnRight ? (
        <>
          {descriptionCard}
          {imageCard}
        </>
      ) : (
        <>
          {imageCard}
          {descriptionCard}
        </>
      )}
    </div>
  );
};

const TeamMemberList: React.FC<TeamMemberListProps> = ({ members = teamMembers }) => {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};
export default TeamMemberList;