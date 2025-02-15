import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function FooPage() {
  return (
    <main className="flex items-center flex-wrap-reverse gap-3 justify-center ">
      <div>Hello from Foo</div>
      <Button variant={"outline"} asChild>
        <div className="flex flex-row items-center gap-2">
          <Link href={"/components/dynamic-breadcrumb/foo/bar"}>See the Bar</Link>
          <ArrowRight className="w-6 h-6" />
        </div>
      </Button>
    </main>
  );
}
