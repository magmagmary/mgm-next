const ContentLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <header className="h-12 flex items-center px-4 border-b border-gray-200 w-full">
            This is the header of the content layout
        </header>
      {children}
    </div>
  )
}

export default ContentLayout