

import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'


export default function HomePage() {
  return (
    <>

    <MainLayout>
     
      <h1>Contact Page</h1>
      <h1 className="title">
        ir a <Link href="/about">Home</Link>
    
      </h1>
      

      

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact.jsx</code>
      </p>
    </MainLayout>
    </>
  )
}
