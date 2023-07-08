import type { Database } from '../../database.types'
import Counter from './Counter'

type News = Database['public']['Tables']['news']['Row']

const fetchNews = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      apikey: process.env.apikey as string
    })
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const news: News[] = await res.json()
  return news
}

const NewsList = async () => {
  const news = await fetchNews()
  return (
    <div className="m-1 border border-blue-500 p-4">
      <Counter />
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">News</p>
      <ul className="m-3">
        {news.map(news => (
          <li key={news.id} className="my-1 text-base">
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NewsList
