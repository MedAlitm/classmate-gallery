import DomeGallery from './DomeGallery';

const CLASSMATES = [
  { src: '/photos/0bb76cec-88a4-474c-a7ca-8ccfcdff41ef.jpg', alt: 'Classmate' },
  { src: '/photos/0bf31ba9-d9b2-4b9a-86a3-730a0595279d.jpg', alt: 'Classmate' },
  { src: '/photos/1.jpg', alt: 'Classmate' },
  { src: '/photos/2.png', alt: 'Classmate' },
  { src: '/photos/3.jpg', alt: 'Classmate' },
  { src: '/photos/3d31d434-e5b7-4e16-8ec1-f3f2bef4cf3c.jpg', alt: 'Classmate' },
  { src: '/photos/20a7edf2-6082-4269-93f3-813a1b39d17a.jpg', alt: 'Classmate' },
  { src: '/photos/94b21860-c727-48d5-a030-07640e473d8a.jpg', alt: 'Classmate' },
  { src: '/photos/0144d8f7-aeed-4740-a55f-40746949f285.jpg', alt: 'Classmate' },
  { src: '/photos/1710f14f-6154-45e6-b2de-2d2695daa208.jpg', alt: 'Classmate' },
  { src: '/photos/7913fa01-6723-4521-8db8-683ddb87d274.jpg', alt: 'Classmate' },
  { src: '/photos/8972a981-54b6-4020-bd54-80dfb5e9fb28.jpg', alt: 'Classmate' },
  { src: '/photos/0267629c-392a-40cc-8bd7-cfa80f5a4a3b.jpg', alt: 'Classmate' },
  { src: '/photos/00498920-6d06-4dcb-be77-dcbe9774021c.jpg', alt: 'Classmate' },
  { src: '/photos/a90e4406-c8a5-4486-8532-87dda07b4dbd.jpg', alt: 'Classmate' },
  { src: '/photos/af74bc41-020b-40e6-9255-1c726d7f266c.jpg', alt: 'Classmate' },
  { src: '/photos/b71ff8b2-5cf1-4e5a-8a5d-fb9d0db83011.jpg', alt: 'Classmate' },
  { src: '/photos/e686113f-e9e6-4847-bfbe-b048472d0aaa.jpg', alt: 'Classmate' },
  { src: '/photos/f6647ce2-34a4-4fec-a689-4489c7c3b282.jpg', alt: 'Classmate' },
];

const BG = '#0D0A06';
const OVERLAY_COLOR = '#0D0A06';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: BG, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 50% 40%, rgba(191,155,48,0.06) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, textAlign: 'center', paddingTop: '28px', pointerEvents: 'none' }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 14px' }} />
        <h1 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'linear-gradient(180deg, #F2D680 0%, #C9A84C 40%, #8B6914 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0, filter: 'drop-shadow(0 2px 12px rgba(201,168,76,0.3))' }}>Class of 2026</h1>
        <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)', fontWeight: 300, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.4)', margin: '10px 0 0' }}>Drag to explore · Click to enlarge</p>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '14px auto 0' }} />
      </div>
      <DomeGallery images={CLASSMATES} fit={0.8} minRadius={600} maxVerticalRotationDeg={0} segments={34} dragDampening={2} grayscale={false} overlayBlurColor={OVERLAY_COLOR} imageBorderRadius="16px" openedImageBorderRadius="20px" />
      <div style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, zIndex: 10, textAlign: 'center', pointerEvents: 'none' }}>
        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', margin: '0 auto 8px' }} />
        <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.25)' }}>✦ Memories ✦</p>
      </div>
    </div>
  );
}
