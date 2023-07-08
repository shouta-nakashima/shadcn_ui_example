import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link href="/" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Home
        </Link>
        <Link href="/blogs" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Blogs
        </Link>
        <Link href="/streaming_sr" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Streaming SR
        </Link>
        <Link href="/auth" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Auth with CRUD
        </Link>
        <Link href="/nested_layout" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Nested Layout
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
