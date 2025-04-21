import Link from 'next/link'
import { FaGithub, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/LeonardoGarcia2005',
  },
  {
    icon: <FaTwitter />,
    path: 'https://twitter.com/Leonard07556504',
  },
  {
    icon: <FaDiscord />,
    path: 'https://discordapp.com/users/1105985116146258001',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/leonardogarcia7753/',
  },
]

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
