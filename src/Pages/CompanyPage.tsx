import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../Company Profile/Company";
import CompanyJobs from "../Company Profile/CompanyJobs";

const CompanyPage=()=>{
    const navigate=useNavigate();

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        {/* <Divider size="xs" mx="md"/> */}
        <Button
          leftSection={<IconArrowLeft size={20} />}
          my="md"
          onClick={()=>navigate(-1)}
          color="royal-purple.4"
          variant="light"
        >
          Back
        </Button>
        <div className="flex gap-5">
            <Company/>
        </div>
    </div>
}
export default CompanyPage;