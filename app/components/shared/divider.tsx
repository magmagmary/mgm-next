const Divider = ({className}: {className?: string}) => {
  return (
      <hr className={`border-t border-red-200 my-4 w-full ${className}`} />
  )
}

export default Divider;