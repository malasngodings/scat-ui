export default async function SlugFooBar({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Slug: {(await params).slug}</h1>
    </div>
  );
}
