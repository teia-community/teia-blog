// import fs from 'fs'
// import PageTitle from '@/components/PageTitle'
// import generateRss from '@/lib/generate-rss'
// import { MDXLayoutRenderer } from '@/components/MDXComponents'
// import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

import { staticRequest, gql } from 'tinacms'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { useTina } from 'tinacms/dist/edit-state'

const DEFAULT_LAYOUT = 'PostLayout'

const query = gql`
  query BlogPostQuery($relativePath: String!) {
    getPostsDocument(relativePath: $relativePath) {
      data {
        title
        date
        lastmod
        summary
        authors
        bibliography
        draft
        body
      }
    }
  }
`

export const getStaticPaths = async () => {
  const postsListData = await staticRequest({
    query: gql`
      query GetPostsList {
        getPostsList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })

  return {
    paths: postsListData.getPostsList.edges.map((edge) => ({
      params: { slug: [edge.node.sys.filename] },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const variables = { relativePath: `${params.filename}.md` }
  let data = {}
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables,
      data,
      //myOtherProp: 'some-other-data',
    },
  }
}

const defaultMarked = (markdown) => markdown

export default function Blog(props) {
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  })

  console.log(data)

  return <></>
}
