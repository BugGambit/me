import React from 'react';
import Typist from 'react-typist';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Link from '@material-ui/core/Link';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ParticlesBackground from 'components/ParticlesBackground/ParticlesBackground';
import styled from 'styled-components';

function AboutMe(): JSX.Element {
  return (
    <Grid direction="column">
      <Grid alignItems="center" container direction="column"
justify="center" spacing={0} style={{ height: '100vh', position: 'relative' }}>
        <ParticlesBackground />
        <Box fontWeight="fontWeightBold">
          <Typography align="center" color="textSecondary" gutterBottom
variant="h1">
            Fredrik Anfinsen
          </Typography>
        </Box>
        <Typography align="center" color="textSecondary" gutterBottom
variant="h3">
          <Typist>Passionate about changing the world with technology.</Typist>
        </Typography>
        {SocialMediaLinks()}
      </Grid>
      <Grid alignItems="center" container direction="row"
justify="center" spacing={0} style={{ margin: '20px 0', padding: '0 20px' }}>
        <ProfilePicture src="https://github.com/buggambit.png" />
        <Box maxWidth="800px">
          <Typography align="center" color="textPrimary" gutterBottom
variant="h3">
            About Me
          </Typography>
          <Typography align="center" gutterBottom paragraph>
            My name is Fredrik Anfinsen. I live in Oslo, Norway. I started coding when I was six years old, and that drove a passion for technology
            and mathematics. During high school, I participated in several olympiads: informatics, mathematics, and physics. I finished a big part of
            my bachelor&apos;s degree in mathematics during high school as I was eager to become an expert in the field. I started at the University
            of Oslo, but I eventually dropped out of the university to focus on my startup, ShareMy3D. ShareMy3D invented a technology that could
            render huge 3D models in a web browser. We heavily relied on WebGL to do so. ShareMy3D got acquired by Cognite in 2017. I am now working
            in Cognite to shape the industrial future.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

const ProfilePicture = styled.img`
  display: block;
  border-radius: 50%;
  max-height: 300px;
  max-width: 300px;
  width: auto;
  height: auto;
  padding: 20px;
`;

function SocialMediaLinks() {
  return (
    <Grid alignItems="center" container direction="row"
justify="center" spacing={2}>
      <IconLink href="https://github.com/BugGambit" icon={faGithub} />
      <IconLink href="https://www.facebook.com/fredrik.anfinsen" icon={faFacebook} />
      <IconLink href="https://instagram.com/fredrikanfinsen" icon={faInstagram} />
      <IconLink href="https://linkedin.com/in/fredrik-anfinsen" icon={faLinkedin} />
    </Grid>
  );
}

const StyledLink = styled(Link)`
  ${({ theme }: { theme: Theme }) => `
padding: ${theme.spacing(2)}px;
font-size: 20px;
color: ${theme.palette.text.secondary};

&:hover {
  color: ${theme.palette.text.primary};
}
`}
`;
function IconLink({ icon, href }: { icon: IconProp; href: string }) {
  return (
    <Grow in timeout={2000}>
      <StyledLink href={href} target="_blank">
        <FontAwesomeIcon icon={icon} size="3x" />
      </StyledLink>
    </Grow>
  );
}

export default AboutMe;
