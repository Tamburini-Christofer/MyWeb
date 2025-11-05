/**
 * ChristoferPhotography.jsx
 * Photography portfolio layout with hero carousel, Photoshop skill, and genre gallery
 */

import './ChristoferPhotography.css';
import InfinitePhotoGrid from '../components/InfinitePhotoGrid';
import { SiAdobephotoshop, SiAdobelightroom } from 'react-icons/si';

// Hero carousel images — replace with your own
const samplePhotos = [
  { src: 'https://picsum.photos/seed/photo1/800/600', alt: 'Photo 1' },
  { src: 'https://picsum.photos/seed/photo2/800/600', alt: 'Photo 2' },
  { src: 'https://picsum.photos/seed/photo3/800/600', alt: 'Photo 3' },
  { src: 'https://picsum.photos/seed/photo4/800/600', alt: 'Photo 4' },
  { src: 'https://picsum.photos/seed/photo5/800/600', alt: 'Photo 5' },
  { src: 'https://picsum.photos/seed/photo6/800/600', alt: 'Photo 6' },
  { src: 'https://picsum.photos/seed/photo7/800/600', alt: 'Photo 7' },
  { src: 'https://picsum.photos/seed/photo8/800/600', alt: 'Photo 8' },
  { src: 'https://picsum.photos/seed/photo9/800/600', alt: 'Photo 9' },
  { src: 'https://picsum.photos/seed/photo10/800/600', alt: 'Photo 10' },
  { src: 'https://picsum.photos/seed/photo11/800/600', alt: 'Photo 11' },
  { src: 'https://picsum.photos/seed/photo12/800/600', alt: 'Photo 12' },
];

// Genre cards — set your own sample images per genre
const genres = [
  { key: 'macro', title: 'Macro', src: 'https://picsum.photos/seed/macro/800/600', alt: 'Macro sample' },
  { key: 'landscapes', title: 'Landscapes', src: 'https://picsum.photos/seed/landscapes/800/600', alt: 'Landscapes sample' },
  { key: 'abstract', title: 'Abstract', src: 'https://picsum.photos/seed/abstract/800/600', alt: 'Abstract sample' },
  { key: 'studio', title: 'Studio', src: 'https://picsum.photos/seed/studio/800/600', alt: 'Studio sample' },
  { key: 'street', title: 'Street Photography', src: 'https://picsum.photos/seed/street/800/600', alt: 'Street sample' },
  { key: 'portrait', title: 'Portraits', src: 'https://picsum.photos/seed/portrait/800/600', alt: 'Portrait sample' },
  { key: 'night', title: 'Night', src: 'https://picsum.photos/seed/night/800/600', alt: 'Night sample' },
  { key: 'architecture', title: 'Architecture', src: 'https://picsum.photos/seed/architecture/800/600', alt: 'Architecture sample' },
  { key: 'wildlife', title: 'Wildlife', src: 'https://picsum.photos/seed/wildlife/800/600', alt: 'Wildlife sample' },
  { key: 'other', title: 'Other Genres', src: 'https://picsum.photos/seed/other/800/600', alt: 'Other genres sample' },
];

import { useState } from 'react';

const genreDetails = {
  macro: {
    description: 'Close-up photography that reveals fine details invisible to the naked eye.',
    techniques: 'Manual focus, focus stacking, controlled lighting, tripod.',
    gear: 'Macro lens, ring/soft light, tripod.'
  },
  landscapes: {
    description: 'Vast scenes of nature and environment with strong compositions and light.',
    techniques: 'Golden hour, long exposure, ND filters, rule of thirds.',
    gear: 'Wide-angle lens, tripod, ND/PL filters.'
  },
  abstract: {
    description: 'Shapes, colors and patterns that emphasize form over subject identity.',
    techniques: 'Intentional camera movement, shallow depth of field, reflections.',
    gear: 'Any lens, creative lighting.'
  },
  studio: {
    description: 'Controlled lighting setups for products, portraits or creative work.',
    techniques: 'Key/fill/rim lighting, light modifiers, tethered shooting.',
    gear: 'Strobes/LEDs, softboxes, backdrops.'
  },
  street: {
    description: 'Candid moments in public spaces capturing life and storytelling.',
    techniques: 'Zone focusing, anticipation, composition, fast shutter speeds.',
    gear: 'Compact camera or 35/50mm prime.'
  },
  portrait: {
    description: 'Capturing expressions and personality with flattering light and pose.',
    techniques: 'Natural/flash light, posing, eye focus, shallow depth of field.',
    gear: '85mm/50mm primes, reflectors.'
  },
  night: {
    description: 'Low-light scenes such as cityscapes, stars, or light trails.',
    techniques: 'Long exposures, high ISO, noise reduction, stable tripod.',
    gear: 'Fast lenses, tripod, remote release.'
  },
  architecture: {
    description: 'Design-focused images of buildings and structures with clean lines.',
    techniques: 'Perspective control, symmetry, leading lines.',
    gear: 'Tilt-shift or wide-angle lens, tripod.'
  },
  wildlife: {
    description: 'Animals in their natural habitat, emphasizing behavior and patience.',
    techniques: 'Telephoto tracking, fast shutter, camouflage, ethical distance.',
    gear: 'Telephoto lens, monopod or tripod.'
  },
  other: {
    description: 'Explorations and mixed techniques beyond standard categories.',
    techniques: 'Experimentation, mixed media, creative processing.',
    gear: 'Varied equipment.'
  }
};

const ChristoferPhotography = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="photo-page">
      {/* Hero Carousel (reduced height) */}
      <section className="photo-hero">
        <InfinitePhotoGrid 
          images={samplePhotos}
          speed={1}
          columns={3}
          gap={16}
        />
      </section>

      {/* Photoshop & Lightroom Skills */}
      <section className="photoshop-skill">
        <div className="ps-badge">
          <SiAdobephotoshop className="ps-icon" />
          <div className="ps-texts">
            <h3>Adobe Photoshop</h3>
            <p>Retouching • Color Grading • Compositing</p>
          </div>
        </div>
        <div className="ps-badge">
          <SiAdobelightroom className="ps-icon lr-icon" />
          <div className="ps-texts">
            <h3>Adobe Lightroom</h3>
            <p>RAW Processing • Batch Editing • Color Correction</p>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="genres-section">
        <h2 className="section-title">Genres</h2>
        <div className="genres-grid">
          {genres.map((g) => (
            <div key={g.key} className="genre-card" onClick={() => setSelected(g)}>
              <div className="genre-image-wrapper">
                <img src={g.src} alt={g.alt} loading="lazy" />
                <div className="genre-overlay">
                  <span className="genre-title">{g.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Genre Summary */}
      {selected && (
        <section className="genre-summary">
          <h3 className="summary-title">{selected.title}</h3>
          <div className="summary-content">
            <div className="summary-photo">
              <img src={selected.src} alt={`${selected.title} reference`} />
            </div>
            <table className="summary-table">
              <tbody>
                <tr>
                  <th>Genre</th><td>{selected.title}</td>
                </tr>
                <tr>
                  <th>Description</th><td>{genreDetails[selected.key]?.description}</td>
                </tr>
                <tr>
                  <th>Techniques</th><td>{genreDetails[selected.key]?.techniques}</td>
                </tr>
                <tr>
                  <th>Recommended Gear</th><td>{genreDetails[selected.key]?.gear}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Photo Gallery Grid */}
          <div className="genre-gallery">
            <h4 className="gallery-title">Gallery</h4>
            <div className="gallery-grid">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="gallery-item">
                  <img 
                    src={`https://picsum.photos/seed/${selected.key}${i}/400/400`} 
                    alt={`${selected.title} ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ChristoferPhotography;