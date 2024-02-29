import Header from "@/components/Header";

export default function HomeLayout({ children }) {
  return (
    <>

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </>
  )
}