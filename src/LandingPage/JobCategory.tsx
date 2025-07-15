import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-royal-purple-400">Job</span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore tailored job opportunities aligned with your skills. Start your career journey today!
      </div>

      <Carousel slideSize="22%" slideGap="md" withControls>
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 border border-royal-purple-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-royal-purple-300">
              <div className="p-2 bg-royal-purple-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`./Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-royal-purple-300 text-lg">{category.jobs}+ new job posted</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
