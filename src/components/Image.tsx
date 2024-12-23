interface Props{
    as?: React.ElementType,
    src?: string | null,
    size?:number | null,
    [x: string]: unknown
}
export default function Image({
    as : Component = 'img',
    src = null,
    size = 10,
    ...restProps}:Props){
    return(
        <>
            <Component src={src || undefined}
                width={size || undefined}
                height={size}
                {...restProps}>
            </Component>
        </>
    )
}