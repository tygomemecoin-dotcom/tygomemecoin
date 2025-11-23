"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type GalleryContent =
  | {
      type: "image";
      src: string;
      alt: string;
      unoptimized?: boolean;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
    };

type GalleryStackItem = {
  content: GalleryContent;
  aspectClass: string;
};

type GalleryColumn =
  | {
      kind: "stack";
      spanClass: string;
      items: GalleryStackItem[];
    }
  | {
      kind: "single";
      spanClass: string;
      aspectClass: string;
      content: GalleryContent;
    };

type GalleryRow = {
  columns: GalleryColumn[];
};

const galleryRows: GalleryRow[] = [
  {
    columns: [
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg1.PNG",
              alt: "Tygo graffiti throw-up study",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg13.PNG",
              alt: "Tygo chrome collage",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg3.jpg",
              alt: "Tygo emblem lockup",
            },
            aspectClass: "aspect-square",
          },
        ],
      },
      {
        kind: "single",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-6",
        aspectClass: "aspect-square lg:aspect-[2/3]",
        content: {
          type: "image",
          src: "/images/susano.png",
          alt: "Tygo nightlife vertical spread",
        },
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-4 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg4.jpeg",
              alt: "Tygo neon alley scene",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg5.jpg",
              alt: "Tygo neon skyline splash",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg7.png",
              alt: "Tygo retro magazine cover",
            },
            aspectClass: "aspect-square",
          },
        ],
      },
    ],
  },
  {
    columns: [
      {
        kind: "single",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-6",
        aspectClass: "aspect-square lg:aspect-[2/3]",
        content: {
          type: "video",
          src: "/videos/wake_tg.mp4",
          alt: "Tygo wake sequence",
        },
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg6.PNG",
              alt: "Tygo jungle tunnel poster",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg8.PNG",
              alt: "Tygo jungle panoramic",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg9.PNG",
              alt: "Tygo mascot animated loop",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
        ],
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-4 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg10.jpg",
              alt: "Tygo neon alley variant",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg12.jpg",
              alt: "Tygo chrome collage detail",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg11.jpg",
              alt: "Troll Tygo expression sheet",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
        ],
      },
    ],
  },
];

export default function GallerySection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id="gallery"
      className="relative galaxy-bg text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-[#FF8B00]/20 to-transparent z-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:gap-10 sm:px-10 sm:py-16 lg:max-w-7xl lg:px-12 lg:py-20">
        <div className={`flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-end sm:gap-6 sm:text-left ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
          <div className="max-w-2xl space-y-2 sm:space-y-4">
            <h2 className="text-3xl font-black uppercase sm:text-5xl lg:text-6xl glow-text-strong">
              ART GALLERY
            </h2>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 glow-text sm:text-sm sm:tracking-[0.2em] lg:text-base">
              We work with some of the most talented artists in the space, bringing Tygo to life through world-class art and unique creative styles.
            </p>
          </div>

          <a
            href="https://t.me/tygomemes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-3 border-[#ff9302] bg-black/60 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white glow-border-strong glow-hover transition-all duration-200 hover:translate-y-2 sm:gap-3 sm:border-4 sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.25em]"
          >
            View Full Archive ↗
          </a>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="space-y-3 lg:hidden">
          {galleryRows.map((row, rowIndex) => {
            let cardIndex = 0;
            return (
              <div key={`mobile-row-${rowIndex}`} className="space-y-3">
                {row.columns.map((column, colIndex) => {
                  if (column.kind === "stack") {
                    return (
                      <div
                        key={`mobile-col-${rowIndex}-${colIndex}`}
                        className="grid grid-cols-2 gap-2 sm:gap-3"
                      >
                        {column.items.map((item, itemIndex) => {
                          const delay = 0.2 + (cardIndex++ * 0.1);
                          return (
                            <div
                              key={`mobile-item-${rowIndex}-${colIndex}-${itemIndex}`}
                              className={itemIndex === column.items.length - 1 ? "col-span-2" : ""}
                            >
                              <GalleryCard
                                content={item.content}
                                aspectClass={item.aspectClass}
                                isVisible={isVisible}
                                delay={delay}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }

                  const delay = 0.2 + (cardIndex++ * 0.1);
                  return (
                    <div key={`mobile-col-${rowIndex}-${colIndex}`}>
                      <GalleryCard
                        content={column.content}
                        aspectClass={column.aspectClass}
                        isVisible={isVisible}
                        delay={delay}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden space-y-8 lg:block">
          {galleryRows.map((row, rowIndex) => {
            let cardIndex = 0;
            return (
              <div
                key={`desktop-row-${rowIndex}`}
                className="grid grid-cols-12 gap-6"
              >
                {row.columns.map((column, colIndex) => {
                  if (column.kind === "stack") {
                    return (
                      <div
                        key={`desktop-col-${rowIndex}-${colIndex}`}
                        className={`${column.spanClass} flex flex-col gap-4`}
                      >
                        {column.items.map((item, itemIndex) => {
                          const delay = 0.2 + (cardIndex++ * 0.1);
                          return (
                            <div key={`desktop-item-${rowIndex}-${colIndex}-${itemIndex}`}>
                              <GalleryCard
                                content={item.content}
                                aspectClass={item.aspectClass}
                                isVisible={isVisible}
                                delay={delay}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }

                  const delay = 0.2 + (cardIndex++ * 0.1);
                  return (
                    <div
                      key={`desktop-col-${rowIndex}-${colIndex}`}
                      className={column.spanClass}
                    >
                      <GalleryCard
                        content={column.content}
                        aspectClass={column.aspectClass}
                        isVisible={isVisible}
                        delay={delay}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type GalleryCardProps = {
  content: GalleryContent;
  aspectClass: string;
};

function GalleryCard({ content, aspectClass, isVisible, delay }: GalleryCardProps & { isVisible: boolean; delay: number }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border-3 border-[#ff9302] bg-black/40 backdrop-blur-sm glow-border glow-hover transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 sm:rounded-[20px] lg:rounded-[28px] lg:border-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${delay}s` : '0s' }}>
      <div className={`relative w-full ${aspectClass}`}>
        {content.type === "image" ? (
          <Image
            src={content.src}
            alt={content.alt}
            fill
            sizes="100vw"
            unoptimized={Boolean((content as any).unoptimized)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={content.src}
              poster={content.poster}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="absolute left-3 top-3 rounded-full border-2 border-[#ff9302] bg-[#FF8B00]/30 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.25em] text-white glow-border-strong sm:left-4 sm:top-4 sm:border-3 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.3em] lg:left-5 lg:top-5 lg:px-4 lg:text-xs lg:tracking-[0.35em]">
              Motion
            </span>
          </>
        )}
      </div>
    </div>
  );
}