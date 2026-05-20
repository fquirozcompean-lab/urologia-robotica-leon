import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="bg-editorial p-8 rounded-xl border-2 border-gris-premium/20 hover:border-acero hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-petroleo mb-4 text-center font-sans">
          {title}
        </h3>

        <p className="text-gris-premium mb-6 flex-grow text-center leading-relaxed font-serif text-[15px]">
          {description}
        </p>

        <div className="text-center">
          <span className="text-acero group-hover:underline font-medium font-sans inline-flex items-center gap-2">
            Ver más
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
