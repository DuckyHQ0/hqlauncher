import { HiPlay, HiPencil, HiCog6Tooth } from "react-icons/hi2";

interface InstanceProps {
    name: string;
    imageUrl: string;
    id: any;
}

export default function Instance({ id, imageUrl, name }: InstanceProps) {
    return (
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.65)) bg-cover
            relative border border-stroke-1 bg-no-repeat bg-clip-padding text-white hover:scale-[.98] group duration-150 rounded-in w-[512px] h-[256px] flex flex-col place-content-between">
            <div className="bg-bg-1 backdrop-blur-main h-fit w-full flex gap-48 px-32 py-16 rounded-[6.5px] opacity-0 group-hover:opacity-100 duration-150">
                <HiPlay className="w-[25px] h-[25px] hover-active-effect hover:text-selected cursor-pointer" />
                <HiPencil className="w-[25px] h-[25px] hover-active-effect hover:text-selected cursor-pointer" />
                <HiCog6Tooth className="w-[25px] h-[25px] hover-active-effect hover:text-selected cursor-pointer" />
            </div>
            <h3 className="text-3 font-medium m-32">{ name }</h3>
            <img src={imageUrl} alt={`Background image for instance ${id}`}
                className="absolute -z-10" />
        </div>
    )
}