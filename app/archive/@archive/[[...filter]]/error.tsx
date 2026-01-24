'use client';

const ArchiveErrorPage = ({ error }: { error: Error }) => {

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <p className="text-red-500 text-xl mb-6">Something went wrong. Filter is not valid.</p>
      <p className="text-gray-500 text-sm">{error.message}</p>
    </div>
  )
}

export default ArchiveErrorPage;
