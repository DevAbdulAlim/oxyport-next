'use client'

import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import Search from "./Search"

export default function SearchForm() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
    <form action="" className="relative hidden md:flex items-center">
        <input
          className="h-full w-full focus:text-blue-200 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-800"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button
          className="absolute right-2  top-2 text-2xl"
          type="submit"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </form>

      {/* Mobile Serach Button */}
      <div className="items-center flex md:hidden">
      <button
        className=" top-2 text-xl"
        type="submit"
        aria-label="Search"
        onClick={toggleOpen}
      >
        <FaSearch />
      </button>

      <Search isOpen={isOpen} onClick={toggleOpen} />
      </div>
    </>
  )
}
