import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Nexcom',
    description: 'Transformez la gestion de votre entreprise.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'services',
        label: 'Services',
      },
      {
        id: 'messenger',
        label: 'Messenger',
      },
      {
        id: 'team',
        label: 'Team',
      },
      {
        label: 'Demo',
        href: '#',
      },
      {
        label: 'Rejoindre la waitlist 🚀',
        id : 'waitlist',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
       Copyright &copy; {new Date().getFullYear()}{' '}
        <Link href="/">Nexcom</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:contact@mouhamedlamotte.tech',
        label: 'contact@mouhamedlamotte.tech',
      },
      {
        href: 'https://twitter.com/MouhamedLamotly',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/mouhamedlamotte',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
