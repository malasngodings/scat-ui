import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-wrap items-center justify-between gap-1">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Scat UI</h1>
          <p className="text-muted-foreground">Scat UI Components</p>
        </div>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Dynamic Breadcrumb
            </h2>
            <OpenInV0Button name="dynamic-breadcrumb" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Button variant={"link"} asChild>
              <div className="flex flex-row items-center gap-x-2">
              <Link href={"/components/dynamic-breadcrumb"}>
                See the Dynamic Breadcrumb
              </Link>
              <ArrowRight className="w-6 h-6"/>
              </div>
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
}
