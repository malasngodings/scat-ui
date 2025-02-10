import { DynamicBreadCrumbExample } from "@/components/example/dynamic-breadcrumb";

export default function DynamicBreadCrumbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid place-items-center min-h-screen">
      <main className="space-y-3">
        <DynamicBreadCrumbExample />
        {children}
      </main>
    </section>
  );
}
