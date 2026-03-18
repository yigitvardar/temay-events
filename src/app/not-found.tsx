import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#F8F9FC' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#1B3D6E',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            TEMAY EVENTS
          </div>

          {/* 404 */}
          <div
            style={{
              fontSize: 'clamp(6rem, 20vw, 10rem)',
              fontWeight: 900,
              color: '#1B3D6E',
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            404
          </div>

          {/* Message */}
          <h1
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#0F1A2E',
              marginBottom: '0.5rem',
            }}
          >
            Sayfa Bulunamadı
          </h1>
          <p
            style={{
              color: '#5A6B82',
              fontSize: '0.95rem',
              marginBottom: '2rem',
              maxWidth: '360px',
            }}
          >
            Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          </p>

          {/* CTA */}
          <Link
            href="/tr"
            style={{
              display: 'inline-block',
              backgroundColor: '#1B3D6E',
              color: '#ffffff',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.75rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </body>
    </html>
  );
}
