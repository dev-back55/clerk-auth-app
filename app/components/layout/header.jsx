'use client'

import Link from 'next/link'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import styles from './header.module.css'
import Image from 'next/image.js'

const Header = () => {

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            {/* Logo */}
            <Image
              src={"https://www.svgrepo.com/show/513369/gamepad.svg"}
              width={30}
              height={30}
            />
            <div>
              <Link href='/' className={styles.brandlink}>
                iTech Informática
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
        </nav>
      </header>
    </>
  )
}

export default Header
