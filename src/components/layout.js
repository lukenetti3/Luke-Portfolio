import React from "react"
import layoutStyles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
<div className={layoutStyles.container}>
    <Header />
    {children}
    <Footer />
</div>
)

export default Layout