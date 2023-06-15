import * as React from "react"
import Link from "next/link"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./style"
import { metadata } from "../../config/metadata"
import {
  FaLinkedin as LinkedIn,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaFacebook as Facebook,
} from "react-icons/fa"

const Footer = () => {
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="gradient">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link href="/services/all" style={{ color: 'var(--char2)' }}>
                Services
              </Link>
            </h5>
            <ul>
              <li><Link href="/get-started/spec-class">Spec Class Websites</Link></li>
              <li><Link href="/get-started/gt-class">GT Class Websites</Link></li>
              {/* <li><Link href="/get-started/custom">Custom Sites</Link></li> */}
            </ul>
          </FooterMenuStyles>
        {metadata.linkedInUsername ||
        metadata.instagramUsername ||
        metadata.youtubeUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow Turn17 Media
            </h5>
            <ul>
              {metadata.linkedInUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/company/${metadata.linkedInUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <LinkedIn />
                  </a>
                </li>
              )}
              {metadata.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${metadata.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {metadata.facebookUsername && (
                <li>
                  <a
                    href={`https://www.facebook.com/${metadata.facebookUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook />
                  </a>
                </li>
              )}
              {metadata.youtubeUsername && (
                <li>
                  <a
                    href={`https://www.youtube.com/@${metadata.youtubeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Youtube />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by {metadata.developerName}, LLC
          </p>
        </div>
      </CopyrightStyles>
      </div>
    </FooterStyles>
  )
}

export default Footer