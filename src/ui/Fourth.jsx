
import Card from './components.jsx/Card'

export default function Fourth() {
  return (
    <div className="min-h-screen ">
        <div className="flex flex-col items-center py-20 gap-4">
        <div className="text-3xl">Sustainable Fashion Forward</div>
        <div className="max-w-150 text-center">Experience sustainable fashion that's both stylish and socially responsible with our latest eco-friendly collection.</div>
        </div>
        <div className=" px-8 flex items-center justify-between ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
  )
}
