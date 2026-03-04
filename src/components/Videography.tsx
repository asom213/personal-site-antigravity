import { motion } from 'framer-motion';

export default function Videography() {
    const videos = [
        { title: "Cinematic Travel Film", id: "dQw4w9WgXcQ" }, // Placeholders, can be replaced with real IDs
        { title: "Street Photography POV", id: "L_jWHffIx5E" }
    ];

    return (
        <section id="videography" style={{ padding: '8rem 5%', minHeight: '80vh', backgroundColor: 'var(--bg-color)' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Videography</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '4rem' }}>
                    Telling stories through motion, sound, and light. A collection of selected works.
                </p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem'
                    }}>
                    {videos.map((vid, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,102,204,0.1)' }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                aspectRatio: '16/9',
                                backgroundColor: '#181818', // Keep iframe container dark for video letterboxing
                                position: 'relative',
                                transition: 'box-shadow 0.3s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                            }}
                        >
                            <div style={{ padding: '40% 0 0 0', position: 'relative' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${vid.id}?controls=1&showinfo=0&rel=0`}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                    title={vid.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
