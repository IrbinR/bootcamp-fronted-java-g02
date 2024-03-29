import Link from "next/link"
import HeaderLogin from "@/components/HeaderLogin"
export default function LoginPage() {
  return (
    <>
      <HeaderLogin/>
      <main className="container w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className="text-sm text-slate-600">Enter your email below to login your account.</p>
          </div>

          <form className="flex flex-col gap-6">
            <label className="font-bold">Email</label>
            <input className ="border p-3 shadow-sm rounded-r-md" type="email" placeholder="jhondoe@gmail.com"/>
            
            <label className="font-bold">Password</label>
            <input className ="border p-3 shadow-sm rounded-r-md" type="password" placeholder="Ej. supersecret"/>

            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">Login</button>

          </form>

          <div className="flex justify-center gap-2 font-bold">
            <span className="font-bold">Don't have an account?</span><Link href="/register" className="text-sky-500">Register</Link> 
          </div>

        </div>
      
      </main>
    </>
    
  )
}
