'use client';
import { useState, useRef, useEffect } from 'react';
import useFontStore from '@/src/store/useFontStore';
import FontMap from '../src/components/FontMap';
import { fontConfigs } from '@/src/lib/fontConfig';
import './styles/typography.css';

export default function Home() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { fonts, selectedFontId, selectFont } = useFontStore();

  const popularOrder = [
    "Playfair Display", "Merriweather", "Lora", "Roboto Serif", "Bitter", "Libre Baskerville", "Linden Hill",
    "Cormorant", "Cormorant Garamond", "EB Garamond", "Crimson Text", "Sorts Mill Goudy", "Bodoni Moda",
    "Spectral", "Newsreader", "Bree Serif", "Josefin Slab", "Rokkitt", "Andada Pro", "Aleo", "Crete Round",
    "Arvo", "Quattrocento", "Coustard", "Imbue", "PT Serif", "Noticia Text", "Zilla Slab", "Ovo",
    "Alfa Slab One", "Xanh Mono", "Bellefair", "Source Serif", "Headland One", "Instrument Serif",
    "DM Serif Display", "Abril Fatface", "Chonburi", "Eczar", "Alike Angular", "Alike", "Young Serif",
    "Oldenburg", "BhuTuka Expanded One", "Montaga", "Kurale", "Gabriela", "Inknut Antiqua", "Special Elite",
    "Arbutus", "Bigelow Rules", "Mountains of Christmas", "Emilys Candy", "Paprika", "Langar", "Diplomata SC",
    "Elsie", "Elsie Swash Caps", "Almendra", "Luxurious Roman", "Kotta One", "Diplomata"
  ];

  const newestOrder = [
    "Young Serif", "Bodoni Moda", "Newsreader", "Roboto Serif", "Imbue", "Instrument Serif", "Fraunces", "DM Serif Display", "Spectral", "Bellefair", "Headland One", "Coustard", "Chonburi", "BhuTuka Expanded One", "Kurale", "Gabriela", "Inknut Antiqua", "Bigelow Rules", "Mountains of Christmas", "Emilys Candy", "Paprika", "Langar", "Diplomata SC", "Elsie", "Elsie Swash Caps", "Almendra", "Luxurious Roman", "Kotta One", "Diplomata"
  ];

  const azOrder = [
    "Abril Fatface", "Aleo", "Alfa Slab One", "Alike", "Alike Angular", "Almendra", "Andada Pro", "Arbutus", "Arvo", "Bellefair", "BhuTuka Expanded One", "Bigelow Rules", "Bitter", "Bodoni Moda", "Bree Serif", "Chonburi", "Cormorant", "Cormorant Garamond", "Coustard", "Courier Prime", "Crete Round", "Crimson Text", "DM Serif Display", "Diplomata", "Diplomata SC", "Domine", "EB Garamond", "Eczar", "Elsie", "Elsie Swash Caps", "Emilys Candy", "Fira Mono", "Fraunces", "Gabriela", "Headland One", "IBM Plex Mono", "IBM Plex Serif", "Imbue", "Inknut Antiqua", "Instrument Serif", "Josefin Slab", "Kotta One", "Kurale", "Langar", "Libre Baskerville", "Linden Hill", "Lora", "Luxurious Roman", "Maiden Orange", "Merriweather", "Montaga", "Mountains of Christmas", "Newsreader", "Noto Sans Mono", "Noto Serif Display", "Noticia Text", "Oldenburg", "Ovo", "Paprika", "Playfair Display", "PT Mono", "PT Serif", "Quattrocento", "Rokkitt", "Roboto Mono", "Roboto Serif", "Rosarivo", "Slabo 27px", "Sorts Mill Goudy", "Source Code Pro", "Source Serif", "Special Elite", "Spectral", "Stint Ultra Condensed", "Suranna", "Ultra", "Young Serif", "Zilla Slab"
  ];

  const [selectedTab, setSelectedTab] = useState('Popular');

  const azFonts = azOrder
    .map(name => fonts.find(f => f.name === name))
    .filter(Boolean);

  // Add any fonts not in azOrder at the end (just in case)
  const remainingFonts = fonts.filter(
    f => !azOrder.includes(f.name)
  ).sort((a, b) => a.name.localeCompare(b.name));

  const displayedFonts = selectedTab === 'Popular'
    ? popularOrder.map(name => fonts.find(f => f.name === name)).filter(Boolean)
    : selectedTab === 'New'
      ? newestOrder.map(name => fonts.find(f => f.name === name)).filter(Boolean)
      : selectedTab === 'AZ'
        ? azOrder.map(name => fonts.find(f => f.name === name)).filter(Boolean)
        : fonts;

  const fontRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const stickyHeaderHeight = 140; // Updated estimate: header + buttons height in px

  // Helper for sidebar font card styles
  const sidebarFontCardStyle = (isActive: boolean, isHovered: boolean) => {
    let backgroundColor = 'transparent';
    let boxShadow = 'none';
    if (isActive || isHovered) {
      backgroundColor = '#F9F9FC';
      boxShadow = 'none';
    }
    return {
      backgroundColor,
      boxShadow,
      borderRadius: '0px',
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      transition: 'background 0.15s, box-shadow 0.15s',
      width: '100%',
      height: '150px',
      display: 'flex',
      alignItems: 'stretch',
      borderBottom: '0.5px solid rgba(0,0,0,0.10)',
    };
  };

  // Sidebar hover state for font list
  const [hoveredFontId, setHoveredFontId] = useState<string | null>(null);

  // Define the h6/Nano Heading style
  const nanoHeadingStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    color: '#000000',
    fontWeight: 400,
  };

  // Remove API fetch logic for use cases and replace with local image detection
  const imageExts = ['jpeg', 'jpg', 'png', 'webp'];
  const getFontImages = (fontName: string): string[] => {
    const safeName = fontName.replace(/ /g, '').toLowerCase();
    const folderName = fontName;
    // Try 1, 2, 3 for each extension
    return [1, 2, 3].map(i =>
      imageExts.map(ext => `/FontsInUse_Images/${folderName}/${safeName}${i}.${ext}`)
    ).flat();
  };

  // For now, all images link to Fonts in Use homepage and have label 'Fonts in Use'.
  interface UseCaseImage {
    src: string;
    link: string;
    label: string;
  }

  const [validImages, setValidImages] = useState<UseCaseImage[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!selectedFontId) {
      setValidImages([]);
      return;
    }
    const fontName = fonts.find(f => f.id === selectedFontId)?.name;
    if (!fontName) {
      setValidImages([]);
      return;
    }
    const candidates = getFontImages(fontName);
    let found: UseCaseImage[] = [];
    let checked = 0;
    candidates.forEach(src => {
      const img = new window.Image();
      img.onload = () => {
        found.push({ src, link: 'https://fontsinuse.com/', label: 'Fonts in Use' });
        checked++;
        if (checked === candidates.length) setValidImages(found.slice(0, 3));
      };
      img.onerror = () => {
        checked++;
        if (checked === candidates.length) setValidImages(found.slice(0, 3));
      };
      img.src = src;
    });
  }, [selectedFontId, fonts]);

  // Add a style object for the use case label
  const useCaseLabelStyle: React.CSSProperties = {
    ...nanoHeadingStyle,
    fontSize: '10px',
    opacity: 0.6,
    marginTop: '4px',
    textAlign: 'left',
    width: '100%',
    transition: 'opacity 0.15s',
  };

  // Pill button style for top bar
  const pillButtonBase: React.CSSProperties = {
    borderRadius: '9999px',
    border: '1px solid rgba(0,0,0,0.3)',
    background: 'white',
    padding: '2px 18px', // less vertical padding
    fontSize: '14px',
    color: '#000',
    fontWeight: 400,
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.15s, border 0.15s',
    outline: 'none',
    cursor: 'pointer',
  };

  // Font weight mapping for human-friendly names
  const weightNames: Record<string, string> = {
    '100': 'Thin',
    '200': 'Extra Light',
    '300': 'Light',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'SemiBold',
    '700': 'Bold',
    '800': 'ExtraBold',
    '900': 'Black',
  };

  const [testerWeight, setTesterWeight] = useState('400');
  const [testerSize, setTesterSize] = useState(36);
  const [testerText, setTesterText] = useState('');

  const selectedFont = fonts.find(f => f.id === selectedFontId);
  const availableWeights = selectedFont?.weights || ['400'];

  const [weightDropdownOpen, setWeightDropdownOpen] = useState(false);
  const [weightDropdownPressed, setWeightDropdownPressed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left sidebar - Search Results - 300px fixed width */}
      <div style={{ 
        width: '300px', 
        height: '100%', 
        borderRight: '1px solid #e5e7eb', 
        overflowY: 'auto',
        flexShrink: 0
      }} id="sidebar-scroll">
        <div style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ padding: '1rem 1rem 0.5rem 1rem' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Similar Results</h2>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button style={{ fontWeight: selectedTab === 'Popular' ? '500' : 'normal', color: selectedTab === 'Popular' ? '#111' : '#6b7280' }} onClick={() => setSelectedTab('Popular')}>Popular</button>
              <button style={{ fontWeight: selectedTab === 'New' ? '500' : 'normal', color: selectedTab === 'New' ? '#111' : '#6b7280' }} onClick={() => setSelectedTab('New')}>New</button>
              <button style={{ fontWeight: selectedTab === 'AZ' ? '500' : 'normal', color: selectedTab === 'AZ' ? '#111' : '#6b7280' }} onClick={() => setSelectedTab('AZ')}>AZ</button>
            </div>
          </div>
        </div>
        {/* Font list */}
        <div style={{ padding: '0rem' }}>
          {displayedFonts.map(font => {
            if (!font) return null;
            const fontConfig = fontConfigs[font.name];
            const isActive = selectedFontId === font.id;
            const isHovered = hoveredFontId === font.id;
            // Determine if the font name is a single word
            const isSingleWord = font.name.trim().split(' ').length === 1;
            // Font size rule (match FontCard)
            const fontNameFontSize = isSingleWord && font.name.length > 12 ? 24 : 26;
            return (
              <div
                key={font.id}
                ref={el => { fontRefs.current[font.id] = el; }}
                style={sidebarFontCardStyle(isActive, isHovered)}
                onClick={() => selectFont(font.id)}
                onMouseEnter={() => setHoveredFontId(font.id)}
                onMouseLeave={() => setHoveredFontId(null)}
              >
                <div style={{ marginLeft: '26px', marginRight: '26px', padding: '0px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
                  <span
                    className={fontConfig?.className}
                    style={{
                      fontSize: `${fontNameFontSize}px`,
                      fontWeight: 400,
                      lineHeight: 1,
                      margin: 0,
                      marginBottom: '22px',
                      wordBreak: 'break-word',
                    }}
                  >
                    {font.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '11px',
                      fontWeight: 450,
                      color: '#111',
                      opacity: 1,
                      margin: 0,
                      marginBottom: '2px',
                    }}
                  >
                    {font.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '11px',
                      fontWeight: 450,
                      color: '#6b7280',
                      opacity: 0.8,
                      margin: 0,
                    }}
                  >
                    {font.designer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Overlay red border for testing sidebar width */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '300px',
        height: '100vh',
        border: '2px solid red',
        pointerEvents: 'none',
        zIndex: 9999,
      }} />
      
      {/* Main content - Font Map */}
      <div style={{ 
        flex: '1', 
        height: '100%', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Search bar */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          padding: '1rem', 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e5e7eb', 
          zIndex: 10 
        }}>
          <div style={{ 
            maxWidth: '36rem', 
            margin: '0 auto', 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '9999px', 
            padding: '0.5rem 1rem' 
          }}>
            <input 
              type="text" 
              placeholder="serif fonts" 
              style={{ 
                flex: 1, 
                backgroundColor: 'transparent', 
                outline: 'none' 
              }}
            />
            <button style={{ marginLeft: '0.5rem', color: '#6b7280' }}>×</button>
          </div>
          
          <div style={{ 
            maxWidth: '36rem', 
            margin: '0.5rem auto 0', 
            display: 'flex', 
            gap: '1rem' 
          }}>
            <button style={{ fontSize: '0.875rem', fontWeight: '500' }}>Appearance</button>
            <button style={{ fontSize: '0.875rem', fontWeight: '500' }}>Use Case</button>
            <button style={{ fontSize: '0.875rem', fontWeight: '500' }}>Price</button>
            <button style={{ fontSize: '0.875rem', fontWeight: '500' }}>Vibe</button>
          </div>
        </div>
        
        {/* Font map area */}
        <div style={{ 
          marginTop: '6rem', 
          height: 'calc(100% - 6rem)'
        }}>
          <FontMap 
            selectedFontId={selectedFontId}
            onSelectFont={selectFont}
            centeredFontId={selectedFontId}
          />
        </div>
      </div>
      
      {/* Font Details Popup - shown when a font is selected - 377x555px */}
      {selectedFontId && (
        <div style={{ 
          position: 'fixed',
          left: '330px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '377px',
          minHeight: '555px',
          height: '555px',
          backgroundColor: 'white',
          boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.1)',
          borderLeft: '1px solid #e5e7eb',
          padding: '2rem',
          overflow: 'auto',
          borderRadius: '24px',
        }}>
          {/* Top bar: pills left, actions right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button
                className={`pill-button${selectedTab === 'Serif' ? ' selected' : ''}`}
                onClick={() => setSelectedTab('Serif')}
              >
                Serif
              </button>
              <button
                className={`pill-button${selectedTab === 'Elegant' ? ' selected' : ''}`}
                onClick={() => setSelectedTab('Elegant')}
              >
                Elegant
              </button>
              <button
                className={`pill-button${selectedTab === 'Narrow' ? ' selected' : ''}`}
                onClick={() => setSelectedTab('Narrow')}
              >
                Narrow
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {/* Download and Save buttons */}
              <button
                style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '0.4rem', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
                aria-label="Download Trial"
              >
                <img src="/DownloadTrial.svg" alt="Download Trial" style={{ width: '20px', height: '20px', display: 'block' }} />
              </button>
              <button
                style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '0.4rem', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
                aria-label="Save"
              >
                <img src="/Save.svg" alt="Save" style={{ width: '20px', height: '20px', display: 'block' }} />
              </button>
              {/* Close button using Close.svg */}
              <button
                style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '0.75rem', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
                onClick={() => selectFont(null)}
                aria-label="Close"
              >
                <img src="/Close.svg" alt="Close" style={{ width: '32px', height: '32px', display: 'block' }} />
              </button>
            </div>
          </div>
          {/* Type tester controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6.5rem', marginBottom: '1.5rem' }}>
            {/* Weight dropdown with icon */}
            <div style={{ position: 'relative', display: 'inline-block', minWidth: '90px' }}>
              <select
                value={testerWeight}
                onChange={e => setTesterWeight(e.target.value)}
                className="nano-heading"
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                  marginRight: '0.5rem',
                  appearance: 'none',
                  outline: 'none',
                  minWidth: '90px',
                }}
                onFocus={() => setWeightDropdownOpen(true)}
                onBlur={() => { setWeightDropdownOpen(false); setWeightDropdownPressed(false); }}
                onMouseDown={() => setWeightDropdownPressed(true)}
                onMouseUp={() => setWeightDropdownPressed(false)}
              >
                {availableWeights.map(w => (
                  <option key={w} value={w} style={{ fontWeight: w }}>{weightNames[w] || w}</option>
                ))}
              </select>
              <img
                src={weightDropdownPressed ? '/Dropdown-up.svg' : '/Dropdown.svg'}
                alt="Dropdown"
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  pointerEvents: 'none',
                }}
              />
            </div>
            {/* Font size pill and slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{
                borderRadius: '9999px',
                border: '1px solid #000000',
                background: '#ffffff',
                fontSize: '11px',
                color: '#000000',
                padding: '2px 0px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                minWidth: '32px',
                textAlign: 'center',
                display: 'inline-block',
              }}>{testerSize}</span>
              <input
                type="range"
                min={16}
                max={64}
                value={testerSize}
                onChange={e => setTesterSize(Number(e.target.value))}
                style={{ width: '124px', accentColor: '#000', cursor: 'pointer' }}
              />
            </div>
          </div>
          {/* Type tester */}
          <textarea
            placeholder="Type here..."
            value={testerText}
            onChange={e => setTesterText(e.target.value)}
            style={{
              width: '100%',
              height: '90px',
              fontSize: `${testerSize}px`,
              fontWeight: Number(testerWeight),
              color: '#000000',
              opacity: testerText ? 1 : 0.3,
              border: 'none',
              outline: 'none',
              marginBottom: '0rem',
              fontFamily: fontConfigs[selectedFont?.name || '']?.className ? undefined : 'inherit',
              background: 'transparent',
              transition: 'font-size 0.15s, font-weight 0.15s',
              resize: 'none',
              overflow: 'auto',
              lineHeight: 1.1,
              padding: 0,
            }}
            className={fontConfigs[selectedFont?.name || '']?.className}
            onFocus={e => e.target.placeholder = ''}
            onBlur={e => e.target.placeholder = 'Type here...'}
            rows={3}
          />
          {/* Font name and designer with Visit Foundry button */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: '0.75rem',
            marginBottom: '2rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ ...nanoHeadingStyle, marginBottom: '6px' }}>
                {fonts.find(f => f.id === selectedFontId)?.name}
              </span>
              <span style={{ ...nanoHeadingStyle, opacity: 0.6 }}>
                Designed by <span style={{ color: '#111' }}>{fonts.find(f => f.id === selectedFontId)?.designer}</span>
              </span>
            </div>
            {/* Visit Foundry button */}
            <a
              href={`https://fonts.google.com/specimen/${encodeURIComponent(fonts.find(f => f.id === selectedFontId)?.name || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-foundry-btn"
              style={{
                borderRadius: '8px',
                border: '1.5px solid #111',
                padding: '0.6rem 0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#000000',
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              Visit Foundry
            </a>
          </div>
          {/* Use Cases / Pair this font tab buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.9rem', position: 'relative' }}>
            <button
              className="text-button text-button--active"
              style={{ marginRight: '1rem' }}
            >
              Use Cases
            </button>
            <button
              className="text-button text-button--inactive"
            >
              Pair this font
            </button>
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: '0px', height: '1px', background: '#CCCCCC', width: '100%', marginBottom: '-0.5rem' }} />
          </div>
          {/* Use Cases Carousel from local images */}
          <div style={{ minHeight: '8rem', marginBottom: '0rem' }}>
            {validImages.length > 0 ? (
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '14px',
                paddingBottom: '1.5rem',
                scrollbarWidth: 'auto',
                msOverflowStyle: 'auto',
              }}>
                {validImages.map((img, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '20rem' }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', width: '100%' }}
                    >
                      <img
                        src={img.src}
                        alt={`${fonts.find(f => f.id === selectedFontId)?.name} use case ${i + 1}`}
                        style={{ width: '240px', height: '180px', objectFit: 'cover', borderRadius: '14px' }}
                      />
                    </a>
                    <span
                      className="nano-heading"
                      style={{
                        fontSize: '12px',
                        opacity: hoveredIndex === i ? 1 : 0.6,
                        marginTop: '4px',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'opacity 0.15s',
                        cursor: 'text',
                      }}
                    >
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <span style={{ ...nanoHeadingStyle }}>
                No Uses found for "{fonts.find(f => f.id === selectedFontId)?.name}".
              </span>
            )}
          </div>
        </div>
      )}
      {/* Overlay red border for testing popup dimensions */}
      {selectedFontId && (
        <div style={{
          position: 'fixed',
          left: '330px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '377px',
          height: '555px',
          border: '2px solid red',
          pointerEvents: 'none',
          zIndex: 9999,
        }} />
      )}
    </div>
  );
}