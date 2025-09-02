import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";

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

      <div className="flex gap-5">
          <JobDesc/>
      </div>
    </div>
  );
};

export default JobDescPage;
