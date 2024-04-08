'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div>
          <Dropdown isOpen={isOpen}>
            <DropdownTrigger>
              <Button
                className="inline-flex flex-row justify-center gap-x-1.5 font-medium text-gray-900 dark:text-gray-100"
                variant="bordered"
                onMouseEnter={() => {
                  setIsOpen(true)
                }}
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
              onMouseLeave={() => {
                setIsOpen(false)
              }}
            >
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
            </DropdownMenu>
          </Dropdown>
        </div>
        {headerNavLinks
          .filter((link) => link.href !== '/' && link.href !== '/blogs')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
