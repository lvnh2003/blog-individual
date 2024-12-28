interface TitleProp{
    as? : React.ElementType,
    value? : string | null,
    color? : string | null,
    [x: string]: unknown; 
}

export default function HeaderTitle({as : Component =  'p', value, color, ...restProps}: TitleProp){
    const textColor = color ?? "black";
    return (
        <Component className={`text-${textColor} text-2xl font-extrabold mb-4 font-display`}  {...restProps}>
            {value}
        </Component>
    )

}