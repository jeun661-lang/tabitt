import Image from 'next/image';

interface AnimalIconProps {
  emoji: string;
  image?: string;
  size: number;
  alt: string;
}

export default function AnimalIcon({ emoji, image, size, alt }: AnimalIconProps) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    );
  }
  return <>{emoji}</>;
}
