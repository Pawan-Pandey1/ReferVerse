import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";

const Company=()=>{
    return <div className="w-3/4">
               <div className="relative">
                    <img className="rounded-t-2xl" src="/Profile/BannerImage.png" alt="" />
                    <img className="h-36 w-36 rounded-3xl -bottom-1/4 absolute left-5 border-mine-shaft-950 border-8 p-2 bg-mine-shaft-950" src="/Icons/Google.png" alt="" />
                </div>
                <div className="px-3 mt-20">
                        <div className="text-3xl font-semibold flex justify-between">Google
                            <Avatar.Group>
                                <Avatar src="avatar.png" />
                                <Avatar src="avatar.png" />
                                <Avatar src="avatar.png" />
                                <Avatar>+10k</Avatar>
                            </Avatar.Group>
                        </div>
                        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />
                        New York, United States
                        </div>
                    <Divider mx="xs" my="xl"/>
                    <div>
                        <Tabs  variant="outline" radius="lg" defaultValue="about">
                            <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-royal-purple-400">
                                <Tabs.Tab value="about">About</Tabs.Tab>
                                <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                                <Tabs.Tab value="employees">Employees</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                            <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
                            <Tabs.Panel value="employees">Employees</Tabs.Panel>

                        </Tabs>
                    </div>
                </div>
        </div>
}
export default Company;