import { work } from "../Data/Data";

const Working = () => (
  <div className="mt-20 pb-5">
    <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
      How it <span className="text-royal-purple-400">Works</span>
    </div>
    <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
      Explore tailored job opportunities aligned with your skills. Start your career journey today!
    </div>
    <div className="flex px-16 justify-between items-center">
      <div>
        <img className="w-[20rem]" src="/Working/girlReferral.png" alt="girl" />
      </div>
      <div className="flex flex-col gap-10">
            {
                work.map((item,index)=><div key={index} className="flex items-center gap-4">
                <div className="p-2.5 bg-royal-purple-300 rounded-full">
                    <img className="h-20 w-20" src={`/Working/${item.name}.png`} alt={item.name} />
                </div >
                <div>
                    <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                    <div className="text-mine-shaft-300">{item.desc}</div>
                </div>
                </div>)
            }
      </div>
    </div>
  </div>
);
export default Working;
