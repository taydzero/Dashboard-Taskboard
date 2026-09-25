import { 
    Mail,
    Shield,
 } from "lucide-react";

function MemberCard({ member }) {
  return (
    <div
      className="
        w-full
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        hover:shadow-md
        transition
        cursor-pointer
        flex
        flex-col
      "
    >
      <div className="flex items-center gap-3 mb-4">
        {/* <div
          className={`w-12 h-12 rounded-xl ${project.color}`}
        /> */}

        <div>
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
    {member.name[0]}
</div>
          <h3 className="font-semibold text-lg">
            {member.name}
          </h3>

          <p className="text-sm text-gray-500">
            {member.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
    <div
        className={`
            w-2 h-2 rounded-full
            ${
                member.status === "online"
                    ? "bg-green-500"
                    : "bg-gray-400"
            }
        `}
    />

    <span>{member.status}</span>
</div>

      <div
        className="
          flex
          justify-between
          text-sm
          text-gray-500
          mt-auto
          pt-5
        "
      >
        <div className="flex items-center gap-2">
            <Mail size={16} />
            {member.email}
        </div>

        <div className="flex items-center gap-2">
            <Shield size={16} />
            {member.permissions}
        </div>
      </div>
    </div>
  );
}

export default  MemberCard;