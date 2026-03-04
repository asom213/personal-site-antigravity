import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_IMAGES = [
    { src: 'https://images.unsplash.com/photo-1542051812-099058c1470e?q=80&w=3000&auto=format&fit=crop', title: 'Street Photography', subtitle: 'Neon Nights in Tokyo', category: 'Street' },
    { src: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=3000&auto=format&fit=crop', title: 'Street Photography', subtitle: 'Urban Shadows', category: 'Street' },
    { src: 'https://images.unsplash.com/photo-1547466185-5a1e8a4bb2f6?q=80&w=3000&auto=format&fit=crop', title: 'Street Photography', subtitle: 'City Pulses', category: 'Street' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3000&auto=format&fit=crop', title: 'Travel Explorations', subtitle: 'Epic Landscapes', category: 'Travel' },
    { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3000&auto=format&fit=crop', title: 'Travel Explorations', subtitle: 'Wanderlust', category: 'Travel' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3000&auto=format&fit=crop', title: 'Travel Explorations', subtitle: 'Hidden Gems', category: 'Travel' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3000&auto=format&fit=crop', title: 'Portraits', subtitle: 'Capturing the Human Spirit', category: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3000&auto=format&fit=crop', title: 'Portraits', subtitle: 'Natural Beauty', category: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3000&auto=format&fit=crop', title: 'Portraits', subtitle: 'Authentic Emotion', category: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3000&auto=format&fit=crop', title: 'Engagements', subtitle: 'Two Beginnings', category: 'Engagement' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3000&auto=format&fit=crop', title: 'Engagements', subtitle: 'Modern Romance', category: 'Engagement' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=3000&auto=format&fit=crop', title: 'Engagements', subtitle: 'Quiet Moments', category: 'Engagement' }
];

const CATEGORIES = ['Featured', 'Street', 'Portrait', 'Engagement', 'Travel'];

export default function HeroSlider() {
    const [activeCategory, setActiveCategory] = useState('Featured');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const filteredImages = activeCategory === 'Featured'
        ? ALL_IMAGES
        : ALL_IMAGES.filter(img => img.category === activeCategory);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    useEffect(() => {
        if (filteredImages.length <= 1 || isGalleryOpen) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
        }, 6000); // Netflix style slow swap
        return () => clearInterval(timer);
    }, [filteredImages.length, activeCategory, isGalleryOpen]);

    const activeImage = filteredImages[currentIndex] || ALL_IMAGES[0];

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#000', overflow: 'hidden' }}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={activeImage.src}
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
                        backgroundImage: `url(${activeImage.src})`,
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
                            key={activeImage.src}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0, textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                                {activeImage.title}
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: '#ccc', marginTop: '0.5rem', marginBottom: '1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                                {activeImage.subtitle}
                            </p>

                            <p style={{
                                fontSize: '1.15rem',
                                lineHeight: 1.5,
                                color: '#e5e5e5',
                                marginBottom: '2rem',
                                textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                                fontWeight: 300,
                                maxWidth: '90%'
                            }}>
                                {(activeImage.category === 'Portrait' || activeImage.category === 'Engagement')
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
                                Click to explore {activeImage.title.toLowerCase()}
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
                        const isActive = activeCategory === category;
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
                {isGalleryOpen && (
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
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{activeImage.title}</h2>

                                {/* Photography Philosophy */}
                                <div style={{
                                    padding: '2rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderLeft: '4px solid var(--accent)',
                                    borderRadius: '0 12px 12px 0'
                                }}>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Methodology</h3>
                                    <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: 'var(--text-main)', fontWeight: 300 }}>
                                        "I co-create with my subjects. By blending collaborative moodboards with natural prompts, we capture authentic emotion and inner beauty, focusing on genuine human connection rather than stiff poses."
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
                                        key={idx}
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
                                            src={img.src}
                                            alt={img.subtitle}
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
        </div>
    );
}
