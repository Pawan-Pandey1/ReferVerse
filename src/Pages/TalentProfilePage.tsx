import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/Offer-Referrals">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="royal-purple.4"
          variant="light"
        >
          Back
        </Button>
      </Link>

      {/* Flex wrapper for Profile + Recommended Talent */}
      <div className="flex gap-6">
        {/* Left side: Profile (2/3 width) */}
        <div className="w-2/3">
          <Profile {...profile[0]} />
        </div>

        {/* Right side: Recommended Talent (1/3 width) */}
        <div className="w-1/3">
          <RecommendedTalent />
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
