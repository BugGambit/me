import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

function Projects(): JSX.Element {
  return (
    <StyledContainer>
      <div>
        <Typography align="center" gutterBottom variant="h3">
          My hobby projects
        </Typography>
      </div>
      <Grid alignItems="stretch" container direction="row"
justify="center" spacing={0} style={{ position: 'relative' }}>
        <ProjectCard href="https://github.com/BugGambit/mandelbrot" imageSrc="/mandelbrot.gif" title="Mandelbrot">
          Superfast Mandelbrot fractal in browser using WebGL.
        </ProjectCard>
        <ProjectCard href="https://github.com/BugGambit/ball-sort-puzzle-solver" imageSrc="/ball-sort.gif" title="Ball sort puzzle solver">
          Superfast Mandelbrot fractal in browser using WebGL.
        </ProjectCard>
        <ProjectCard href="https://github.com/BugGambit/snake" imageSrc="/snake.gif" title="Snake in Rust">
          The classical game, Snake, written in Rust.
        </ProjectCard>
        <ProjectCard href="https://github.com/BugGambit/weight4it" imageSrc="/weight4it.gif" title="weight4it">
          Weight tracking app.
        </ProjectCard>
        <ProjectCard href="/algoritmer_datastrukturer.pdf" imageSrc="/algo-book.gif" title="Book: Algorithms and data structures">
          <Typography color="textSecondary" component="p" variant="body2">
            In my last year in high school, I wrote this Norwegian book to help students do well in computer science competitions.
          </Typography>
        </ProjectCard>
      </Grid>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background: #e9ecef;
  padding: 20px 0;
  width: 100vw;
`;

export default Projects;
