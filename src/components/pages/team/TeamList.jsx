import MemberCard from "./MemberCard";

function TeamList({ members, view }) {
  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-6"
          : "flex flex-col gap-4 p-6"
      }
    >
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          view={view}
        />
      ))}
    </div>
  );
}

export default TeamList;