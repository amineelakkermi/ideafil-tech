import WorkDetailClient from './WorkDetailClient'

const slugs = ['ideafil', 'waq3y', 'conex', 'maqas', 'vilack', 'kiar', 'dahank']

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params
  return <WorkDetailClient slug={slug} />
}
