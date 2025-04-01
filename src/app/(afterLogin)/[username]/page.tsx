export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('slug', slug);
  
  return <div>My Post: {slug}</div>
}