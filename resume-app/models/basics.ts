import Profile from "./profile";

interface Basics {
    email: string;
    headline: string;
    image: string;
    label: string;
    locationAsString: string;
    name: string;
    phone: string;
    picture: string;
    profiles: Profile[];
    region: string;
    summary: string;
    url: string;
    username: string;
    website: string;
    yearsOfExperience: number;

}

export default Basics;