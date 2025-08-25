type LabelProps = {
    name:string;
}
export const Label = ({name}:LabelProps)=>{
    return (
        <span className="text-2xl text-gray-500 font-bold">{name}</span>
    )
}
