interface member {
  id: string | number;
  name: string;
  imageUrl: string;
  description: string;
  imageAlt?: string;
  imageOnRight?: boolean;
}

interface TeamMemberCardProps {
  member: member;
}

const teamMembers: member[] = [
  {
    id: 1,
    name: "Kaushal Sethi",
    imageUrl: "/images/kaushal.jpg",
    description: "Kaushal is the creative force behind Vacaka.AI's product vision and experience design. Kaushal brings imagination to intelligence. With a background that blends HR, design thinking, and AI strategy, he shapes how Vacaka.AI feels — not just how it functions. From crafting the brand's narrative voice to building intuitive AI systems, Kaushal bridges creativity with computation. He believes technology should move like art and sound like emotion."
  },
  {
    id: 2,
    name: "Deepasha",
    imageUrl: "/images/member2.jpg",
    description: "An MBA–HR mind with an artist’s heart, Deepasha blends empathy with enterprise. She’s the bridge between people and product — ensuring every innovation at Vācaka.AI stays rooted in human understanding, creative culture, and strategic clarity. Her vision keeps the brand soulful as it scales.",
    imageOnRight: true
  },
  {
    id: 3,
    name: "Sahil Thakur",
    imageUrl: "/images/member2.jpg",
    description: "The calm mind behind the structure. Sahil brings precision, discipline, and foresight to the table — making sure Vācaka.AI’s growth stays compliant, ethical, and future-proof. With a deep understanding of HR governance and revenue frameworks, he ensures innovation never outpaces integrity."
  }
];


export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const imageCard = (
    <div className="flex-shrink-0">
      <div className="bg-white rounded-lg p-3 shadow-lg">
        <img
          src={member.imageUrl}
          alt={member.imageAlt || `${member.name} profile picture`}
          className="w-40 h-48 object-cover rounded-md"
        />
        <div className="mt-3 text-center">
          <h3 className="text-black font-bold text-sm uppercase tracking-wide">
            {member.name}
          </h3>
        </div>
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
    <div className="flex items-start gap-16 px-40 py-10 bg-black text-white">
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

interface TeamMemberListProps {
  members?: member[];
}

export const TeamMember: React.FC<TeamMemberListProps> = ({ members = teamMembers}) => {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};