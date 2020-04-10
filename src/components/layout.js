import React from "react"
import layoutStyles from "../styles/layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => (
<div className={layoutStyles.container}>
    <Header />
    {children}
    <Footer />
</div>
)

export default Layout