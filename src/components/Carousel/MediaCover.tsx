import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import type { ImageItem, ImageProps } from "../../types";

interface MediaCoverProps extends ImageProps {
  onCardClick?: (item: ImageItem) => void;
  activeCardId?: number;
}

export default function MediaCover({
  data,
  onCardClick,
  activeCardId,
}: MediaCoverProps) {
  return (
    <Box className="media-cover-container" component="ul" p={3} >
      {data.map((item: ImageItem) => (
        <Card
          className="media-cover-card"
          component="li"
          sx={{
            cursor: onCardClick ? "pointer" : "default",
            border: activeCardId === item.id ? "2px solid" : "none",
            "&:hover": {
              transform: onCardClick ? "scale(1.02)" : "none",
            },
          }}
          key={item.id}
          onClick={() => onCardClick?.(item)}
        >
          <CardCover className="media-cover-card-cover">
            <img
              src={item.image}
              srcSet={item.image}
              loading="lazy"
              alt={item.alt}
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              textColor="#D9D8D6"
              className="media-cover-card-title"
              sx={{
                fontWeight: "lg",
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Anek Gurmukhi",
                mt: { xs: 12, sm: 18 },
              }}
            >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
