import styles from './Navbar.module.css';
import {ActiveLink} from "./ActiveLink"


const menuItems = [
  {
  text: 'Home',
  href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
  ]
  
// Desestructuro en el argumento de map para poder extraer las propiedades dle objeto de manera resumida TEXT HREF menuItems.map(({text, href}
// UTILIZAMOS EL HREF COMO ID YA QUE SON UNICOS Y NO SE REPITEN 

export const NavBar = () => {
  return (
    <nav className={styles['menu-jero']}>
 {
  menuItems.map(({text, href}) =>(
    <ActiveLink key={href} text={text} href={href}/>
  ))
 }


    </nav>
  )
}
