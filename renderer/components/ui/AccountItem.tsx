import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { HiMiniCheck } from "react-icons/hi2";

export default function AccountItem({
  face,
  displayname,
  username,
  uuid,
  active,
}: {
  face: string;
  displayname: string;
  username: string;
  uuid: string;
  active: boolean;
}) {
  return (
    <div className="flex p-6 justify-between items-center group">
      <div className="flex gap-20 items-center">
        <RadixRadioGroup.Item
          className="w-24 h-24 bg-transparent group-hover:bg-fg-2 radix-disabled:bg-fg-2-disabled radix-disabled:cursor-not-allowed border border-stroke-2 rounded-small flex justify-center items-center duration-150 ease-out"
          value={uuid}
        >
          <RadixRadioGroup.Indicator className="text-brand-blue radix-disabled:text-brand-blue/30 radix-state-checked:animate-scale-in radix-state-unchecked:animate-scale-out">
            <HiMiniCheck />
          </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>
        <img src={face} alt={displayname} className="size-48 rounded-[10px]" />
        <label className="body" id="displayname">
          {displayname}
        </label>
      </div>
      <label className="body" id="username">
        {active ? "Active" : "Not active"}
      </label>
      <label className="body" id="username">
        {username}
      </label>
      <label className="body" id="uuid">
        {uuid}
      </label>
    </div>
  );
}
