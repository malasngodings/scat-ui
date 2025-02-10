import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const data = { example: "slug-foo-bar" };
export default function BarPage() {
  return (
    <main className="flex items-center gap-3 justify-center ">
      <div>Hello from Bar</div>
      <Button variant={"outline"} asChild>
        <div className="flex flex-row items-center gap-2">
          <Link href={`/components/dynamic-breadcrumb/foo/bar/${data.example}`}>
            See the Slug Foo Bar
          </Link>
          <ArrowRight className="w-6 h-6" />
        </div>
      </Button>
    </main>
  );
}
