import Footer from './Footer'

export default function Page({children}) {
  console.log(`These are the children of the page -----> ${children}`)
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
