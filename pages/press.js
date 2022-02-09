import siteMetadata from '@/data/siteMetadata'
import pressData from '@/data/pressData'
import { PageSEO } from '@/components/SEO'

export default function Press() {
  return (
    <>
      <PageSEO title={`Press - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Press
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Teia in the news.{' '}
            <a
              href="https://drive.google.com/drive/folders/1L6llJd2ag9a3ZPmLz9EBiX6TIweHzRxu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Download the press kit
            </a>
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {pressData.map((d) => (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                key={d.title}
                className="p-4 bg-white rounded-md border-2 border-gray-200 dark:border-gray-700"
              >
                <div className="title text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:leading-12 mb-2">
                  {d.title}
                </div>
                <div className="description text-lg leading-7 text-gray-500 dark:text-gray-400 mb-2">
                  {d.description}
                </div>
                <span className="text-gray-500 dark:text-gray-400 mr-2">
                  Read the full article:
                </span>
                <span className="link text-base font-medium leading-6 text-primary-500">
                  {d.href}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
