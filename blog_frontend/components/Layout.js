import Head  from 'next/head'
import React from 'react'

const Layout = ({title, description, keywords, children}) => {
  return (
    <>
        <Head>
            <title>SEO | { title ? title : 'ArNa Blog' }</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout