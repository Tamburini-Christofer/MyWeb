/**
 * InfiniteHorizontalCarousel.jsx
 * Horizontal infinite carousel of small thumbnails with fullscreen overlay on click
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import './InfiniteHorizontalCarousel.css';

const InfiniteHorizontalCarousel = ({ images = [], speed = 0.5, height = 120, gap = 12 }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const items = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      posRef.current -= speed; // move left
      const trackWidth = track.scrollWidth / 2; // because duplicated
      if (Math.abs(posRef.current) >= trackWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => animRef.current && cancelAnimationFrame(animRef.current);
  }, [speed]);

  const handleClick = (img, i) => {
    const originalIndex = i % images.length;
    setIndex(originalIndex);
    setSelected(images[originalIndex]);
  };

  const close = () => setSelected(null);

  const next = useCallback((e) => {
    e?.stopPropagation();
    const nextIdx = (index + 1) % images.length;
    setIndex(nextIdx);
    setSelected(images[nextIdx]);
  }, [images, index]);

  const prev = useCallback((e) => {
    e?.stopPropagation();
    const prevIdx = (index - 1 + images.length) % images.length;
    setIndex(prevIdx);
    setSelected(images[prevIdx]);
  }, [images, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, index, next, prev]);

  return (
    <div className="ihc-wrapper" style={{ height: `${height}px` }}>
      <div className="ihc-fade ihc-fade-left" />
      <div className="ihc-fade ihc-fade-right" />

      <div className="ihc-track" ref={trackRef} style={{ gap: `${gap}px` }}>
        {items.map((img, i) => (
          <div key={i} className="ihc-item" style={{ height: `${height}px` }} onClick={() => handleClick(img, i)}>
            <img src={img.src} alt={img.alt || `Project ${i+1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="ihc-overlay" onClick={close}>
          <button className="ihc-close" onClick={close}>✕</button>
          <button className="ihc-nav ihc-prev" onClick={prev}>‹</button>
          <img className="ihc-overlay-image" src={selected.src} alt={selected.alt} onClick={(e) => e.stopPropagation()} />
          <button className="ihc-nav ihc-next" onClick={next}>›</button>
        </div>
      )}
    </div>
  );
};

export default InfiniteHorizontalCarousel;
