import { Images } from "../constants/Images";
import { CountryType } from "./interfaces";


export const getCountryImage = (country: CountryType) => 
    ({
        'UK': Images.countrys.uk,
        'Canada': Images.countrys.canada,
        'Brazil': Images.countrys.brazil
    }[country])