import { HiMiniPlus, HiChevronDown } from "react-icons/hi2";
import Rust from "@/components/Rust";
import Instance from "@/components/ui/Instance";

export default function Instances() {
    return (
        <div className="flex flex-col w-full h-full min-h-full overflow-y-auto gap-36">
            <div className="section-style flex gap-32 h-fit px-64 py-8">
                <a
                    href="/"
                    className="flex gap-8 place-items-center hover-active-effect"
                >
                    <HiMiniPlus className="w-[22px] h-[22px]" />
                    <p className="text-sub">Create Instance</p>
                </a>
                <button className="flex gap-8 place-items-center hover-active-effect">
                    <HiMiniPlus className="w-[22px] h-[22px]" />
                    <p className="text-sub">Create Group</p>
                </button>
            </div>
            <div className="section-style w-full h-full flex flex-col gap-64 overflow-y-auto p-64">
                <div className="flex flex-col gap-32" id="Main">
                    <div className="flex gap-16 align-middle place-items-center">
                        <h3 className="text-3 font-semibold">Group 1 <HiChevronDown className="inline ml-12" /></h3>
                    </div>
                    <div className="grid grid-cols-3 max-[1600px]:grid-cols-2 gap-32">
                        <Instance id={0} imageUrl="/theme/4.png" name="Instance 1" />
                        <Instance id={0} imageUrl="/theme/5.png" name="Instance 2" />
                        <Instance id={0} imageUrl="/theme/1.png" name="Instance 3" />
                        <Instance id={0} imageUrl="/theme/2.png" name="Instance 4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
