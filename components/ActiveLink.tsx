
import Link from "next/link"
import {CSSProperties, FC} from 'react'
import { useRouter } from "next/router";


const style: CSSProperties ={
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({text, href}) => {


// const router = useRouter();
//desestructuro el asPath del router para renderizar condicionalmente
// asPath sirve para saber cual es el path donde me encuentro

const {asPath} = useRouter();


  return (
    <Link href={href}>

    <a style={ asPath === href ? style : undefined} >{text}</a>
    </Link>
  )
}

