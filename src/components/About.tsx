import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" style={{
            padding: '8rem 5%',
            backgroundColor: 'var(--bg-color)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <motion.div
                style={{ maxWidth: '800px', width: '100%' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <span style={{
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        fontWeight: 600
                    }}>
                        About
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        margin: '0.5rem 0 1.5rem',
                        letterSpacing: '-0.02em',
                        color: 'var(--text-main)'
                    }}>
                        Hey, I'm Xu
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 300 }}>
                    I'm a Product Manager by day, building digital experiences that matter. By night (and weekends), I chase light with my camera and tell stories through video.
                </motion.div>

                <motion.div variants={itemVariants} style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 300 }}>
                    My work spans the intersection of technology and creativity. Whether I'm shipping features, capturing street photography, or editing travel vlogs, I believe in the power of intentional design and authentic storytelling.
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {/* Product Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💻</div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>Product</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                            Vibe coding, shipping features, and building tools that solve real problems.
                        </p>
                    </motion.div>

                    {/* Photography Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📷</div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>Photography</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                            Street, travel, portraits, and engagement sessions. Capturing fleeting moments.
                        </p>
                    </motion.div>

                    {/* Video Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎬</div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>Video</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                            YouTube creator sharing stories, tutorials, and creative experiments.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
