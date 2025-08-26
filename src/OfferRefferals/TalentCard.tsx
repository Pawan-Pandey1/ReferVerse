import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-full h-auto flex flex-col gap-3 rounded-lg hover:shadow-[0_0_5px_1px_purple] !shadow-royal-purple-400 transition duration-300 ease-in-out min-h-[260px]">
      
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={`/${props.image}`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" stroke={1.5} />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {props.topSkills?.map((skill: any, index: any) => (
          <div
            key={index}
            className="px-3 py-1 bg-mine-shaft-800 text-royal-purple-400 rounded-lg text-xs"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* About */}
      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {props.about}
      </Text>

      <Divider size="xs" color="mine-shaft.7" />

      {/* CTC + Location */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>

      <Divider size="xs" color="mine-shaft.7" />

      {/* Actions */}
      <div className="flex gap-3">
        <Link to="/talent-profile" className="flex-1">
          <Button color="royal-purple.4" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <Button className="flex-1" color="royal-purple.4" variant="light" fullWidth>
          Message
        </Button>
      </div>
    </div>
  );
};

export default TalentCard;
