import Link from "next/link"

function page() {
  return (
    <>
      <nav className='flex gap-2'>
        <Link href='/login' className='text-blue-600'>Login</Link>
        <Link href='/home' className='text-blue-600'>Home</Link>
        <Link href='/home/products' className='text-blue-600'>Products</Link>
      </nav>
      <div>Hola Next.js</div>
    </>
  )
}

export default page