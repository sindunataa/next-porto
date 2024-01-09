'use client'

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill  } from "react-icons/ri"
import Link from "next/link"

const icons = [
  {
    path:'https://www.linkedin.com/in/sindu-nata-2983b91b9/',
    name: <RiLinkedinFill />,
  },
  {
    path:'https://github.com/sindunataa',
    name: <RiGithubFill />,
  },
  {
    path:'https://www.facebook.com/sindunata1st/',
    name: <RiFacebookFill />,
  },
  {
    path:'https://www.instagram.com/sindunataa_/',
    name: <RiInstagramFill />,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials