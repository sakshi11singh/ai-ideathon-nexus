import { HelmetProvider, Helmet } from "react-helmet-async";

interface SEOMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image" | "app";
}

const defaultOgImage = "/og-image.png";

export const SEOMeta = ({
  title,
  description,
  canonical,
  ogImage = defaultOgImage,
  twitterCard = "summary_large_image",
}: SEOMetaProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="CodeByt" />
      
      {/* Keywords - customize per page */}
      <meta name="keywords" content="AI Ideathon, Hackathon, AI Competition, CodeByt, Innovation, Technology" />
    </Helmet>
  );
};

interface SEOProviderProps {
  children: React.ReactNode;
}

export const SEOProvider = ({ children }: SEOProviderProps) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};
