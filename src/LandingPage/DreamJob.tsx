import { TextInput } from "@mantine/core";

const DreamJob= ()=>{
    return(
        <div className="flex items-center px-20">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-royal-purple-400">Find your <span>dream</span> <span>job</span> with us</div>
                <div className="text-lg text-mine-shaft-100">Good life begins with a good company. Start exploring thousands of jobs in one place.</div>
                <div className="flex gap-3"> 
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
                    <div></div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/JobOffer2.png" alt="" />
                </div>
            </div>
        </div>
    );
}
export default DreamJob;