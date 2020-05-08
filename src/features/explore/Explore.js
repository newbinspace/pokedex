/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"

import SearchPokemon from "./SearchPokemon"
import PokemonCards from "./PokemonCards"

const Explore = () => {
  return (
    <div tw="flex flex-1 flex-col h-screen bg-orange-500">
      <SearchPokemon />
      <PokemonCards />
    </div>
  )
}

export default Explore
