"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
type IconProps = React.HTMLAttributes<SVGElement>;

const ChevronRightIcon: React.FC<React.SVGProps<SVGElement>> = (
  props: IconProps
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

interface BaseProps extends React.ComponentPropsWithoutRef<"nav"> {
  pathname: string;
  formatLabel?: (label: string) => string;
  separatorClassName?: string;
}
type DynamicBreadcrumbProps =
  | (BaseProps & {
      allowSeparator?: false;
      Separator?: never;
    })
  | (BaseProps & {
      allowSeparator?: true;
      Separator?: (props: IconProps) => React.JSX.Element;
    });

export const DynamicBreadcrumb = React.forwardRef<
  HTMLOListElement,
  DynamicBreadcrumbProps
>(
  (
    {
      pathname,
      className,

      allowSeparator: separator = true,
      formatLabel,
      Separator = ChevronRightIcon,
      separatorClassName,
      ...props
    },
    ref
  ) => {
    const currentPath = pathname;
    const pathSegments = currentPath.split("/").filter((x) => x);
    // Limit to 3 segments, but you can change this number either
    const maxSegments = 3;
    const shouldShowEllipsis = pathSegments.length > maxSegments;
    return (
      <Breadcrumb className={cn(className)} ref={ref} {...props}>
        <BreadcrumbList>
          {pathSegments.map((segment, index) => {
            const combinedPath = pathSegments.slice(0, index + 1).join("/");
            const href = `/${combinedPath}`;
            const isFirst = index === 0;
            const isEllipsisPosition = shouldShowEllipsis && index === 1;
            const isLast = index === pathSegments.length - 1;
            const isVisible =
              !shouldShowEllipsis ||
              isFirst ||
              isLast ||
              index === pathSegments.length - 2;
            /*
          Format label (remove dashes, capitalize), 
          but you can customize this letter 
          whatever you want in the formatLabel prop.
           */
            const formattedLabel =
              formatLabel?.(segment) ??
              segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <React.Fragment key={segment}>
                {isEllipsisPosition ? (
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                ) : isVisible ? (
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{formattedLabel}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {formattedLabel}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                ) : null}

                {separator && isVisible && !isLast && (
                  /*
               Separator Component by default is the DefaultSeparator component 
               from shadcnUI Breadcrumb Component,
               but you can customize this component 
               by passing in the Separator prop 
               allowing flexibility of your own styles.
               example: <DynamicBreadcrumb Separator={YourCustomSeparator} />
               */
                  <BreadcrumbSeparator>
                    <Separator
                      role="presentation"
                      aria-hidden="true"
                      className={cn("w-3.5 h-3.5", separatorClassName)}
                    />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
);

DynamicBreadcrumb.displayName = "DynamicBreadcrumb";
