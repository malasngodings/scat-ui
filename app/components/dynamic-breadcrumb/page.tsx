
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DynamicBreadCrumbPage() {

  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <h1 className="text-base text-muted-foreground font-semibold">
          Try to change you path to see the how dynamic breadcrumb works,
        </h1>
        <Button variant={"outline"} asChild>
        <div className="flex flex-row items-center gap-2">
          <Link href={"/components/dynamic-breadcrumb/foo"}>See the Foo</Link>
          <ArrowRight className="w-6 h-6" />
        </div>
      </Button>
      </div>
    </div>
  );
}
