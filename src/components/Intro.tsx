import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function IntroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            id="intro"
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 5%',
                position: 'relative',
                overflow: 'hidden',
                // Using a moody, high-quality mountain/landscape placeholder from Unsplash
                backgroundImage: 'url("https://images.unsplash.com/photo-1542224566-6f3de5865246?q=80&w=3000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay to ensure text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark overlay
                zIndex: 1
            }} />

            <motion.div
                style={{ y, opacity, zIndex: 10, textAlign: 'center' }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                    }
                }}
            >
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(5rem, 15vw, 10rem)',
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        margin: 0,
                        textShadow: '0 4px 12px rgba(0,0,0,0.5)'
                    }}
                >
                    Xu
                </motion.h1>

                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        fontWeight: 400,
                        color: '#fff',
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                    }}
                >
                    Product Manager <span style={{ opacity: 0.5 }}>&bull;</span> Photographer <span style={{ opacity: 0.5 }}>&bull;</span> Videographer
                </motion.h2>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--text-muted)',
                        margin: 0,
                        fontWeight: 300,
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)'
                    }}
                >
                    Building products and capturing moments. Everywhere.
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#fff',
                    opacity: 0.7
                }}
            >
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
