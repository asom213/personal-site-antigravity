import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 100,
                padding: '1.5rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: scrolled ? 'rgba(11, 11, 11, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
                XU YAO<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
                <a href="#intro">Intro</a>
                <a href="#about">About</a>
                <a href="#photography">Photography</a>
                <a href="#product">Product</a>
                <a href="#videography">Videography</a>
            </div>
        </motion.nav>
    );
}
