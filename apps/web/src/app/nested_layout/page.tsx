import Link from 'next/link'

const FirstPage = () => {
  return (
    <div className="m-10 text-center">
      <p>First Page</p>
      <div className="gap-1 flex">
        <Link href="/nested_layout/second" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          go to second
        </Link>
      </div>
    </div>
  )
}

export default FirstPage
