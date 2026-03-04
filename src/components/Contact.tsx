import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '8rem 5%', minHeight: '60vh', backgroundColor: 'var(--bg-color-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '600px', width: '100%' }}
            >
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>Let's Connect</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 300 }}>
                    Whether you want to build a product, capture a moment, or just say hi.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.a
                        href="mailto:hello@example.com"
                        whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1rem 2rem',
                            background: '#ffffff',
                            color: 'var(--text-main)',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                            transition: 'box-shadow 0.3s ease'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Email Me
                    </motion.a>

                    <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1rem 2rem',
                            background: '#ffffff',
                            color: 'var(--text-main)',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                            transition: 'box-shadow 0.3s ease'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        Instagram
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
