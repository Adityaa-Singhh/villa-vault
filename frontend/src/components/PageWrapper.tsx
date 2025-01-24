import { HTMLAttributes, useEffect, useState } from 'react'
import Footer from './Footer'
import { Session } from '@supabase/supabase-js'
import { useNavigate } from 'react-router'
import { supabase } from '@/supabaseClient'
import { Helmet } from "react-helmet";
import defaultMetaData from '@/constants/metaData';
import Navbar from './Navbar'

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogImage?: string;
}

const PageWrapper = (props: PageWrapperProps) => {
    const [, setSession] = useState<Session | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) navigate("/dashboard");
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [navigate]);

    return (
        <>
            <Helmet>
                {/* Title & description */}
                <title>{props.title || defaultMetaData.title}</title>
                <meta
                    name="description"
                    content={
                        props.description || defaultMetaData.description
                    }
                />
                <meta name="author" content={defaultMetaData.author} />

                <link rel="canonical" href={import.meta.env.VITE_BASE_URL} />

                {/* Social data */}
                <meta name="og:title" content={props.ogTitle || defaultMetaData.ogTitle} />
                <meta
                    name="og:description"
                    content={props.ogDescription || defaultMetaData.ogDescription}
                />
                <meta
                    name="og:url"
                    content={props.ogUrl || import.meta.env.VITE_BASE_URL}
                />
                <meta name="og:image" content={props.ogImage || ""} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:url"
                    content={props.ogUrl || import.meta.env.VITE_BASE_URL}
                />
                <meta name="twitter:title" content={props.ogTitle || defaultMetaData.ogTitle} />
                <meta
                    name="twitter:description"
                    content={props.ogDescription || defaultMetaData.ogDescription}
                />
                <meta name="twitter:image" content={props.ogImage || ""} />

                {/* Keywords */}
                <meta name="keywords" content={defaultMetaData.websiteKeywords.join(", ")} />

                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Helmet>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default PageWrapper
