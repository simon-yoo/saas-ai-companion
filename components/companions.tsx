import { Companion } from '@prisma/client'

interface CompanionsProps {
  data: (Companion & {
    _count: {
      messages: number
    }
  })[]
}

const Companions = ({ data }: CompanionsProps) => {
  return <div>companions</div>
}

export default Companions
