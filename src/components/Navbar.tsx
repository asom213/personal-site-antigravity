import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
    { name: 'Home', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Photography', href: '#photography' },
    { name: 'Product', href: '#product' },
    { name: 'Videos', href: '#videography' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#intro');

    // Handle scroll events to detect which section is in view
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple intersection detection based on scroll position
            const sections = LINKS.map(link => link.href.substring(1));
            let current = '#intro';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = `#${section}`;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Left Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                    position: 'fixed',
                    top: '1.5rem',
                    left: '5%',
                    zIndex: 100,
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    color: scrolled ? 'var(--text-main)' : '#fff', // White on hero if not scrolled (assuming dark hero image)
                    transition: 'color 0.3s ease',
                    pointerEvents: 'none' // Let clicks pass through if needed, though it's just text
                }}
            >
                Xu
            </motion.div>

            {/* Floating Pill Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                    position: 'fixed',
                    top: '1.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '50px',
                    padding: '0.4rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
            >
                {LINKS.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveSection(link.href)}
                            style={{
                                position: 'relative',
                                padding: '0.5rem 1.2rem',
                                fontSize: '0.9rem',
                                fontWeight: isActive ? 600 : 500,
                                color: isActive ? '#000' : 'var(--text-muted)',
                                borderRadius: '30px',
                                transition: 'color 0.3s ease',
                                outline: 'none'
                            }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: '#f0f0f5', // Light gray pill background for active state like marco.fyi
                                        borderRadius: '30px',
                                        zIndex: -1
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </a>
                    );
                })}
            </motion.nav>
        </>
    );
}
