import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type SelectProps = {
    items: string[] | number[];
    setValue:  (value: (((prevState: string) => string) | string)) => void
};

export default function Select({ items, setValue }: SelectProps) {
    return (
        <div className="relative inline-block">
            <FontAwesomeIcon
                icon={faChevronDown}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-violet-600 w-4 h-4"
            />

            <select
                className={clsx(
                    "h-14 min-w-[160px] px-5 pr-10 text-lg font-semibold text-violet-700",
                    "rounded-2xl border-3 border-violet-400 bg-violet-50 text-gray-900",
                    "shadow-[6px_6px_12px_rgba(167,139,250,0.35)]",
                    "appearance-none focus:outline-none",
                    "transition-all duration-200"
                )}
                onChange={(e)=>{setValue(e.target.value)}}
            >
                {items.map((i) => (
                    <option key={String(i)} value={String(i)}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
    );
}
