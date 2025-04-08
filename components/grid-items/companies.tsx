import Image from "next/image";
import { GridItemInterface } from "./../../config/site-config";
import Link from "next/link";
import Button from "../button";
import Icon from "../icon";

const Companies = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-transparent rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        {item.icon && (
          <div className="flex items-center gap-2">
            <Icon type={item.icon} color={item.color ?? "currentColor"} />
            <span className="font-semibold text-sm text-neutral-800 dark:text-white">Companies Secured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-2 flex-1">
        <div className="@lg:text-lg font-semibold line-clamp-1 text-neutral-900 dark:text-white">
          {item.title}
        </div>
        {item.description && (
          <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-500 line-clamp-2">
            {item.description}
          </div>
        )}

        {/* Company Logos */}
        {item.companies && item.companies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            {item.companies.map((company, index) => (
              <div
                key={index}
                className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800/50 shadow-sm"
              >
                {company.logo && (
                  <Image
                    src={company.logo}
                    alt={company.name || "Company Logo"}
                    fill
                    className="object-contain p-1 sm:p-1.5 md:p-2"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Optional Link */}
      {item.buttonLink && (
        <div className="mt-2">
          <Link href={item.buttonLink}>
            <Button
              text={item.buttonTitle ?? "View All"}
              color={item.color}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Companies;