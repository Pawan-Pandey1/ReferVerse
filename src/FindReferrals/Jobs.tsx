import { jobList } from "../Data/JobData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>

      {/* Use grid for cleaner layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
