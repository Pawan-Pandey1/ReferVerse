import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob= ()=>{
    return(
        <div className="flex items-center px-20">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-royal-purple-400">Find your <span>dream</span> <span>job</span> with us</div>
                <div className="text-lg text-mine-shaft-100">Good life begins with a good company. Start exploring thousands of jobs in one place.</div>
                <div className="flex gap-3 mt-5"> 
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Fulltime"
                    />
                    <div className="flex items-center justify-center h-full w-20 bg-royal-purple-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-royal-purple-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]"/>
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/JobOffer2.png" alt="job" className="w-80 mx-auto" />
                    <div className="absolute right-10 w-fit top-[50%] border border-royal-purple-400 rounded-lg p-2 backdrop-blur-md bg-white/10 shadow-lg">
                        <div className="text-center mb-1 text-mine-shaft-100">Get your referral</div>
                        <Avatar.Group>
                            <Avatar src="image.png" />
                            <Avatar src="image.png" />
                            <Avatar src="image.png" />
                            <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute left-10 w-fit top-[28%] border border-royal-purple-400 rounded-lg p-2 backdrop-blur-md bg-white/10 shadow-lg gap-3 flex-col">
                        <div className="flex gap-2 items-center ">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="./google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">Bangalore</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 day ago</span>
                            <span>100+ Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DreamJob;