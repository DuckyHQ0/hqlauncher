export const Badge = ({text = "Badge", colour}: {text:string, colour:string}) => (
    <div className="rounded-out px-16 py-[2px] text-white bg-accent border border-stroke-2 w-fit h-fit">{text}</div>
)