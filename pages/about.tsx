import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import Head from "next/head";
import Link from 'next/link';


export default function AboutPage() {
  return (

      <>
     
      <h1>About Page</h1>
      <h1 className="title">
       {/* ir a <a href="/">About</a> */}

        
        ir a <Link href="/">Home</Link>

      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.jsx</code>
      </p>
      </>


  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
