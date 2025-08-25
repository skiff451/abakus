import clsx from "clsx";

type RangeProps = {
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    setValue:  (value: (((prevState: string) => string) | string)) => void
};

export const Range = (
    {
        min,
        max,
        step,
        defaultValue,
        setValue
    }: RangeProps) => {
    return (
        <div className="relative inline-block w-full max-w-sm">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue}
                className={clsx(
                    "w-full h-3 rounded-lg appearance-none cursor-pointer",
                    "bg-violet-200 accent-violet-500",
                    "focus:outline-none focus:ring-2 focus:ring-violet-400"
                )}
                onChange={(e)=>{setValue(e.target.value)}}
            />
        </div>
    );
}
