import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/find-referrals">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="royal-purple.4"
          variant="light"
        >
          Back
        </Button>
      </Link>

      {/* Flex wrapper for JobDesc + RecommendedJobs */}
      <div className="flex gap-6 justify-around">
        {/* Left side: JobDesc (2/3 width) */}
        <div className="w-2/3">
          <JobDesc />
        </div>

        {/* Right side: RecommendedJobs (1/3 width) */}
        <div className="w-1/3">
          <RecommendedJobs />
        </div>
      </div>
    </div>
  );
};

export default JobDescPage;
