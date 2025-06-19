import { Avatar, Indicator } from "@mantine/core";
import {IconBell, IconRun, IconSettings } from "@tabler/icons-react";

const Header=()=>{
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center ">
        <div className="flex gap-1 items-center text-royal-purple-400">
            <IconRun className="h-8 w-8 " stroke={2.5}/>
            <div className="text-3xl font-semibold">ReferVerse</div>
        </div>
        <div className="flex gap-5">
            <a href="">Find Job</a>
            <a href="">Find Talent</a>
            <a href="">Upload Jobs</a>
            <a href="">About Us</a>
        </div>
        <div  className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                    <div>Pawan</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="royal-purple.4" offset={6}  size={8} processing>
                        <IconBell  stroke={1.5}/>
                    </Indicator>
            </div>

        </div>
    </div>
}
export default Header;