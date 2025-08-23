import { Divider } from "@mantine/core";
import SearchBar from "../OfferRefferals/SearchBar";


const OfferRefferalsPage=()=>{
    return(
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <SearchBar/>
        <Divider size="xs" mx="md"/>
    </div>
    )

}
export default OfferRefferalsPage;