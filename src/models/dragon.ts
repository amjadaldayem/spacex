import {IconBaseProps} from "react-icons";

interface DragonI{
    images: string[] | [],
    description: null | string,
    wikipedia: string | undefined,
    name: string | null,
    first_flight: ParamI,
    diameter: ParamI,
    dry_mass: ParamI,
}

interface ParamI {
    content: string | null,
    title: string | null,
}
export default DragonI;