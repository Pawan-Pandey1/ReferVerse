import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Card = (props: any) => {
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

        {props.saved ? (
        <IconBookmarkFilled className="text-royal-purple-400 cursor-pointer" />
        ) : (
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
        )}

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
          {(props.applied || props.interviewing) ? "Applied ":props.offered ? "Interviewd ":"Posted "}{props.postedDaysAgo} days ago
        </div>
      </div>

    {(props.offered || props.interviewing) && <Divider size="xs" color="mine-shaft.7" />}
      {
        props.offered && <div className="flex gap-2">
            <Button color="royal-purple.4" variant="outline" fullWidth >Accept</Button>
            <Button color="royal-purple.4" variant="light" fullWidth >Reject</Button>
        </div>
      }
      {
        props.interviewing && <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth className="text-royal-purple-400 w-5 h-5" stroke={1.5} />Sunday, 30 September &bull; <span className="text-mine-shaft-400">10:00 AM</span>
        </div>
      }
    </Link>
  );
};

export default Card;
