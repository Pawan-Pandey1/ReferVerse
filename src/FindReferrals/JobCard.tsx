import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const JobCard = (props: any) => {
  return (
    <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-full h-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_purple] !shadow-royal-purple-400">
      
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>

      {/* Tags Row - FIXED (natural width, not equal stretching) */}
      <div className="flex flex-wrap gap-2">
        <div className="py-1 px-3 bg-mine-shaft-800 text-royal-purple-400 rounded-lg text-xs text-center">
          {props.experience}
        </div>
        <div className="py-1 px-3 bg-mine-shaft-800 text-royal-purple-400 rounded-lg text-xs text-center">
          {props.jobType}
        </div>
        <div className="py-1 px-3 bg-mine-shaft-800 text-royal-purple-400 rounded-lg text-xs text-center">
          {props.location}
        </div>
      </div>

      {/* Job Description */}
      <Text
        className="!text-xs text-justify !text-mine-shaft-300"
        lineClamp={3}
      >
        {props.description}
      </Text>

      <Divider size="xs" color="mine-shaft.7" />

      {/* Salary + Posted Row */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">
          ₹{props.package}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-4 w-4" stroke={1.5} />
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
