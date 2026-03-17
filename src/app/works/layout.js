import Navbar from '../components/Navbar'

export default function WorksLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      {children}
    </div>
  )
}
