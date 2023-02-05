"use client"; // this is a client component

import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react"
import styles from "./page.module.css"




export const Main = (props: any) => {
  const [isLogin, setIsLogin] = useState(true)
  console.log("props",props)
  
  
  return (
    <div>
      <main className={styles.main}>
        {isLogin ? (
          <Link href={"/registration/login"}>Login</Link>
        ) : (
          <Link href={"/registration/LogOut"}>LogOut</Link>
        )}
        <p>home put down</p>
      </main>
    </div>
  )
}
