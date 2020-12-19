import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const PrimaryButton = ({ children }) => (
  <div className="mt-7">
    <Link to="/#my-work" className="bg-blue-900 px-5 py-4 rounded-3xl shadow-sm text-white">
        see my work
    </Link>
  </div>
)

export default PrimaryButton
