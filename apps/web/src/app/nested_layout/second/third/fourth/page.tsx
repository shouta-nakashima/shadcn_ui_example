import Link from 'next/link'

const FourthPage = () => {
  return (
    <div>
      <p>Fourth Page</p>
      <Link href="/nested_layout/second/third" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
        back to third
      </Link>
    </div>
  )
}

export default FourthPage
