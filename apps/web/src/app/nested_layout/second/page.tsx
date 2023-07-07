import Link from 'next/link'

const SecondPage = () => {
  return (
    <div className="p-2">
      <p>Second Page</p>
      <div className="gap-1 flex">
        <Link href="/nested_layout" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          back to first
        </Link>
        <Link href="/nested_layout/second/third" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          go to third
        </Link>
      </div>
    </div>
  )
}

export default SecondPage
