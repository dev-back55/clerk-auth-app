'use client'

import Link from 'next/link'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import styles from './header.module.css'
import Image from 'next/image.js'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.jsx'
import Softech from "public/coding.svg";

const Header = () => {

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            {/* Logo */}
            <Image
              src={Softech}
              width={30}
              height={30}
              alt="logo"
            />
            <div>
              <Link href='/' className={styles.brandlink}>
                SofTech
              </Link>
            </div>
          </div>
          <SignedIn>
            <div className={styles.dashboard}>
              <Link href='/dashboard' className={styles.dashlink}>
                Dashboard
              </Link>
            </div>
          </SignedIn>
          <div className={styles.containerlogin}>
              <DarkModeToggle/>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode='modal'>
                  <button className={styles.loginbutton}>
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
