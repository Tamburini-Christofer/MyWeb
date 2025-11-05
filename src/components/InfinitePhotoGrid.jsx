/**
 * InfinitePhotoGrid.jsx
 * Griglia fotografica infinita con scorrimento verticale automatico e lightbox
 * Features:
 * - Scorrimento infinito verticale
 * - Lightbox con navigazione tra foto
 * - Supporto tastiera (frecce, ESC)
 * - Pausa automatica durante visualizzazione
 */

import { useEffect, useRef, useState } from 'react';
import './InfinitePhotoGrid.css';

const InfinitePhotoGrid = ({ 
  images = [], 
  speed = 1, 
  columns = 3,
  gap = 16 
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPosition = useRef(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Animazione di scorrimento infinito
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isPaused) {
        scrollPosition.current += speed;
        
        // Reset quando ha scrollato metà contenuto (per loop infinito)
        const scrollHeight = container.scrollHeight / 2;
        if (scrollPosition.current >= scrollHeight) {
          scrollPosition.current = 0;
        }
        
        container.style.transform = `translateY(-${scrollPosition.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isPaused]);

  // Gestione controlli tastiera per lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        closeOverlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, currentIndex]);

  // Apre il lightbox con la foto cliccata
  const handleImageClick = (image, index) => {
    // Calcola l'indice originale (non duplicato per scroll infinito)
    const originalIndex = index % images.length;
    setSelectedImage(images[originalIndex]);
    setCurrentIndex(originalIndex);
    setIsPaused(true);
  };

  // Chiude il lightbox e riprende lo scroll
  const closeOverlay = () => {
    setSelectedImage(null);
    setIsPaused(false);
  };

  // Naviga alla foto successiva
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  // Naviga alla foto precedente
  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Chiude overlay solo se si clicca sullo sfondo
  const handleOverlayClick = (e) => {
    if (e.target.className === 'photo-overlay') {
      closeOverlay();
    }
  };

  // Duplica le immagini per creare il loop infinito
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="infinite-photo-grid-wrapper">
        <div 
          ref={containerRef}
          className="infinite-photo-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="photo-item"
              onClick={() => handleImageClick(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Photo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox/Overlay per visualizzazione foto */}
      {selectedImage && (
        <div className="photo-overlay" onClick={handleOverlayClick}>
          <button className="close-button" onClick={closeOverlay}>
            ✕
          </button>
          
          <button className="nav-button nav-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
            ‹
          </button>
          
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            className="overlay-image"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button className="nav-button nav-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            ›
          </button>
          
          {selectedImage.alt && (
            <div className="overlay-caption">{selectedImage.alt}</div>
          )}
          
          <div className="photo-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default InfinitePhotoGrid;
