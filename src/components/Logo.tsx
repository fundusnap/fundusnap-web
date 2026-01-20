import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 48, showText = false }: LogoProps) {
  if (showText) {
    return (
      <Image
        src="/logos/ios-brand.png"
        alt="Fundusnap"
        width={size * 4}
        height={size}
        className={className}
        priority
      />
    );
  }

  return (
    <Image
      src="/logos/icon.png"
      alt="Fundusnap Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
