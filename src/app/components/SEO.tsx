import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
    const siteTitle = "Dr. Khairul Islam | Medicine & Pain Specialist in Barguna";
    const defaultDescription = "Dr. Khairul Islam is a trusted Medicine & Interventional Pain Management Specialist in Barguna, Bangladesh. Consultation fee 500৳, follow-up 300৳. Call or WhatsApp for appointment.";
    const siteUrl = "https://drkhairulislam.vercel.app";

    const fullTitle = title ? `${title} | Dr. Khairul Islam` : siteTitle;
    const metaDescription = description || defaultDescription;
    const canonicalUrl = canonical ? canonical : siteUrl;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            <link rel="canonical" href={canonicalUrl} />
            <meta name="application-name" content="Dr. Khairul Islam" />

            {/* Language Alternates */}
            <link rel="alternate" hrefLang="bn-BD" href={siteUrl} />
            <link rel="alternate" hrefLang="en-BD" href={siteUrl} />
            <html lang="bn-BD" />

            {/* Robot Tags */}
            <meta name="robots" content="index, follow, max-image-preview:large" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content="Consultation 500৳, follow-up 300৳. Call/WhatsApp for appointment. Chamber: New Holy Care Pathology, Barguna (5459+VXX)." />
            <meta property="og:site_name" content="Dr. Khairul Islam" />
            <meta property="og:locale" content="bn_BD" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content="Consultation 500৳, follow-up 300৳. WhatsApp for appointment." />
        </Helmet>
    );
}
