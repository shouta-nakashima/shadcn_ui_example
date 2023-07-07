import Link from 'next/link'

const ThirdPage = () => {
  return (
    <div className="p-2">
      <p>Third Page</p>
      <div className="gap-1 flex">
        <Link href="/nested_layout/second" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          back to second
        </Link>
        <Link
          href="/nested_layout/second/third/fourth"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          go to fourth
        </Link>
      </div>
    </div>
  )
}

export default ThirdPage
