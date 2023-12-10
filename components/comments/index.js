import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances')
  },
  { ssr: false }
)
const GiscusComponent = dynamic(
  () => {
    return import('@/components/comments/Giscus')
  },
  { ssr: false }
)
const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus')
  },
  { ssr: false }
)
const DiscourseComponent = dynamic(
  () => {
    return import('@/components/comments/Discourse')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  let switch_term
  switch (siteMetadata.comment.provider) {
    case 'giscus':
      switch_term = siteMetadata.comment.giscusConfig.mapping
      break
    case 'utterances':
      switch_term = siteMetadata.comment.utterancesConfig.issueTerm
      break
    case 'discourse':
      switch_term = siteMetadata.comment.discourseConfig.threadTerm
      break
  }
  let term
  switch (switch_term) {
    case 'pathname':
      term = frontMatter.slug
      break
    case 'url':
      term = siteMetadata.siteUrl + '/blog/' + frontMatter.slug
      break
    case 'title':
      term = frontMatter.title
      break
  }
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
        <GiscusComponent mapping={term} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={term} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'discourse' && (
        <DiscourseComponent thread={term} />
      )}
    </div>
  )
}

export default Comments
