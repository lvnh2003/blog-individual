import Link from "../Link";

interface Prop {
  as?: React.ElementType;
  src?: string | null;
  alt?: string | null;
  href?: string | null;
}

export default function Icon({
  as: Component = 'img',
  src,
  alt,
  href,
}: Prop) {
  const icon = (
    <Component
      src={src || undefined}
      alt={alt || undefined}
      className="w-10 h-10 hover:scale-110 transition-all duration-300 mx-4"
    />
  );

  if (href) {
    return (
      <Link href={href}>
        {icon}
      </Link>
    );
  }

  return icon;
}
