export const getMetaData = ({
  title = 'Donaciones y Sponsors | JSCL',
  description = 'Donar a JavaScript Chile | Ayudanos a promover el desarrollo tecnológico y el apredizaje en Chile.',
  url = 'https://jschile.org',
  images = '/og-image.png'
}) => (
{
  metadataBase: new URL(url),
  title,
  description,

  keywords: ["JavaScript", "Comunidades", "Chile", "React", "Node"],
  authors: [{ name: "JSChile", url }],

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eacf39" },
    { media: "(prefers-color-scheme: dark)", color: "#333" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images,
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
})
