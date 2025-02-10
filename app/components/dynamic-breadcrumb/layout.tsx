import DynamicBreadCrumbExample from "@/components/scat-ui/dynamic-breadcrumb/example";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DynamicBreadCrumbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid place-items-center min-h-screen">
      <Card className="space-y-3 w-3/4 h-3/4">
        <CardHeader>
          <DynamicBreadCrumbExample />
        </CardHeader>
        <CardContent className="grid place-items-center min-h-full">{children}</CardContent>
      </Card>
    </section>
  );
}
