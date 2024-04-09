'use client'
import Link from 'next/link'
import { slug } from 'github-slugger'
import { usePathname } from 'next/navigation'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const pathname = usePathname()

  return pathname.startsWith('/blogs') ? (
    <Link
      href={`/blogs/tags/${slug(text)}`}
      className="flex items-center justify-center gap-2 rounded-md bg-red-100 p-1 px-3 text-sm font-medium capitalize text-primary-500 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  ) : (
    <Link
      href={`/tutorials/tags/${slug(text)}`}
      className="flex items-center justify-center gap-2 rounded-md bg-red-100 p-1 px-3 text-sm font-medium capitalize text-primary-500 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
