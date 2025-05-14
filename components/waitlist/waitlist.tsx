import React, { useState } from 'react';
import { BackgroundGradient } from "#components/gradients/background-gradient"
import { Section, SectionProps, SectionTitle } from "#components/section"
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react';

export interface WaitlistProps extends SectionProps {
  description: React.ReactNode
}

export const Waitlist: React.FC<WaitlistProps> = (props) => {
  const { children, title, description, ...rest } = props

  return (
    <Section id="waitlist" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>
        <WaitlistForm />
    </Box>
    </Section>
  )
}


const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      
      const response = await fetch('https://portfolio.mouhamedlamotte.tech/api/nexcom/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        setLoading(false);
        setEmail('');
        return;
      }
          toast({
              title: '🙌 Merci !',
              description: 'Vous êtes désormais sur la liste d\'attente. Préparez-vous à découvrir une expérience unique avec NexCom ! 🚀',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
        setLoading(false);
        setEmail('');
    } catch (error) {
      console.error(error);
      setLoading(false);
      setEmail('');
    }
  };

  return (
    <Box maxW="lg" mx="auto" p={4} >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              size={'lg'}
            />
          </FormControl>
          <Button
            type="submit"
            isLoading={loading}
            colorScheme="primary"
            size={'lg'}
          >
            Rejoindre la waitlist 🚀
          </Button>
        </Stack>
      </form>
    </Box>
  );
};