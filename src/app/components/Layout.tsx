'use client'
import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children, ...customMeta }: {children: React.ReactNode}) {
  const router = useRouter();

  const meta = {
    title: "William Finzy - Developer",
    description: `I've been working in web development for 3 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/*}
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
  />*/}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/*meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )*/}
      </Head>
      <div className=" sm:w-full dark:bg-gray-800">
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  );
}
