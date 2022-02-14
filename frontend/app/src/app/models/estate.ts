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
    rooms: number;
    floor: number;
    totalFloors: number;
    description: string;
    constructionYear: number;
    state: string;
    heating: string;
    parking: number;
    characteristics: Array<String>;
    monthlyFee: number;
    images: Array<String>;
    buses: Array<Number>;
    sold: number;
    lastModified: string;
    advertiser: string;
}