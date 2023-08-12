import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  title: string;
  children: React.ReactNode; // Use React.ReactNode for children
}

export default function MediaCard({ title, children }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {children} {/* Display the children inside the card */}
      </CardContent>
      <CardActions>
        <Button size="small" variant='text'>
          share
        </Button>
        <Button size="small">Learn More</Button>
        <a style={{color: "grey", textDecoration: "none"}} href="#">#{title}</a>
      </CardActions>
    </Card>
  );
}
