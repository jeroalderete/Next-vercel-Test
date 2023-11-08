import {NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import {ReactElement,ReactNode} from 'react'

//  es igual a NextPage que es algo generico, lo importamos de Next 
// ADICIONALMENTE VA A TENER EL GETLAYOUT SIENDO OPCIONAL ? y va a regresar un JSXElement
// este page que tipo de dato va a ver hay que especificar dentro del parentesis

type NexPageWithLayout = NextPage & {
  getLayout?: (page:JSX.Element) => JSX.Element;
}


type AppPropsWithLayout = AppProps &{
  Component: NexPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)


}

export default MyApp
