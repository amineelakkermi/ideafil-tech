import WorkDetailClient from './WorkDetailClient'

const slugs = ['conex', 'waq3y', 'ideafil', 'maqas']

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params
  return <WorkDetailClient slug={slug} />
}
