import { jobList } from "../Data/JobData";
import JobCard from "../FindReferrals/JobCard";

const RecommendedJobs=()=>{
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5 justify-between">
            {jobList.map((job,index)=>index<6 && <JobCard key={index}{...job}/>)}
        </div>
    </div>
}
export default RecommendedJobs;