import Categories from '@/components/categories'
import SearchInput from '@/components/search-input'
import prismadb from '@/lib/prismadb'

interface RootPageProps {
  searchParams: {
    categoryId: string
    name: string
  }
}

const page = async ({ searchParams }: RootPageProps) => {
  const categories = await prismadb.category.findMany()
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput />
      <Categories data={categories} />
    </div>
  )
}

export default page
