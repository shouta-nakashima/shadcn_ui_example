import { notFound } from 'next/navigation'
import { Database } from '../../../../database.types'
import { format } from 'date-fns'
import Link from 'next/link'
import { Undo2 } from 'lucide-react'

type Blog = Database['public']['Tables']['blogs']['Row']

type PageProps = {
  params: {
    blogId: string
  }
}

const fetchBlog = async (blogId: string) => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.url}/rest/v1/blogs?id=eq.${blogId}&select=*`, {
    headers: new Headers({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      apikey: process.env.apikey as string
    }),
    cache: 'force-cache'
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch blog ${blogId}`)
  }
  const blogs: Blog[] = await res.json()
  return blogs[0]
}

const BlogDetailPage = async ({ params }: PageProps) => {
  const blog = await fetchBlog(params.blogId)
  if (!blog) return notFound()
  return (
    <div className="mt-16 border-2 p-8 h-fit">
      <p className="mr-3">
        <strong>Task ID:</strong> {blog.id}
      </p>
      <p className="mr-3">
        <strong>Title:</strong> {blog.title}
      </p>
      <p className="mr-3">
        <strong>Content:</strong> {blog.content}
      </p>
      <p className="mr-3">
        <strong>Created at:</strong> {blog && format(new Date(blog.created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>

      <Link href={'/blogs'}>
        <Undo2 className="mt-3 h-6 w-6 cursor-pointer text-blue-500" />
      </Link>
    </div>
  )
}

export default BlogDetailPage

export const generateStaticParams = async () => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      apikey: process.env.apikey as string
    })
  })
  const blogs: Blog[] = await res.json()
  return blogs.map(blog => ({
    blog_id: blog.id
  }))
}
