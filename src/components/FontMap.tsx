'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import useFontStore from '../store/useFontStore';
import { fontConfigs } from '../lib/fontConfig';

interface BlankCardProps {
  style?: React.CSSProperties;
}

const BlankCard: React.FC<BlankCardProps> = ({ style }) => {
  return (
    <div 
      style={{ 
        width: '288px',
        height: '196px',
        backgroundColor: '#F3F4FA',
        borderRadius: '20px',
        padding: '20px',
        display: 'block',
        boxSizing: 'border-box',
        ...style
      }}
    />
  );
};

interface FontCardProps {
  fontName: string;
  foundry: string;
  isSelected: boolean;
  onClick: () => void;
}

const FontCard: React.FC<FontCardProps> = ({ 
  fontName, 
  foundry, 
  isSelected, 
  onClick 
}) => {
  const fontConfig = fontConfigs[fontName];
  const [hovered, setHovered] = useState(false);
  const fontNameRef = useRef<HTMLHeadingElement>(null);
  const [isTwoLines, setIsTwoLines] = useState(false);

  const isActive = hovered || isSelected;

  // Check if the font name wraps to 2 lines
  useEffect(() => {
    const checkLines = () => {
      if (fontNameRef.current) {
        // 32px font size, lineHeight 1, so 32px per line
        setIsTwoLines(fontNameRef.current.offsetHeight > 40);
      }
    };
    checkLines();
    window.addEventListener('resize', checkLines);
    return () => window.removeEventListener('resize', checkLines);
  }, [fontName]);

  // Card padding for left/right only
  const cardPaddingLeft = 40;
  const cardPaddingRight = 40;
  // Determine if the font name is a single word
  const isSingleWord = fontName.trim().split(' ').length === 1;
  // Font size and top padding rules
  let fontNameFontSize = 32;
  let cardPaddingTop = 50;
  if (isSingleWord && isTwoLines) {
    fontNameFontSize = 28;
    cardPaddingTop = 50;
  } else if (isTwoLines) {
    fontNameFontSize = 32;
    cardPaddingTop = 36;
  }
  const cardPaddingBottom = 36;

  return (
    <div
      style={{
        position: 'relative',
        width: '288px',
        height: '196px',
        backgroundColor: isActive ? '#FFFFFF' : '#F3F4FA',
        borderRadius: '20px',
        paddingLeft: cardPaddingLeft,
        paddingRight: cardPaddingRight,
        boxSizing: 'border-box',
        boxShadow: isActive ? '0px 0px 16px 8px rgba(0,0,0,0.05)' : 'none',
        transition: 'background 0.55s, box-shadow 0.58s',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large font name, absolutely positioned 30px from top, centered */}
      <h3
        ref={fontNameRef}
        className={fontConfig?.className || ''}
        style={{
          position: 'absolute',
          top: cardPaddingTop,
          left: cardPaddingLeft,
          right: cardPaddingRight,
          fontSize: `${fontNameFontSize}px`,
          fontWeight: 500,
          margin: 0,
          lineHeight: 1,
          pointerEvents: 'none',
          wordBreak: 'break-word',
        }}
      >
        {fontName}
      </h3>
      {/* Bottom area: small font name and foundry, stacked, 4px gap, 30px from bottom */}
      <div
        style={{
          position: 'absolute',
          left: cardPaddingLeft,
          right: cardPaddingRight,
          bottom: cardPaddingBottom,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '3px',
          pointerEvents: 'none',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#111',
            opacity: 1,
            margin: 0,
          }}
        >
          {fontName}
        </p>
        <p
          style={{
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#6b7280',
            opacity: 0.8,
            margin: 0,
          }}
        >
          {foundry}
        </p>
      </div>
    </div>
  );
};

interface FontMapProps {
  selectedFontId: string | null;
  onSelectFont: (fontId: string) => void;
  centeredFontId?: string | null;
}

const FontMap: React.FC<FontMapProps> = ({ selectedFontId, onSelectFont, centeredFontId }) => {
  const { fonts } = useFontStore();

  // For autoscroll: refs for each FontCard
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // Use motion values for x and y
  const x = useMotionValue(-870);
  const y = useMotionValue(-1050);
  const controls = useAnimation();
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Track if user is actively dragging (mouse or touch or wheel)
  const isUserDragging = useRef(false);
  // For touch pan
  const lastTouchMidpoint = useRef<{ x: number; y: number } | null>(null);
  // For wheel pan
  const lastWheelPos = useRef<{ x: number; y: number }>({ x: -870, y: -1050 });

  // --- BOUNCE/CLAMP LOGIC ---
  // Card/grid sizing
  const cardWidth = 288;
  const cardHeight = 196;
  const gap = 20;
  const columns = 9;
  const rows = 14;
  const bounce = 80; // px

  // Calculate grid and container sizes
  const gridWidth = columns * cardWidth + (columns - 1) * gap;
  const gridHeight = rows * cardHeight + (rows - 1) * gap;
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
  useEffect(() => {
    function updateSize() {
      if (gridContainerRef.current) {
        setContainerSize({
          width: gridContainerRef.current.offsetWidth,
          height: gridContainerRef.current.offsetHeight,
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Clamp function with bounce
  function clampWithBounce(val: number, min: number, max: number, bounce: number) {
    if (val < min - bounce) return min - bounce;
    if (val > max + bounce) return max + bounce;
    return val;
  }
  // Clamp function (no bounce)
  function clamp(val: number, min: number, max: number) {
    return Math.max(min, Math.min(max, val));
  }
  // Compute min/max for x/y
  const minX = Math.min(containerSize.width - gridWidth, 0);
  const maxX = 0;
  const minY = Math.min(containerSize.height - gridHeight, 0);
  const maxY = 0;

  // Mouse drag logic (with clamp/bounce)
  function onPointerDown(e: React.PointerEvent) {
    if (e.button !== 0) return;
    isUserDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    lastWheelPos.current = { x: x.get(), y: y.get() };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!isUserDragging.current) return;
    if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
      let newX = lastWheelPos.current.x + e.movementX;
      let newY = lastWheelPos.current.y + e.movementY;
      // Remove clamping: allow free movement
      x.set(newX);
      y.set(newY);
      lastWheelPos.current = { x: newX, y: newY };
    }
  }
  function onPointerUp(e: React.PointerEvent) {
    isUserDragging.current = false;
    // No snapping back, allow free movement
  }

  // Touch and wheel event handlers (with clamp/bounce)
  useEffect(() => {
    const container = gridContainerRef.current;
    if (!container) return;

    function getMidpoint(touches: TouchList) {
      if (touches.length !== 2) return null;
      const t1 = touches[0];
      const t2 = touches[1];
      return {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };
    }

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 2) {
        isUserDragging.current = true;
        lastTouchMidpoint.current = getMidpoint(e.touches);
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (isUserDragging.current && e.touches.length === 2) {
        e.preventDefault();
        const midpoint = getMidpoint(e.touches);
        if (midpoint && lastTouchMidpoint.current) {
          let dx = midpoint.x - lastTouchMidpoint.current.x;
          let dy = midpoint.y - lastTouchMidpoint.current.y;
          let newX = x.get() + dx;
          let newY = y.get() + dy;
          // Remove clamping: allow free movement
          x.set(newX);
          y.set(newY);
          lastTouchMidpoint.current = midpoint;
        }
      }
    }

    function onTouchEnd(e: TouchEvent) {
      if (e.touches.length < 2) {
        isUserDragging.current = false;
        lastTouchMidpoint.current = null;
        // Snap back if out of bounds
        let newX = clamp(x.get(), minX, maxX);
        let newY = clamp(y.get(), minY, maxY);
        if (newX !== x.get() || newY !== y.get()) {
          controls.start({ x: newX, y: newY }, { type: 'spring', stiffness: 500, damping: 40 });
        }
      }
    }

    function onWheel(e: WheelEvent) {
      if (!e.ctrlKey) {
        e.preventDefault();
        let newX = x.get() - e.deltaX;
        let newY = y.get() - e.deltaY;
        // Remove clamping: allow free movement
        x.set(newX);
        y.set(newY);
      }
    }

    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: false });
    container.addEventListener('touchcancel', onTouchEnd, { passive: false });
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
      container.removeEventListener('wheel', onWheel);
    };
  }, [x, y, containerSize]);

  // Center the selected card when centeredFontId changes (programmatic move)
  useEffect(() => {
    if (!centeredFontId) return;
    const card = cardRefs.current[centeredFontId];
    const gridContainer = gridContainerRef.current;
    if (card && gridContainer) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = gridContainer.getBoundingClientRect();
      const dx = cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2) - 200;
      const dy = cardRect.top - containerRect.top - (containerRect.height / 2) + (cardRect.height / 2) + 5;
      // Use spring for programmatic move
      controls.start({ x: x.get() - dx, y: y.get() - dy }, { type: 'spring', stiffness: 500, damping: 40 });
    }
  }, [centeredFontId]);

  const renderGrid = () => {
    const grid = [];
    
    // Row 1 (all blank, 9 columns)
    for (let i = 0; i < 9; i++) {
      grid.push(
        <div
          key={`blank-row1-${i}`}
          style={{
            gridColumn: `${i + 1}`,
            gridRow: '1',
            width: '288px',
            transform: 'translateX(154px)',
            display: 'block'
          }}
        >
          <BlankCard />
        </div>
      );
    }
    // Add BlankCard at end of row 1
    grid.push(
      <div
        key={`blank-row1-end`}
        style={{
          gridColumn: `10`,
          gridRow: '1',
          width: '288px',
          transform: 'translateX(154px)',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The monospace fonts (Stint Ultra Condensed first)
    const row2FontNames = [
      'Stint Ultra Condensed',
      'Source Code Pro',
      'Roboto Mono',
      'Noto Sans Mono',
      'PT Mono',
      'Courier Prime'
    ];
    const row2Fonts = row2FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // Row 2: 1 blank, 6 fonts, 2 blanks after
    // First blank card
    grid.push(
      <div
        key={`blank-row2-0`}
        style={{
          gridColumn: `1`,
          gridRow: '2',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 6 font cards
    const row2FontsFiltered = row2Fonts.filter(Boolean);
    row2FontsFiltered.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '2',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Only 1 blank card after the last font
    grid.push(
      <div
        key={`blank-row2-after-fonts`}
        style={{
          gridColumn: `${row2FontsFiltered.length + 2}`,
          gridRow: '2',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // One more blank card to fill 9 columns
    grid.push(
      <div
        key={`blank-row2-end`}
        style={{
          gridColumn: `9`,
          gridRow: '2',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 2
    grid.push(
      <div
        key={`blank-row2-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '2',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 3: BlankCard, Maiden Orange, Slabo 27px, Fira Mono, IBM Plex Mono, Bree Serif, Josefin Slab, Rokkitt, BlankCard
    const row3FontNames = [
      'Maiden Orange',
      'Slabo 27px',
      'Fira Mono',
      'IBM Plex Mono',
      'Bree Serif',
      'Josefin Slab',
      'Rokkitt'
    ];
    const row3Fonts = row3FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 3
    grid.push(
      <div
        key={`blank-row3-0`}
        style={{
          gridColumn: `1`,
          gridRow: '3',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 7 font cards for row 3
    const row3FontsFiltered = row3Fonts.filter(Boolean);
    row3FontsFiltered.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '3',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Last BlankCard for row 3
    grid.push(
      <div
        key={`blank-row3-end`}
        style={{
          gridColumn: `9`,
          gridRow: '3',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 3
    grid.push(
      <div
        key={`blank-row3-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '3',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 4: BlankCard, Andada Pro, Bitter, Aleo, Crete Round, Arvo, Quattrocento, Coustard, BlankCard
    const row4FontNames = [
      'Andada Pro',
      'Bitter',
      'Aleo',
      'Crete Round',
      'Arvo',
      'Quattrocento',
      'Coustard'
    ];
    const row4Fonts = row4FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 4
    grid.push(
      <div
        key={`blank-row4-0`}
        style={{
          gridColumn: `1`,
          gridRow: '4',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 7 font cards for row 4
    const row4FontsFiltered = row4Fonts.filter(Boolean);
    row4FontsFiltered.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '4',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Last BlankCard for row 4
    grid.push(
      <div
        key={`blank-row4-end`}
        style={{
          gridColumn: `9`,
          gridRow: '4',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 4
    grid.push(
      <div
        key={`blank-row4-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '4',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 5: BlankCard, Imbue, PT Serif, Noticia Text, Roboto Serif, Zilla Slab, Ovo, Alfa Slab One, BlankCard
    const row5FontNames = [
      'Imbue',
      'PT Serif',
      'Noticia Text',
      'Roboto Serif',
      'Zilla Slab',
      'Ovo',
      'Alfa Slab One'
    ];
    const row5Fonts = row5FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 5
    grid.push(
      <div
        key={`blank-row5-0`}
        style={{
          gridColumn: `1`,
          gridRow: '5',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 7 font cards for row 5
    const row5FontsFiltered = row5Fonts.filter(Boolean);
    row5FontsFiltered.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '5',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Last BlankCard for row 5
    grid.push(
      <div
        key={`blank-row5-end`}
        style={{
          gridColumn: `9`,
          gridRow: '5',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 5
    grid.push(
      <div
        key={`blank-row5-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '5',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Track all used font names in a Set
    const usedFontNames = new Set([
      ...row2FontNames,
      ...row3FontNames,
      ...row4FontNames,
      ...row5FontNames
    ]);

    // Row 6: BlankCard, Xanh Mono, Bellefair, Merriweather, Source Serif, Headland One, BlankCard, BlankCard, BlankCard
    const row6FontNames = [
      'Xanh Mono',
      'Bellefair',
      'Merriweather',
      'Source Serif',
      'Headland One'
    ];
    const row6Fonts = row6FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 6
    grid.push(
      <div
        key={`blank-row6-0`}
        style={{
          gridColumn: `1`,
          gridRow: '6',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 5 font cards for row 6
    const row6FontsFiltered = row6Fonts.filter(Boolean);
    row6FontsFiltered.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '6',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Last 3 BlankCards for row 6
    for (let i = 0; i < 3; i++) {
      grid.push(
        <div
          key={`blank-row6-end-${i}`}
          style={{
            gridColumn: `${i + 7}`,
            gridRow: '6',
            width: '288px',
            display: 'block'
          }}
        >
          <BlankCard />
        </div>
      );
    }
    // Add BlankCard at end of row 6
    grid.push(
      <div
        key={`blank-row6-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '6',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 7: BlankCard, Instrument Serif, Spectral, Newsreader, Libre Baskerville, Lora, IBM Plex Serif, Fraunces, BlankCard
    const row7FontNames = [
      'Instrument Serif',
      'Spectral',
      'Newsreader',
      'Libre Baskerville',
      'Lora',
      'IBM Plex Serif',
      'Fraunces'
    ];
    const row7Fonts = row7FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 7
    grid.push(
      <div
        key={`blank-row7-0`}
        style={{
          gridColumn: `1`,
          gridRow: '7',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 7 font cards for row 7
    row7Fonts.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '7',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Last BlankCard for row 7
    grid.push(
      <div
        key={`blank-row7-end`}
        style={{
          gridColumn: `9`,
          gridRow: '7',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 7
    grid.push(
      <div
        key={`blank-row7-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '7',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Add these fonts to usedFontNames
    row7FontNames.forEach(name => usedFontNames.add(name));

    // Row 8: BlankCard, Noto Serif Display, Playfair Display, Bodoni Moda, Suranna, Domine, DM Serif Display, Abril Fatface, Chonburi
    const row8FontNames = [
      'Noto Serif Display',
      'Playfair Display',
      'Bodoni Moda',
      'Suranna',
      'Domine',
      'DM Serif Display',
      'Abril Fatface',
      'Chonburi'
    ];
    const row8Fonts = row8FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 8
    grid.push(
      <div
        key={`blank-row8-0`}
        style={{
          gridColumn: `1`,
          gridRow: '8',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 8 font cards for row 8
    row8Fonts.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '8',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Add BlankCard after Chonburi in row 8
    grid.push(
      <div
        key={`blank-row8-after-chonburi`}
        style={{
          gridColumn: `${row8Fonts.length + 2}`,
          gridRow: '8',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Add these fonts to usedFontNames
    row8FontNames.forEach(name => usedFontNames.add(name));

    // Row 9: BlankCard, Cormorant, Cormorant Garamond, EB Garamond, Crimson Text, Sorts Mill Goudy, Linden Hill, Rosarivo, Ultra
    const row9FontNames = [
      'Cormorant',
      'Cormorant Garamond',
      'EB Garamond',
      'Crimson Text',
      'Sorts Mill Goudy',
      'Linden Hill',
      'Rosarivo',
      'Ultra'
    ];
    const row9Fonts = row9FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 9
    grid.push(
      <div
        key={`blank-row9-0`}
        style={{
          gridColumn: `1`,
          gridRow: '9',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // The 8 font cards for row 9
    row9Fonts.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '9',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Add these fonts to usedFontNames
    row9FontNames.forEach(name => usedFontNames.add(name));

    // Add BlankCard at end of row 9
    grid.push(
      <div
        key={`blank-row9-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '9',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 10: 2 BlankCards, 7 font cards, 1 BlankCard at end
    const row10FontNames = [
      'Eczar',
      'Alike Angular',
      'Alike',
      'Young Serif',
      'Oldenburg',
      'BhuTuka Expanded One'
    ];
    const row10Fonts = row10FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First 2 BlankCards for row 10
    for (let i = 0; i < 2; i++) {
      grid.push(
        <div
          key={`blank-row10-${i}`}
          style={{
            gridColumn: `${i + 1}`,
            gridRow: '10',
            width: '288px',
            display: 'block'
          }}
        >
          <BlankCard />
        </div>
      );
    }

    // The 7 font cards for row 10
    row10Fonts.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 3}`,
            gridRow: '10',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Add these fonts to usedFontNames
    row10FontNames.forEach(name => usedFontNames.add(name));

    // Add BlankCard at end of row 10
    grid.push(
      <div
        key={`blank-row10-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '10',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Add BlankCard in column 9 for row 10
    grid.push(
      <div
        key={`blank-row10-col9`}
        style={{
          gridColumn: `9`,
          gridRow: '10',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 11: 2 BlankCards, 6 font cards, 1 BlankCard at end
    const row11FontNames = [
      'Montaga',
      'Kurale',
      'Gabriela',
      'Inknut Antiqua',
      'Special Elite',
      'Arbutus'
    ];
    const row11Fonts = row11FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First 2 BlankCards for row 11
    for (let i = 0; i < 2; i++) {
      grid.push(
        <div
          key={`blank-row11-${i}`}
          style={{
            gridColumn: `${i + 1}`,
            gridRow: '11',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <BlankCard />
        </div>
      );
    }

    // The 6 font cards for row 11
    row11Fonts.forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 3}`,
            gridRow: '11',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Add these fonts to usedFontNames
    row11FontNames.forEach(name => usedFontNames.add(name));

    // Add BlankCard at end of row 11
    grid.push(
      <div
        key={`blank-row11-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '11',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Add BlankCard in column 9 for row 11
    grid.push(
      <div
        key={`blank-row11-col9`}
        style={{
          gridColumn: `9`,
          gridRow: '11',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 12: BlankCard, Elsie, Elsie Swash Caps, Almendra, Luxurious Roman, Kotta One, BlankCard, Diplomata, BlankCard
    const row12FontNames = [
      'Elsie',
      'Elsie Swash Caps',
      'Almendra',
      'Luxurious Roman',
      'Kotta One',
      'Diplomata'
    ];
    const row12Fonts = row12FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    console.log('row12FontNames', row12FontNames);
    console.log('fonts', fonts.map(f => f.name));
    console.log('row12Fonts', row12Fonts);

    // First BlankCard for row 12
    grid.push(
      <div
        key={`blank-row12-0`}
        style={{
          gridColumn: `1`,
          gridRow: '12',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // The first 5 font cards for row 12
    row12Fonts.slice(0, 5).forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '12',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Second BlankCard for row 12
    grid.push(
      <div
        key={`blank-row12-1`}
        style={{
          gridColumn: `7`,
          gridRow: '12',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    const diplomataFont = row12Fonts[5];
    if (diplomataFont) {
      grid.push(
        <div
          key={diplomataFont.id}
          ref={el => { cardRefs.current[diplomataFont.id] = el; }}
          style={{
            gridColumn: `8`,
            gridRow: '12',
            width: '288px',
            display: 'block'
          }}
        >
          <FontCard
            fontName={diplomataFont.name}
            foundry={diplomataFont.designer}
            isSelected={selectedFontId === diplomataFont.id}
            onClick={() => onSelectFont(diplomataFont.id)}
          />
        </div>
      );
    }

    // Last BlankCard for row 12
    grid.push(
      <div
        key={`blank-row12-end`}
        style={{
          gridColumn: `9`,
          gridRow: '12',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 12
    grid.push(
      <div
        key={`blank-row12-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '12',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 13: BlankCard, Bigelow Rules, Mountains of Christmas, Emilys Candy, Paprika, Langar, BlankCard, Diplomata SC, BlankCard
    const row13FontNames = [
      'Bigelow Rules',
      'Mountains of Christmas',
      'Emilys Candy',
      'Paprika',
      'Langar',
      'Diplomata SC'
    ];
    const row13Fonts = row13FontNames
      .map(name => fonts.find(font => font.name === name))
      .filter(Boolean);

    // First BlankCard for row 13
    grid.push(
      <div
        key={`blank-row13-0`}
        style={{
          gridColumn: `1`,
          gridRow: '13',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // The first 5 font cards for row 13
    row13Fonts.slice(0, 5).forEach((font, index) => {
      if (!font) return;
      grid.push(
        <div
          key={font.id}
          ref={el => { cardRefs.current[font.id] = el; }}
          style={{
            gridColumn: `${index + 2}`,
            gridRow: '13',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={font.name}
            foundry={font.designer}
            isSelected={selectedFontId === font.id}
            onClick={() => onSelectFont(font.id)}
          />
        </div>
      );
    });

    // Second BlankCard for row 13 (column 7)
    grid.push(
      <div
        key={`blank-row13-1`}
        style={{ 
          gridColumn: `7`,
          gridRow: '13',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Diplomata SC font card (column 8)
    const diplomataSCFont = row13Fonts[5];
    if (diplomataSCFont) {
      grid.push(
        <div
          key={diplomataSCFont.id}
          ref={el => { cardRefs.current[diplomataSCFont.id] = el; }}
          style={{
            gridColumn: `8`,
            gridRow: '13',
            width: '288px',
            display: 'block',
            transform: 'translateX(154px)'
          }}
        >
          <FontCard
            fontName={diplomataSCFont.name}
            foundry={diplomataSCFont.designer}
            isSelected={selectedFontId === diplomataSCFont.id}
            onClick={() => onSelectFont(diplomataSCFont.id)}
          />
        </div>
      );
    }

    // Last BlankCard for row 13 (column 9)
    grid.push(
      <div
        key={`blank-row13-end`}
        style={{
          gridColumn: `9`,
          gridRow: '13',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );
    // Add BlankCard at end of row 13
    grid.push(
      <div
        key={`blank-row13-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '13',
          width: '288px',
          display: 'block',
          transform: 'translateX(154px)'
        }}
      >
        <BlankCard />
      </div>
    );

    // Row 14: 9 BlankCards
    for (let i = 0; i < 9; i++) {
      grid.push(
        <div
          key={`blank-row14-${i}`}
          style={{
            gridColumn: `${i + 1}`,
            gridRow: '14',
            width: '288px',
            display: 'block'
          }}
        >
          <BlankCard />
        </div>
      );
    }
    // Add BlankCard at end of row 14
    grid.push(
      <div
        key={`blank-row14-end-10`}
        style={{
          gridColumn: `10`,
          gridRow: '14',
          width: '288px',
          display: 'block'
        }}
      >
        <BlankCard />
      </div>
    );

    return grid;
  };

  return (
    <div
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden',
      }}
      ref={gridContainerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <motion.div
        style={{
          x,
          y,
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 288px)',
          gridTemplateRows: 'repeat(14, 196px)',
          gap: '20px',
          padding: 0,
          width: 'max-content',
          willChange: 'transform',
        }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        drag={false}
      >
        {renderGrid()}
      </motion.div>
    </div>
  );
};

export default FontMap;