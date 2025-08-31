import { Divider } from "@mantine/core";
import SearchBar from "../OfferRefferals/SearchBar";
import TalentCard from "../OfferRefferals/TalentCard";
import Talents from "../OfferRefferals/Talents";


const OfferRefferalsPage=()=>{
    return(
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <SearchBar/>
        <Divider size="xs" mx="md"/>
        <Talents/>
    </div>
    )

}
export default OfferRefferalsPage;