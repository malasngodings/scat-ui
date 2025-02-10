"use client";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function DynamicBreadCrumbExample() {
  const pathname = usePathname(); // in pages router you can use useRouter().pathname
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((item, index) => {
        
          const combinedPath = pathnames.slice(0, index + 1).join("/")
          const href = `/${combinedPath}`;
          const removeStrip = item.split("-").join(" ");
          const isLastPath = index === pathnames.length - 1;
          const linkName =
            removeStrip.charAt(0).toUpperCase() + removeStrip.slice(1);
          const isBetweenLinkName = index !== pathnames.length + 1;
          return (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {isLastPath ? (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{linkName}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {isBetweenLinkName && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
