import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: "Urólogo Oncólogo en León | Cáncer de Próstata, Cáncer Renal y Cirugía Robótica — Dr. Quiroz",
  description: "Urólogo oncólogo en León, Guanajuato. Especialista en cáncer de próstata, cáncer renal y cirugía robótica urológica. Dr. Alejandro Quiroz Compeán, certificado CONAMEU, formado en INCan y Hospital Albert Einstein, Brasil.",
}

export default function Home() {
  return <HomeContent />
}
