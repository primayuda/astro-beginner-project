import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      // className="giscus mx-auto mt-10 w-full"
      repo="primayuda/astro-beginner-project"
      repoId="R_kgDOK6qtjA"
      category="Blog Post Comment"
      categoryId="DIC_kwDOK6qtjM4CdFFB"
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
      // crossorigin="anonymous"
      // async
    />
  )
}
