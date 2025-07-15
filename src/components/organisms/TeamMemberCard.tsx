import { TeamMember } from "@constants";
import { FC } from "react";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon } from "@components";

interface Props {
  member: TeamMember;
}

const TeamMemberCard: FC<Props> = (props: Props) => {
  const { member } = props;
  return (
    <div className="flex flex-col rounded-t-3xl overflow-hidden max-w-[400px] gap-2">
      <Image src={member.image} alt={member.name} width={400} height={444} />
      <div className="flex md:flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col gap-0">
          <h3>{member.name}</h3>
          <p className="text-grayscale-300">{member.title}</p>
        </div>
        <div className="flex flex-col self-end">
          {/* <p className="text-white underline text-xs hidden lg:block">
            Socials
          </p> */}
          <div className="flex gap-3 items-end">
            {member.twitter && (
              <TwitterIcon
                href={member.twitter}
                width={22}
                height={18}
                className="mb-0.5"
              />
            )}
            {member.linkedin && <LinkedinIcon href={member.linkedin} />}
            {/* {member.github && <TwitterIcon href={member.github} />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
