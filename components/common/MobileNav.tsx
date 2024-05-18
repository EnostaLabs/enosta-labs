'use client'

import { useState } from 'react'
import Link from '@/components/containers/Link'
import headerNavLinks from '@/data/headerNavLinks'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="px-12 py-4 text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  variant="bordered"
                >
                  Resources
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Link Actions"
                className="rounded-lg border-2 bg-white shadow-lg"
              >
                <DropdownSection>
                  <DropdownItem>
                    <Link key="Knowledge Update" href="/blogs">
                      Knowledge Update
                    </Link>
                  </DropdownItem>
                  <DropdownItem>Research</DropdownItem>
                  <DropdownItem>
                    <Link key="Tutorials" href="/tutorials">
                      Tutorials
                    </Link>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
          {headerNavLinks
            .filter((link) => link.href !== '/' && link.href !== '/blogs')
            .map((link) => (
              <div key={link.title} className="px-12 py-4">
                <Link
                  href={link.href}
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
            ))}
        </nav>
      </div>
    </>
  )
}

export default MobileNav
