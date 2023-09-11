import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Table } from "@mui/material";
Table;

export default function ImgMediaCard(content) {
  return (
    <Card sx={{ width: "80%" }}>
      <CardMedia
        component="img"
        alt={content.title}
        height="140"
        image={content.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {content.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
