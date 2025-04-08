import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";

interface CertificationsProps {
  item: GridItemInterface;
}

const Certifications = ({ item }: CertificationsProps) => {
  return (
    <div className="flex flex-col items-start text-left">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <div className="flex flex-wrap gap-3 mt-4">
        {item.certifications?.map((cert, index) => (
          <a
            key={index}
            href={cert.verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800/50 shadow-sm">
              <Image
                src={cert.badgeUrl}
                alt={cert.name}
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                className="object-contain p-1.5 sm:p-2 md:p-2.5"
                priority={index === 0}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications; 