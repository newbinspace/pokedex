/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav tw="flex flex-row p-2 justify-between text-white bg-purple-700 sm:text-lg ">
        <h3> POKEDEX</h3>
        <ul tw="flex flex-row">
          <li tw="mx-1">
            <Link to="/"> landing </Link>
          </li>
          <li tw="mx-1">
            <Link to="/home"> home </Link>
          </li>
          <li tw="mx-1">
            <Link to="/explore"> explore </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
