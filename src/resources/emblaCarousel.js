import React, { useState, useCallback } from "react";
import { DotButton, useDotButton } from "./emblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./emblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Optimized Embla Carousel component with lazy loading and improved image handling
 * @param {Object} props - Component props
 * @param {Array<string>} props.slides - Array of image source URLs
 * @param {Object} props.options - Embla carousel options
 */
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [imageLoading, setImageLoading] = useState(true);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  // Handle image load
  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
    if (index === 0) {
      setImageLoading(false);
    }
  }, []);





  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__image-container">
                {!loadedImages.has(index) && (
                  <div className="embla__slide__skeleton">
                    <div className="embla__slide__skeleton-spinner"></div>
                  </div>
                )}
                <img
                  src={src}
                  alt={`Slide ${index + 1} of ${slides.length}`}
                  className={`embla__slide__image transition-opacity duration-300 ${
                    loadedImages.has(index) ? "opacity-100" : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(index)}
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen viewer disabled — images are not clickable */}
    </section>
  );
};

export default EmblaCarousel;
