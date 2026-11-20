import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';

const PropertyGallery = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (!isFullscreen) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setIsFullscreen(false);
  };

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1} of ${images.length}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-text hover:bg-surface shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-text hover:bg-surface shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </>
        )}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-surface w-6' : 'bg-surface/50 hover:bg-surface/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-text hover:bg-surface shadow-lg transition-all"
          aria-label="View fullscreen"
        >
          <Maximize className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Image gallery">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-surface/90 flex items-center justify-center text-text hover:bg-surface z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 w-12 h-12 rounded-full bg-surface/90 flex items-center justify-center text-text hover:bg-surface z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 w-12 h-12 rounded-full bg-surface/90 flex items-center justify-center text-text hover:bg-surface z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
          <img
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1} of ${images.length}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-surface w-6' : 'bg-surface/50 hover:bg-surface/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;