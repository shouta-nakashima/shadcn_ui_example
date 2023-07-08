import { Database } from '../../database.types'
import Link from 'next/link'

type Blog = Database['public']['Tables']['blogs']['Row']

const fetchBlogs = async (): Promise<Blog[]> => {
  await new Promise(resolve => setTimeout(resolve, 8000))
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      apikey: process.env.apikey as string
    }),
    next: { revalidate: 1 }
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

const BlogList = async () => {
  const blogs = await fetchBlogs()
  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">Blogs</p>
      <ul className="list-disc list-inside">
        {blogs.map(blog => (
          <li key={blog.id} className="my-1 text-base">
            <Link prefetch={false} href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
