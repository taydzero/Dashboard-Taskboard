import { useState } from "react";
import TeamHeader from "./TeamHeader";
import TeamList from "./TeamList";
import membersData from "../../../data/members";

function Team() {
  const [members] = useState(membersData);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  return (
    <main className="flex-1 flex flex-col bg-gray-50">
      <TeamHeader
        view={view}
        onViewChange={setView}
        search={search}
        onSearchChange={setSearch}
        membersCount={members.length}
      />

      <TeamList
        members={members}
        view={view}
      />
    </main>
  );
}

export default Team;