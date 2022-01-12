import React, { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function DiscourseForum({ thread }) {
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: siteMetadata.comment.discourseConfig.url,
      discourseEmbedUrl: thread,
      discourseReferrerPolicy: 'no-referrer-when-downgrade',
    }

    const d = document.createElement('script')
    d.type = 'text/javascript'
    d.async = true
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js'
    ;(
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]
    ).appendChild(d)
  }, [thread])

  return (
    <div>
      <div id="discourse-comments"></div>
    </div>
  )
}
