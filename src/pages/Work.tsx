import { useState } from "react";
import Text from "../components/props/Text";
import { workTextData } from "../data";
import MediaCover from "../components/Carousel/MediaCover";
import Carousel from "../components/Carousel/Carousel";
import { workCardsData } from "../data";

function Work() {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(
    workCardsData[0]?.id
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeCard = workCardsData.find((item) => item.id === activeCardId);

  const getCarouselImages = (item: typeof activeCard) => {
    if (!item) return [];
    if (item.imageCarousel && item.imageCarousel.length > 0) {
      return item.imageCarousel;
    }
    return [
      {
        src: item.image,
        alt: item.alt,
        title: item.title,
      },
    ];
  };

  const carouselImages = activeCard ? getCarouselImages(activeCard) : [];

  return (
    <main className="work-container container">
      <Text data={workTextData} />
      <section className="work-content">
        <MediaCover
          data={workCardsData}
          onCardClick={(item) => {
            setActiveCardId(item.id);
            setActiveImageIndex(0);
          }}
          activeCardId={activeCardId}
        />

        {/* Carousel Section */}
        {carouselImages.length > 0 && (
          <Carousel
            images={carouselImages}
            title={activeCard?.title}
            activeIndex={activeImageIndex}
            onImageChange={setActiveImageIndex}
          />
        )}
      </section>
    </main>
  );
}

export default Work;
