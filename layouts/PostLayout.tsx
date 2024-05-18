import { ReactNode } from 'react'
import Image from '@/components/containers/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors, Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/containers/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/layouts/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/motions/ScrollTopAndComment'
import Tag from '@/components/Tag'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function PostMinimal({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { slug, date, title, images, tags } = content
  const displayImage =
    images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/picsum/800/400'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[16/9] w-full">
                  <Image src={displayImage} alt={title} fill className="object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
            {tags && (
              <div className="py-2 xl:py-4">
                <div className="flex flex-wrap justify-center gap-7">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
            <div>
              <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </dd>
            </div>
            <div className="xl:border-gray-200lg:border-gray-200 pb-10 pt-2 lg:border-b lg:dark:border-gray-700 xl:border-b xl:pt-6 xl:dark:border-gray-700">
              <ul className="gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8	">
                {authorDetails.map((author) => (
                  <li className="flex items-center justify-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={38}
                        height={38}
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="whitespace-nowrap text-sm font-medium leading-5 ">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="prose max-w-none py-4 text-justify dark:prose-invert prose-blockquote:border-red-600 prose-table:table-fixed prose-table:border prose-table:border-gray-400 prose-th:border prose-th:border-gray-400 prose-th:p-2 prose-th:text-left prose-td:border prose-td:border-gray-400 prose-td:p-2 prose-img:mx-auto">
            {children}
          </div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
