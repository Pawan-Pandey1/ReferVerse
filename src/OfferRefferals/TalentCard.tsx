import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);
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
      {
        props.invited ? <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview : November 27, 2025 10:00 AM
        </div>:<div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>
      }
      <Divider size="xs" color="mine-shaft.7" />

      
      {/* Actions */}
      <div className="flex gap-3">
        {!props.invited && (
          <>
            <Link to="/talent-profile" className="flex-1">
              <Button color="royal-purple.4" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>

            {props.posted ? (
              <Button
                onClick={open}
                rightSection={<IconCalendarMonth className="w-5 h-5" />}
                color="royal-purple.4"
                variant="light"
                fullWidth
                className="flex-1"
              >
                Schedule
              </Button>
            ) : (
              <Button
                color="royal-purple.4"
                variant="light"
                fullWidth
                className="flex-1"
              >
                Message
              </Button>
            )}
          </>
        )}

        {props.invited && (
          <>
            <Button
              color="royal-purple.4"
              variant="outline"
              fullWidth
              className="flex-1"
            >
              Accept
            </Button>

            <Button
              color="royal-purple.4"
              variant="light"
              fullWidth
              className="flex-1"
            >
              Reject
            </Button>
          </>
        )}
      </div>

       <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        {/* Modal content */}
        <div className="flex flex-col gap-4">
             <DateInput
              value={value}
              minDate={new Date()}
              onChange={setValue}
              label="Date "
              placeholder="Enter Date"
            /> 
            <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
            <Button
            color="royal-purple.4"
            variant="light"
            fullWidth
          >
            Schedule
          </Button>
        
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
