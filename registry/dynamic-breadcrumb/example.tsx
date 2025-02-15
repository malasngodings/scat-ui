"use client";
import * as React from "react";
import { DynamicBreadcrumb } from "../../components/scat-ui/dynamic-breadcrumb";
import { usePathname } from "next/navigation";

export default function DynamicBreadCrumbExample() {
  const pathname = usePathname();
  return <DynamicBreadcrumb pathname={pathname}   />;
}
