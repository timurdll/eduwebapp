import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({content}) {
  return (
    <Card sx={{ maxWidth: content.width }}>
      <CardActionArea>
		<Link style={{textDecoration: 'none'}} to={content.to}>
        <CardMedia
          component="img"
          height={content.height}
		      image={content.image}
		      alt={content.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
		  	  {content.header}
          </Typography>
          {content.lessons ? 
          <></>
          :
          <Typography variant="body2" color="text.secondary">
		  	  {content.description}
          </Typography>
          }
        </CardContent>
		</Link>
      </CardActionArea>
    </Card>
  );
}