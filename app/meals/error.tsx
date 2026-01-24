'use client';

const Error = ({error}: {error: Error}) => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <p className="text-2xl font-bold ">{error.message}</p>
    </main>
  )
}

export default Error
