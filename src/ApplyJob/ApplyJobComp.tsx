import { Button, Divider, FileInput, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";

const ApplyJobComp=()=>{
    const [preview, setPreview]=useState(false);
    const handlePreview=()=>{
        setPreview(!preview);
        window.scrollTo({top:0, behavior:'smooth'})
    }
    return <div className="w-2/3 mx-auto"> 
        <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`/Icons/google.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl"/>

      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:1/2">
        <TextInput readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Full Name" withAsterisk placeholder="Enter name" />
        <TextInput readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}  label="Email" withAsterisk placeholder="Enter email" />
        </div>

        <div className="flex gap-10 [&>*]:1/2">
        <NumberInput readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}  label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict"/>
        <TextInput readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}  label="Personal Website" withAsterisk placeholder="Enter url" />
        </div>

        <FileInput readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}  withAsterisk
            leftSection={<IconPaperclip stroke={1.5}/>}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
        /> 

        <Textarea readOnly={preview} variant={preview ? "unstyled" :"default" } className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}  withAsterisk
            placeholder="About you..."
            label="Cover Letter"
            autosize
            minRows={4}
        />       
        {!preview && <Button onClick={handlePreview}
          color="royal-purple.4"
          variant="light"
        >
          Preview
        </Button>}
        
        {
           preview && <div className="flex gap-10 [&>*]:w-1/2">
            <Button fullWidth onClick={handlePreview}
                color="royal-purple.4"
                variant="outline"
                >
                Edit
            </Button>

            <Button fullWidth onClick={handlePreview}
                color="royal-purple.4"
                variant="light"
                >
                Submit
            </Button>

           </div>
        }
      </div>
    </div>
}
export default ApplyJobComp;