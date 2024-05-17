import { HiPlay, HiPencil, HiCog6Tooth } from "react-icons/hi2";

interface InstanceProps {
  name?: string;
  imageUrl?: string;
  id?: any;
}

export default function Instance({ id, imageUrl, name }: InstanceProps) {
  const checkImageUrl = () =>
    imageUrl ? `url(${imageUrl})` : "url(/theme/5.png)";

  return (
    <div
      className="bg-cover bg-no-repeat bg-clip-content
            border border-stroke-1 group rounded-in w-full aspect-video h-auto flex flex-col place-content-between"
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8)), ${checkImageUrl()}`,
      }}
    >
      <div className="bg-fg-3 backdrop-blur-fg-3 h-fit w-full rounded-t-[7.55px] flex gap-48 px-32 py-16 opacity-0 group-hover:opacity-100 duration-150">
        <button>
          <HiPlay className="w-[25px] h-[25px] hover-active-effect" />
        </button>
        <button>
          <HiPencil className="w-[25px] h-[25px] hover-active-effect" />
        </button>
        <button>
          <HiCog6Tooth className="w-[25px] h-[25px] hover-active-effect" />
        </button>
      </div>
      <h3 className="h3 font-medium m-32">{name}</h3>
    </div>
  );
}
