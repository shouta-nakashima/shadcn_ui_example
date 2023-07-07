'use client'

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">Data fetch is server failed</p>
    </div>
  )
}

export default Error
