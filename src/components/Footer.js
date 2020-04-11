import React from "react"
import Highlight from "./Highlight"
import homeStyles from "../styles/home.module.scss"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Flip from "react-reveal/Flip"
import { FaGithub, FaTwitter, FaCodepen } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"

const specialP = css({
  fontFamily: "Raleway",
  fontWeight: "300",
  fontSize: "24px",
  color: "white",
})

const Hr = styled.hr`
  margin-top: 5rem;
  background: white;
  width: 20%;
  height: 3px;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          footers {
            paragraph {
              html
            }
            phone
            email
          }
        }
      }
    `}
    render={data => (
      <div>
        <section
          className={`${homeStyles.flexGrid} ${homeStyles.Contact}`}
          id="get-in-touch"
          style={{ paddingTop: "0" }}
        >
          <div className={homeStyles.col}>
            <h1>
              Want to <Highlight color="black">Work?</Highlight>
            </h1>
          </div>
          <div className={homeStyles.col}>
            <Flip top cascade>
              <div style={{ padding: "0" }}>
                <p css={specialP}>Email: {data.gcms.footers[0].email}</p>
                <p css={specialP}>Phone: {data.gcms.footers[0].phone}</p>
              </div>
            </Flip>
            <Hr />
            <div dangerouslySetInnerHTML={{__html: data.gcms.footers[0].paragraph.html}}>
              
            </div>
            <div style={{ paddingTop: "10px" }}>
              <a
                href="https://github.com/lukenetti3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  style={{
                    color: "white",
                    fontSize: "35px",
                    marginRight: "25px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/luke_netti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  style={{
                    color: "white",
                    fontSize: "35px",
                    marginRight: "25px",
                  }}
                />
              </a>
              <a
                href="https://codepen.io/lukenetti3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodepen
                  style={{
                    color: "white",
                    fontSize: "35px",
                    marginRight: "25px",
                  }}
                />
              </a>
            </div>
          </div>
        </section>
        <div style={{ backgroundColor: "#7aada4", padding: "0 1rem 0 5%" }}>
          <p style={{ color: "white", marginBottom: "0", fontSize: "15px" }}>
            © All rights reserved - Luke Netti
          </p>
        </div>
      </div>
    )}
  />
)

export default Footer
