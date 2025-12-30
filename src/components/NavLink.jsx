"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({link}) => {
    const pathname = usePathname()
  return (
    <Link className={ `p-1 rounded-md text-semibold hover:bg-black hover:text-white ${pathname === link.href ? 'bg-black text-white' : ''}`} href={link.href}>{link.label}</Link>
  )
}

export default NavLink