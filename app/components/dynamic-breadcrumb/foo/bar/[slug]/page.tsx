export default async function SlugFooBar({ params }: { params: Promise<{ slug: string}> }) {
  return (
    <div>
      <h1>Slug: {(await params).slug}</h1>
    </div>
  );
}
