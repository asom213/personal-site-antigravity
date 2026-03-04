import { motion } from 'framer-motion';

export default function ProductManager() {
    return (
        <section id="product" style={{ padding: '8rem 5%', minHeight: '80vh', backgroundColor: 'var(--bg-color-light)' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Product Management</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '4rem' }}>
                    Building user-centered products by blending design, strategy, and execution.
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
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                    {/* Placeholder Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,102,204,0.1)' }} // Apple Link Blue shadow
                        style={{
                            background: '#ffffff',
                            padding: '3rem 2rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                            Case Study Name
                        </div>
                        <div style={{ color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                            Available Soon
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                        style={{
                            background: '#ffffff',
                            padding: '3rem 2rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                        }}
                    >
                        <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                            Another Project
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>
                            In Development
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
