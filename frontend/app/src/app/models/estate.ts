import { Location } from "./location";
import { User } from "./user";

export class Estate {
    id: number;
    name: string;
    type: string;
    city: string;
    municipality: string;
    location: string;
    street: string;
    price: number;
    area: number;
    rooms: string;
    floor: number;
    totalFloors: number;
    description: string;
    constructionYear: number;
    state: string;
    heating: string;
    parking: number;
    characteristics: Array<String>;
    monthlyFee: number;
    images: Array<string>;
    buses: Array<Number>;
    sold: number;
    lastModified: string;
    advertiserFirstname: string;
    advertiserLastname: string;
    advertiserPhone: string;
    advertiserLicense: string;
    agencyName: string;
    agencyPIB: string;
    agencyCity: string;
    agencyAddress: string;
    agencyPhone: string;
}