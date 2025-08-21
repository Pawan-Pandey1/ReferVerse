import { IconBookmark } from "@tabler/icons-react";

const JobCard=()=>{
    return<div className="bg-mine-shaft-900 p-4 w-72">
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src="/Icons/Microsoft.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold">Product Designer</div>
                    <div className="text-xs text-mine-shaft-300">Microsoft &#x2022; 25 Applicants</div>
                </div>
            </div>
            <IconBookmark/>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}
export default JobCard;