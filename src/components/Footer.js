import React from "react"
import Flip from "react-reveal/Flip"
import { FaGithub, FaTwitter, FaCodepen } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"

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
          className="bg-gray-800 text-white flex flex-wrap justify-between mt-16 md:py-32 py-10 md:px-20 px-10 transform rotate-1 rounded-3xl shadow-md"
          id="get-in-touch"
        >
          <div className="max-w-xl transform -rotate-1">
            <h1 className="md:text-6xl text-4xl font-header font-bold lg:pb-0 pb-4">Want to Work?</h1>
          </div>
          <div className="font-body text-xl leading-8 max-w-xl transform -rotate-1">
            <Flip top cascade>
              <div>
                <p className="mb-10">Email: {data.gcms.footers[0].email}</p>
                <p className="mb-10">Phone: {data.gcms.footers[0].phone}</p>
              </div>
            </Flip>
            <div
              className="font-body"
              dangerouslySetInnerHTML={{
                __html: data.gcms.footers[0].paragraph.html,
              }}
            ></div>
            <div className="flex flex-wrap mt-10">
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
        <div>
          <p className="font-body">
            © All rights reserved - Luke Netti
          </p>
        </div>
      </div>
    )}
  />
)

export default Footer
