import Head from "next/head";

const SEO = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDesc} />
      <meta name="keywords" content={seo.metaKeywords} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:type" content={seo.opengraphType} />
      <meta property="og:site_name" content={seo.opengraphSiteName} />
      <meta property="og:title" content={seo.opengraphTitle} />
      <meta property="og:description" content={seo.opengraphDescription} />
      <meta property="og:url" content={seo.opengraphUrl} />
      {seo.opengraphImage && (
        <meta property="og:image" content={seo.opengraphImage.mediaItemUrl} />
      )}
      {seo.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seo.schema.raw }}
        />
      )}
    </Head>
  );
};

export default SEO;
