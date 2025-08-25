import clsx from "clsx";

type ButtonProps = {
    name: string;
    type: "submit" | "reset" | "button";
    onClick: () => void

}
export const Button = ({name, type, onClick}: ButtonProps) => {
    return <button
        className={
            clsx(
                "h-14 min-w-[160px] px-5 pr-10 text-lg font-semibold text-violet-700",
                "rounded-2xl border-3 border-violet-400 bg-violet-50",
                "shadow-[6px_6px_12px_rgba(167,139,250,0.35)]",
                "hover:cursor-pointer hover:bg-violet-200 active:bg-violet-400",
                "transition-all duration-200"
            )
        }
        type={type}
        onClick={onClick}
    >
        {name}
    </button>
}
