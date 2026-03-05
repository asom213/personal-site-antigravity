import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_IMAGES = [
    {
        id: 'intro',
        fullSrc: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=60&w=600&auto=format&fit=crop',
        title: 'Photography Collection',
        subtitle: 'A selection of my finest work',
        category: 'Photography'
    },
    {
        id: '1',
        fullSrc: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=60&w=600&auto=format&fit=crop',
        title: 'Street Photography',
        subtitle: 'Neon Nights in Tokyo',
        category: 'Street'
    },
    {
        id: '7',
        fullSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=60&w=600&auto=format&fit=crop',
        title: 'Portraits',
        subtitle: 'Capturing the Human Spirit',
        category: 'Portrait'
    },
    {
        id: '10',
        fullSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=60&w=600&auto=format&fit=crop',
        title: 'Engagements',
        subtitle: 'Two Beginnings',
        category: 'Engagement'
    },
    {
        id: '4',
        fullSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=60&w=600&auto=format&fit=crop',
        title: 'Travel Explorations',
        subtitle: 'Epic Landscapes',
        category: 'Travel'
    },
    {
        id: '2',
        fullSrc: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=60&w=600&auto=format&fit=crop',
        title: 'Street Photography',
        subtitle: 'Urban Shadows',
        category: 'Street'
    },
    {
        id: '8',
        fullSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=600&auto=format&fit=crop',
        title: 'Portraits',
        subtitle: 'Natural Beauty',
        category: 'Portrait'
    },
    {
        id: '11',
        fullSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=60&w=600&auto=format&fit=crop',
        title: 'Engagements',
        subtitle: 'Modern Romance',
        category: 'Engagement'
    },
    {
        id: '5',
        fullSrc: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=60&w=600&auto=format&fit=crop',
        title: 'Travel Explorations',
        subtitle: 'Wanderlust',
        category: 'Travel'
    },
    {
        id: '3',
        fullSrc: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=60&w=600&auto=format&fit=crop',
        title: 'Street Photography',
        subtitle: 'City Pulses',
        category: 'Street'
    },
    {
        id: '9',
        fullSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=60&w=600&auto=format&fit=crop',
        title: 'Portraits',
        subtitle: 'Authentic Emotion',
        category: 'Portrait'
    },
    {
        id: '12',
        fullSrc: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=60&w=600&auto=format&fit=crop',
        title: 'Engagements',
        subtitle: 'Quiet Moments',
        category: 'Engagement'
    },
    {
        id: '6',
        fullSrc: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3000&auto=format&fit=crop',
        thumbSrc: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=60&w=600&auto=format&fit=crop',
        title: 'Travel Explorations',
        subtitle: 'Hidden Gems',
        category: 'Travel'
    }
];

const CATEGORIES = ['Photography', 'Street', 'Portrait', 'Engagement', 'Travel'];

export default function HeroSlider() {
    const [activeCategory, setActiveCategory] = useState('Photography');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    // Lightbox State
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredImages = activeCategory === 'Photography'
        ? ALL_IMAGES
        : ALL_IMAGES.filter(img => img.category === activeCategory);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    useEffect(() => {
        // Pause slider if gallery or lightbox is open
        if (filteredImages.length <= 1 || isGalleryOpen || lightboxIndex !== null) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [filteredImages.length, activeCategory, isGalleryOpen, lightboxIndex]);

    // Handle Keyboard Navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
            } else if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
            } else if (e.key === 'Escape') {
                setLightboxIndex(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredImages.length]);

    const activeImage = filteredImages[currentIndex] || ALL_IMAGES[0];

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#000', overflow: 'hidden' }}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={activeImage.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${activeImage.fullSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </AnimatePresence>

            {/* Vignette Overlay (Netflix effect) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(11,11,11,0.2) 0%, rgba(11,11,11,0.9) 100%)',
                pointerEvents: 'none'
            }} />

            {/* Content Container positioned to leave space for categories at bottom */}
            <div style={{
                position: 'absolute',
                bottom: '12%',
                left: '5%',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                zIndex: 10,
            }}>

                {/* Text Overlay */}
                <div style={{ color: '#fff', maxWidth: '600px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImage.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: 0, textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                                {activeImage.title}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '0.5rem', marginBottom: '1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                                {activeImage.subtitle}
                            </p>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.5,
                                color: '#e5e5e5',
                                marginBottom: '2rem',
                                textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                                fontWeight: 300,
                                maxWidth: '90%'
                            }}>
                                {activeImage.category === 'Photography'
                                    ? "Welcome to my portfolio. This curated collection showcases a blend of my favorite moments captured across various styles—from intimate portraits to vibrant street scenes and breathtaking landscapes."
                                    : (activeImage.category === 'Portrait' || activeImage.category === 'Engagement')
                                        ? "Every portrait begins with collaboration. I work closely with my subjects using moodboards to establish a shared vision, then guide them through the session with thoughtful direction. My focus is on capturing authentic emotion and revealing the natural beauty that emerges when people feel seen and comfortable in front of the lens."
                                        : "My approach is rooted in careful observation. Whether wandering bustling streets or vast landscapes, I wait for that perfect, fleeting alignment of light, subject, and moment to tell a compelling visual story without staging."
                                }
                            </p>

                            <motion.button
                                onClick={() => setIsGalleryOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: '#ffffff',
                                    color: '#000',
                                    border: 'none',
                                    padding: '0.8rem 2rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '4px', // Netflix button style
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                View Gallery
                            </motion.button>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                                Click to explore {activeImage.category === 'Photography' ? 'my photography' : activeImage.title.toLowerCase()}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Categories Menu */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    paddingBottom: '1rem', // Space for custom scrollbar
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE/Edge
                    WebkitOverflowScrolling: 'touch',
                }}>
                    <style>
                        {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                        `}
                    </style>
                    {CATEGORIES.map(category => {
                        const isActive = activeCategory === 'Photography'
                            ? activeImage.category === category
                            : activeCategory === category;
                        return (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: isActive ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: isActive ? '#000000' : '#ffffff',
                                    borderRadius: '30px',
                                    padding: '0.6rem 1.5rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap',
                                    outline: 'none',
                                    boxShadow: isActive ? '0 4px 15px rgba(255,255,255,0.2)' : '0 4px 15px rgba(0,0,0,0.1)'
                                }}
                            >
                                {category}
                            </motion.button>
                        );
                    })}
                </div>

            </div>

            {/* Expanded Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && lightboxIndex === null && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ ease: "circOut", duration: 0.5 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'var(--bg-color)',
                            zIndex: 200,
                            overflowY: 'auto',
                            padding: '6rem 5% 4rem'
                        }}
                    >
                        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                            {/* Return Button */}
                            <button
                                onClick={() => setIsGalleryOpen(false)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-main)',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    padding: '0 0 2rem 0',
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to Photography
                            </button>

                            <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 600 }}>
                                    {activeCategory === 'Photography' ? 'Photography' : activeImage.title}
                                </h2>

                                {/* Photography Philosophy */}
                                <div style={{
                                    padding: '2rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderLeft: '4px solid var(--accent)',
                                    borderRadius: '0 12px 12px 0'
                                }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {activeCategory === 'Photography' ? 'Curation' : (activeImage.category === 'Portrait' || activeImage.category === 'Engagement') ? 'Methodology' : 'Observation'}
                                    </h3>
                                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-main)', fontWeight: 300 }}>
                                        {activeCategory === 'Photography'
                                            ? "A thoughtfully curated selection highlighting my finest work across portraiture, street snapshots, and travel landscapes. Each photograph represents a defining moment in my journey as a visual storyteller."
                                            : (activeImage.category === 'Portrait' || activeImage.category === 'Engagement')
                                                ? "\"I co-create with my subjects. By blending collaborative moodboards with natural prompts, we capture authentic emotion and inner beauty, focusing on genuine human connection rather than stiff poses.\""
                                                : "\"My approach is rooted in careful observation. Whether wandering bustling streets or vast landscapes, I wait for that perfect, fleeting alignment of light, subject, and moment to tell a compelling visual story without staging.\""
                                        }
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                    gap: '1.5rem'
                                }}
                            >
                                {filteredImages.map((img, idx) => (
                                    <motion.div
                                        key={img.id}
                                        onClick={() => setLightboxIndex(idx)}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            aspectRatio: '1/1',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <img
                                            src={img.thumbSrc}
                                            alt={img.subtitle}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            padding: '2rem 1rem 1rem',
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                            color: '#fff',
                                            fontSize: '1.1rem',
                                            fontWeight: 500
                                        }}>
                                            {img.subtitle}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox / Slideshow View */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 300,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setLightboxIndex(null)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '3rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 310,
                                padding: '1rem'
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Controls */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
                            }}
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 310,
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
                            }}
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 310,
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        {/* Image Container with AnimatePresence for transitions */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={filteredImages[lightboxIndex].id}
                                src={filteredImages[lightboxIndex].fullSrc}
                                alt={filteredImages[lightboxIndex].subtitle}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    maxWidth: '90vw',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: '4px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                }}
                            />
                        </AnimatePresence>

                        {/* Image Subtitle / Info */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            textAlign: 'center',
                            color: '#fff',
                            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                                {filteredImages[lightboxIndex].subtitle}
                            </h3>
                            <p style={{ margin: 0, color: '#ccc', fontSize: '1rem' }}>
                                {lightboxIndex + 1} of {filteredImages.length}
                            </p>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
