import { talents } from "../Data/TalentData";
import Sort from "../FindReferrals/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between mt-5">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>

      {/* Grid layout for 3 equal cards per row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
