'use client'

import { Category } from '@prisma/client'

interface CategorisProps {
  data: Category[]
}

const Categories = ({ data }: CategorisProps) => {
  return <div>categories</div>
}

export default Categories
