import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "../app.css";

const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) =>
      matchMedia(q).addEventListener("change", handler)
    );
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({ items, scaleOnHover = true, hoverScale = 0.95 }) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [6, 5, 4, 3],
    2
  );

  const [containerRef, { width, height }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // calcolo posizione griglia
  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const itemHeight = child.height / 2.4;
      const y = colHeights[col];
      colHeights[col] += itemHeight + 12;
      return { ...child, x, y, w: columnWidth - 15, h: itemHeight };
    });
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    // reset camera (effetto 3D)
    gsap.to(containerRef.current, {
      scale: 1.1,
      rotationX: 10,
      rotationY: 5,
      transformOrigin: "center center",
      ease: "sine.inOut",
      duration: 8,
      yoyo: true,
      repeat: -1,
    });

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;

      const delay = Math.random() * 4;
      const duration = 6 + Math.random() * 4;

      // posizione iniziale invisibile sopra
      gsap.set(selector, {
        x: item.x,
        y: -item.h - Math.random() * height * 2, // parte sempre molto in alto
        width: item.w,
        height: item.h,
        opacity: 0,
        z: Math.random() * -300,
      });

      const tl = gsap.timeline({ repeat: -1, delay });

      // 👇 Fase 1: appare dall’alto e scende
      tl.to(selector, {
        opacity: 1,
        y: height + item.h + 150,
        duration,
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          if (progress > 0.8) {
            gsap.to(selector, { opacity: 0, duration: 0.8 });
          }
        },
      })
        // 👇 Fase 2: invisibile, ritorna sopra
        .set(selector, {
          y: -item.h - height * 1.5, // torna ben sopra lo schermo
          opacity: 0,
        });
    });
  }, [grid, imagesReady, height]);

  const handleMouseEnter = (e, item) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover)
      gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e, item) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover)
      gsap.to(selector, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleClick = (e, item) => {
    const el = e.currentTarget;
    el.classList.add("clicked");
    setTimeout(() => {
      el.classList.remove("clicked");
      window.open(item.url, "_blank", "noopener");
    }, 400);
  };

  return (
    <div ref={containerRef} className="list">
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onClick={(e) => handleClick(e, item)}
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={(e) => handleMouseLeave(e, item)}
        >
          <div
            className="item-img"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
