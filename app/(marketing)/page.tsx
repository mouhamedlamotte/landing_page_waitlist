'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFile,
  FiFileText,
  FiFlag,
  FiFolderMinus,
  FiGrid,
  FiHelpCircle,
  FiLink,
  FiLock,
  FiMessageCircle,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { AiOutlinePayCircle } from 'react-icons/ai'
import { FaBolt, FaChartLine, FaFileInvoice, FaGlobe, FaLock, FaTicketAlt } from 'react-icons/fa'
import { Waitlist } from '#components/waitlist/waitlist'
import waitlist from '#data/waitlist'
import teams from '#data/teams'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TeamSection />

      <WaitListSection />

      {/* <PricingSection /> */}

    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Vos outils de communication et de<Br />  gestion en une seule
                <Br />  plateforme
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                De la <Em>communication</Em> à la gestion <Em>RH</Em>,
                <Br />
                 en passant par <Em>les paiements et la facturation</Em>,
                 <Br />
                 <Em color={'primary.500'}>Nexcom</Em> unifie tout dans une plateforme intuitive.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" mt={8}>
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                Rejoindre la waitlist 🚀
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Voir la demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%" borderRadius={'2xl'}>
                <Image
                  
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="services"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Nexcom Messenger',
            icon: FiMessageCircle,
            description: 'Centralisez et automatisez vos conversations clients (WhatsApp, Messenger, Email…) depuis une interface unique.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Nexcom Invoice',
            icon: FaFileInvoice,
            description:
              'Créez, envoyez et suivez vos factures en temps réel avec des paiements intégrés.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Nexcom RH',
            icon: FiUsers,
            description:
              'Gérez vos employés, contrats et paiements en toute simplicité.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Nexcom Form',
            icon: FiFileText,
            description:
              'Créez des formulaires interactifs pour collecter et analyser des données efficacement.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('pnpm add @nexcom/messenger')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="💡 Outils puissants pour une gestion fluide">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Gérez vos interactions clients, facturation et RH sur une seule plateforme. Intégrez facilement WhatsApp, Messenger et plus.
          </Text>
      <Flex
        gap={2}
      >
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
              pnpm add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
              @nexcom/messenger
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
              flutter pub add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
              nexcom_messenger
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
      </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="🛠 Une plateforme fiable et évolutive">
        <Text color="muted" fontSize="lg">
        Nous utilisons des technologies éprouvées pour garantir performance et sécurité. NexCom est conçu pour évoluer avec votre entreprise.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Soumaya Fall"
        description="CEO de Nexcom"
        avatar="/static/images/soumaya.jpeg"
        gradient={['pink.500', 'purple.900']}
        style={{rotate: '3deg'}}
      >
        “Avec Nexcom, nous révolutionnons la gestion des communications et des services professionnels. Une solution tout-en-un pour centraliser, automatiser et simplifier votre quotidien.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="🚀 Allez plus vite avec Nexcom"
      >
        <Text color="muted" fontSize="lg">
        Nous avons intégré tout ce dont vous avez besoin pour booster votre business.
        </Text>
        <Wrap mt="8">
          {[
            'Messagerie',
            'Facturation',
            'RH',
            'Formulaires',
            'Sécurité',
            'Notifications',
            'Support client',
            'Gestion des tickets',
            'Workflows',
            'Chatbots',
            'Multicanal',
            'Collaboration',
            'Personnalisation',
            'IA',
            'Gestion des leads',
            'Scalabilité',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="messenger"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          <Em color="primary.500">
          Nexcom Messenger
          </Em>
          <Br /> Optimisez la communication de votre entreprise, instantanément
        </Heading>
      }
      description={
        <>
          Une messagerie fluide et sécurisée.
          <Br />
          Conçue pour améliorer la collaboration et l’efficacité au sein de votre équipe.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Messagerie Instantanée avec IA',
          icon: FiMessageCircle,
          description:
            "Une messagerie instantanée optimisée par l'intelligence artificielle pour répondre automatiquement aux demandes fréquentes, améliorer les temps de réponse et personnaliser les interactions avec les clients.",
          variant: 'inline',
        },
        {
          title: 'Gestion des Leads et Opportunités.',
          icon: FiUserPlus,
          description:
            'Suivez, qualifiez et convertissez vos prospects directement depuis l’interface, avec des outils intelligents pour prioriser et gérer vos opportunités commerciales.',
          variant: 'inline',
        },
        {
          title: 'Support et Gestion des Tickets.',
          icon: FaTicketAlt,
          description:
            'Gérez efficacement les demandes d’assistance grâce à un système de tickets intégré, permettant de suivre les problèmes et d’y répondre rapidement pour une meilleure satisfaction client.',
          variant: 'inline',
        },
        {
          title: 'Intégration Multicanal.',
          icon: FiLink,
          description:
            'Connectez NexCom Messenger à plusieurs plateformes populaires (WhatsApp, Facebook Messenger, etc.) pour centraliser toutes vos conversations clients dans une seule interface.',
          variant: 'inline',
        },
        {
          title: 'Support Multiplateforme',
          icon: FaGlobe,
          description:
            "Accédez à NexCom Messenger sur mobile, desktop, et intégrez-le facilement avec des SDKs pour React, et des API pour personnaliser votre expérience et l'adapter à vos besoins.",
          variant: 'inline',
        },
        {
          title: 'Collaboration Équipe en Temps Réel',
          icon: FiUsers,
          description:
            "Collaborez en temps réel avec votre équipe grâce à des discussions de groupe, des partages de fichiers et une gestion simplifiée des projets en cours.",
          variant: 'inline',
        },
        {
          title: 'Automatisation des Réponses et Flux de Travail',
          icon: FaBolt,
          description:
            'Automatisez les tâches répétitives grâce à des workflows personnalisables et des réponses automatiques, libérant du temps pour se concentrer sur des tâches à plus forte valeur ajoutée.',
          variant: 'inline',
        },
        {
          title: 'Analyse Avancée avec IA',
          icon: FaChartLine,
          description:
            "Profitez d'analyses approfondies et d'analyses prédictives, alimentées par l'IA, pour suivre la performance de vos équipes et de vos interactions clients, et prendre des décisions éclairées.",
          variant: 'inline',
        },
        {
          title: "Sécurisation de vos Données d'Entreprise.",
          icon: FaLock,
          description: "Assurez la confidentialité de vos échanges avec des mécanismes de sécurité avancés, tels que le chiffrement end-to-end et des protocoles de sécurité conformes aux normes internationales.",
          variant: 'inline',
        },
      ]}
    />
  )
}

const TeamSection = () => {
  const columns = React.useMemo(() => {
    return teams.items.reduce<Array<typeof teams.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
    id='team'
      title={teams.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8" mt={i === 1 ? -2 : 0} border={'1px'} borderRadius={'md'}  borderColor={'primary.500'} >
            {column.map((t, i) => (
              <Testimonial key={i} {...t} height={'100%'} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

const WaitListSection = () => {
  return (
    <Waitlist {...waitlist}>""</Waitlist>
  )
}

export default Home
