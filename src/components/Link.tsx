interface Props{
    as?: React.ElementType,
    href?: string | null,
    [x: string]: unknown
}
export default function Link({
    as : Component = 'a',
    href = null,
    ...restProps}:Props){
    return(
        <>
            <Component href={href || undefined}
                {...restProps}>
            </Component>
        </>
    )
}