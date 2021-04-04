import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
  href: string;
}

function ProjectCard({ title, imageSrc, href, children }: ProjectCardProps): JSX.Element {
  return (
    <StyledCard>
      <CardActionArea href={href} target="_blank">
        <CardMedia component="img" image={imageSrc} style={{ height: '250px' }}
title={title} />
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            {title}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

export default ProjectCard;
