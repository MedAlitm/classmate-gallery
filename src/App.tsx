import DomeGallery from './DomeGallery';

/**
 * Converts Google Drive file IDs to direct-embeddable image URLs.
 * Uses lh3.googleusercontent.com which bypasses CORS/virus scan issues.
 */
function driveImg(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${fileId}=s1200`;
}

// Your class photos from Google Drive folder "2026" — 19 photos
const CLASSMATES = [
  driveImg('1PH6Zd-CHHraXxpj5GvpP4KURRkIlsF3_'),  // 0bb76cec...jpg
  driveImg('1Vxlpo4LJv73rB4CNGutqmj_XpxKcy1cN'),  // 0bf31ba9...jpg
  driveImg('1MAIVbLB7SuF4aglps2rLh3yKq39lThaQ'),  // 1.jpg
  driveImg('1jpKu1MP8wcjHOkZAR1p45Qps7NZWP9--'),  // 2.png
  driveImg('1qWhq8TZ--HaNbWxy4VPW9roEbc99GaiP'),  // 3.jpg
  driveImg('1w3g50Q8VjA03vtZmpOD14hFK4lUOwlnO'),  // 3d31d434...jpg
  driveImg('1gr2O5e7P-QebUvJ1F4F3IWg0aSLUOpUp'),  // 20a7edf2...jpg
  driveImg('1VrcrRWX0VMD8-gAbK-Q5pLLQXpR3Rb1d'),  // 94b21860...jpg
  driveImg('10Z2U2Wwqg03Xe6-5Pre_PRZEjhuqK9_h'),  // 0144d8f7...jpg
  driveImg('1YvFzJjApPoTwp_vtLIAXKHDColAkD7F3'),  // 1710f14f...jpg
  driveImg('1tSe8cEO5d-WRdrDHEcE1ohjpOhvLj96j'),  // 7913fa01...jpg
  driveImg('1MjHUqoBAuCNlyahNfAS8HO8GY5N8MbCr'),  // 8972a981...jpg
  driveImg('17CUAyiIYms7XzH2DC1AgXIP4tWAFUtcM'),  // 0267629c...jpg
  driveImg('1042AA2b3Tn-ix6PaD_ZJEBP7U91MfOq9'),  // 00498920...jpg
  driveImg('1AKS3_AfhmW8zL9hY0of4vyUmlPfJt6l_'),  // a90e4406...jpg
  driveImg('1sxQQ33z7_jOLmZCAJrqgshljdZd9cXDO'),  // af74bc41...jpg
  driveImg('1SKR9JYapbsVRLc-_Z7Jj_qnY67j5vcao'),  // b71ff8b2...jpg
  driveImg('1XnWEDGZRNjH8kB7J89Ufk51jshNPWV64'),  // e686113f...jpg
  driveImg('1vd-E_MaS5CTkxTwVB1GQKmysvgPd1X60'),  // f6647ce2...jpg
];

// Golden theme colors
const BG = '#0D0A06';
const OVERLAY_COLOR = '#0D0A06';

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: BG,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle golden ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(191,155,48,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          textAlign: 'center',
          paddingTop: '28px',
          pointerEvents: 'none',
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '0 auto 14px',
          }}
        />
        <h1
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            background: 'linear-gradient(180deg, #F2D680 0%, #C9A84C 40%, #8B6914 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            filter: 'drop-shadow(0 2px 12px rgba(201,168,76,0.3))',
          }}
        >
          Class of 2026
        </h1>
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
            fontWeight: 300,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.4)',
            margin: '10px 0 0',
          }}
        >
          Drag to explore · Click to enlarge
        </p>
        {/* Decorative line */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '14px auto 0',
          }}
        />
      </div>

      {/* Dome Gallery */}
      <DomeGallery
        images={CLASSMATES}
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={false}
        overlayBlurColor={OVERLAY_COLOR}
        imageBorderRadius="16px"
        openedImageBorderRadius="20px"
      />

      {/* Bottom golden accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: 0,
          right: 0,
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
            margin: '0 auto 8px',
          }}
        />
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.25)',
          }}
        >
          ✦ Memories ✦
        </p>
      </div>
    </div>
  );
}
