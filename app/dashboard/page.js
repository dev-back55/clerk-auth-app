import React from 'react'
import styles from './dashboard.module.css'
import { currentUser } from '@clerk/nextjs';

export default async function dashboard() {
  const user = await currentUser();
  
  return (
    <section className={styles.dashboard}>
      
        <h1>DASHBOARD - usuario 
          <span> {user?.firstName}</span> autenticado</h1> 
    </section>
  )
}

