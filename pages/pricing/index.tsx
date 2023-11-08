

import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'

export default function AboutPage() {
  return (

    <>
        <MainLayout>
    <h1>Pricing</h1>
    <h1 className="title">
     {/* ir a <a href="/">About</a> */}

      
      ir a <Link href="/">Home</Link>

    </h1>

    <p className="description">
      Get started by editing <code className="code">pages/about.jsx</code>
    </p>
    </MainLayout>

    </>
    
  )
}

