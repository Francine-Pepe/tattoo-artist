import { useEffect } from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import type { CarouselProps } from "../../types";

export default function Carousel({
  images,
  title,
  activeIndex = 0,
  onImageChange,
}: CarouselProps) {
  useEffect(() => {
    if (!images || images.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        const newIndex =
          activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        onImageChange?.(newIndex);
      } else if (event.key === "ArrowRight") {
        const newIndex =
          activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        onImageChange?.(newIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images, onImageChange]);

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    onImageChange?.(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    onImageChange?.(newIndex);
  };

  const goToImage = (index: number) => {
    onImageChange?.(index);
  };

  return (
    <Sheet
      sx={{
        p: 3,
        minWidth: "90%",
        margin: "2rem auto",
        backgroundColor: "#F2E8DF",
        borderColor: "rgba(218, 155, 150, 0.8)",
      }}
    >
      {/* Main Image Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          minHeight: "10rem",
        }}
      >
        {title && (
          <Typography
            level="h4"
            className="carousel-title"
            sx={{
              fontFamily: "Anek Gurmukhi",
              fontWeight: "300",
              textAlign: "center",
              textTransform: "uppercase",
              mb: 3,
              position: "absolute",
              color: "#D9D8D6",
              bottom: 0,
              fontSize: "clamp(1.5rem, 0.071rem + 3.81vw, 3.5rem)",
            }}
          >
            {title}
          </Typography>
        )}
        {/* Previous Button */}
        {images.length > 1 && (
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: "absolute",
              left: 16,
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
        )}

        {/* Main Image */}
        {images[activeIndex] && (
          <Box
            component="img"
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
          />
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              right: 16,
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#D9D8D6",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        )}
      </Box>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 3,
            p: 1,
            borderTop: "1px solid",
            borderColor: "rgba(218, 155, 150, 0.8)",
            pt: 3,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              onClick={() => goToImage(index)}
              sx={{
                width: 80,
                height: 60,
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "pointer",
                border:
                  activeIndex === index ? "2px solid primary.500" : "1px solid",
                borderColor: activeIndex === index ? "primary.500" : "divider",
                opacity: activeIndex === index ? 1 : 0.7,
                transition: "all 0.2s ease",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Sheet>
  );
}
