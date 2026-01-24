'use client';

const Error = ({error}: {error: Error}) => {
  return (
    <main className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-5 ">Error</h1>
      <p className="text-2xl font-bold text-gray-400">{error.message}</p>
    </main>
  )
}

export default Error
