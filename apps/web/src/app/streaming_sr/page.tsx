import { Suspense } from 'react'
import Spinner from '../../components/Spinner'
import BlogList from '../../components/BlogList'
import NewsList from '../../components/NewsList'

export const revalidate = 0

const StreamingSrPage = () => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <section className="fixed m-1 h-full w-1/4 border border-blue-500 bg-gray-500 p-1">
          <Suspense fallback={<Spinner color="border-green-500" />}>
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main>
        <section className="fixed w-3/4">
          <Suspense fallback={<Spinner />}>
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}
export default StreamingSrPage
