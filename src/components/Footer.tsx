export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 5%',
            backgroundColor: '#050505',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
        }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
                XU YAO<span style={{ color: 'var(--accent)' }}>.</span>
            </div>

            <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <a href="#" style={{ color: 'var(--text-muted)' }}>Twitter</a>
                <a href="#" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
                <a href="#" style={{ color: 'var(--text-muted)' }}>Instagram</a>
                <a href="#" style={{ color: 'var(--text-muted)' }}>YouTube</a>
                <a href="mailto:hello@example.com" style={{ color: 'var(--text-main)' }}>Get in touch</a>
            </div>

            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', marginTop: '2rem' }}>
                © {new Date().getFullYear()} Xu Yao. All rights reserved.
            </div>
        </footer>
    );
}
