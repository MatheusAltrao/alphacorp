import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string
  const currentDate = new Date()

  return [
    // Página principal - maior prioridade
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Seção inicial/home
    {
      url: `${baseUrl}#home`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Como funciona - processo de limpeza
    {
      url: `${baseUrl}#how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Resultados/métricas - comprova qualidade
    {
      url: `${baseUrl}#results`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contato - conversão importante
    {
      url: `${baseUrl}#contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
