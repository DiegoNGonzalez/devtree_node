type ErrorMessageProps={
  children:React.ReactNode
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-center text-sm font-bold">{children}</p>
  )
}

