import { Font } from '../store/useFontStore';

export const sampleFonts: Font[] = [
  // Row 1 - Monospace Fonts
  {
    id: 'source-code-pro',
    name: 'Source Code Pro',
    designer: 'Paul D. Hunt',
    googleFontUrl: 'https://fonts.google.com/specimen/Source+Code+Pro',
    weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'monospace',
    position: { x: 0, y: 0 },
    useCases: []
  },
  {
    id: 'roboto-mono',
    name: 'Roboto Mono',
    designer: 'Christian Robertson',
    googleFontUrl: 'https://fonts.google.com/specimen/Roboto+Mono',
    weights: ['100', '200', '300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'monospace',
    position: { x: 266, y: 0 },
    useCases: []
  },
  {
    id: 'noto-sans-mono',
    name: 'Noto Sans Mono',
    designer: 'Google',
    googleFontUrl: 'https://fonts.google.com/specimen/Noto+Sans+Mono',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal'],
    category: 'monospace',
    position: { x: 532, y: 0 },
    useCases: []
  },
  {
    id: 'pt-mono',
    name: 'PT Mono',
    designer: 'ParaType',
    googleFontUrl: 'https://fonts.google.com/specimen/PT+Mono',
    weights: ['400'],
    styles: ['normal'],
    category: 'monospace',
    position: { x: 798, y: 0 },
    useCases: []
  },
  {
    id: 'courier-prime',
    name: 'Courier Prime',
    designer: 'Alan Dague-Greene',
    googleFontUrl: 'https://fonts.google.com/specimen/Courier+Prime',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'monospace',
    position: { x: 1064, y: 0 },
    useCases: []
  },

  // Row 2
  {
    id: 'stint-ultra-condensed',
    name: 'Stint Ultra Condensed',
    designer: 'Astigmatic',
    googleFontUrl: 'https://fonts.google.com/specimen/Stint+Ultra+Condensed',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 0, y: 186 },
    useCases: []
  },
  {
    id: 'maiden-orange',
    name: 'Maiden Orange',
    designer: 'Astigmatic',
    googleFontUrl: 'https://fonts.google.com/specimen/Maiden+Orange',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 266, y: 186 },
    useCases: []
  },
  {
    id: 'slabo-27px',
    name: 'Slabo 27px',
    designer: 'John Hudson',
    googleFontUrl: 'https://fonts.google.com/specimen/Slabo+27px',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 532, y: 186 },
    useCases: []
  },

  // Continuing Row 2
  {
    id: 'fira-mono',
    name: 'Fira Mono',
    designer: 'Mozilla',
    googleFontUrl: 'https://fonts.google.com/specimen/Fira+Mono',
    weights: ['400', '500', '700'],
    styles: ['normal'],
    category: 'monospace',
    position: { x: 798, y: 186 },
    useCases: []
  },
  {
    id: 'ibm-plex-mono',
    name: 'IBM Plex Mono',
    designer: 'Mike Abbink',
    googleFontUrl: 'https://fonts.google.com/specimen/IBM+Plex+Mono',
    weights: ['100', '200', '300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'monospace',
    position: { x: 1064, y: 186 },
    useCases: []
  },
  {
    id: 'bree-serif',
    name: 'Bree Serif',
    designer: 'TypeTogether',
    googleFontUrl: 'https://fonts.google.com/specimen/Bree+Serif',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1330, y: 186 },
    useCases: []
  },
  {
    id: 'josefin-slab',
    name: 'Josefin Slab',
    designer: 'Santiago Orozco',
    googleFontUrl: 'https://fonts.google.com/specimen/Josefin+Slab',
    weights: ['100', '200', '300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1596, y: 186 },
    useCases: []
  },
  {
    id: 'rokkitt',
    name: 'Rokkitt',
    designer: 'Vernon Adams',
    googleFontUrl: 'https://fonts.google.com/specimen/Rokkitt',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1862, y: 186 },
    useCases: []
  },

  // Row 3
  {
    id: 'andada-pro',
    name: 'Andada Pro',
    designer: 'Huerta Tipográfica',
    googleFontUrl: 'https://fonts.google.com/specimen/Andada+Pro',
    weights: ['400', '500', '600', '700', '800'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 0, y: 372 },
    useCases: []
  },
  {
    id: 'bitter',
    name: 'Bitter',
    designer: 'Huerta Tipográfica',
    googleFontUrl: 'https://fonts.google.com/specimen/Bitter',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 266, y: 372 },
    useCases: []
  },
  {
    id: 'aleo',
    name: 'Aleo',
    designer: 'Alessio Laiso',
    googleFontUrl: 'https://fonts.google.com/specimen/Aleo',
    weights: ['300', '400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 372 },
    useCases: []
  },
  {
    id: 'crete-round',
    name: 'Crete Round',
    designer: 'TypeTogether',
    googleFontUrl: 'https://fonts.google.com/specimen/Crete+Round',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 798, y: 372 },
    useCases: []
  },
  {
    id: 'arvo',
    name: 'Arvo',
    designer: 'Anton Koovit',
    googleFontUrl: 'https://fonts.google.com/specimen/Arvo',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1064, y: 372 },
    useCases: []
  },

  // Continuing Row 3
  {
    id: 'quattrocento',
    name: 'Quattrocento',
    designer: 'Pablo Impallari',
    googleFontUrl: 'https://fonts.google.com/specimen/Quattrocento',
    weights: ['400', '700'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1330, y: 372 },
    useCases: []
  },
  {
    id: 'coustard',
    name: 'Coustard',
    designer: 'Vernon Adams',
    googleFontUrl: 'https://fonts.google.com/specimen/Coustard',
    weights: ['400', '900'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1596, y: 372 },
    useCases: []
  },

  // Row 4
  {
    id: 'imbue',
    name: 'Imbue',
    designer: 'DJR & CJ Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Imbue',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 0, y: 558 },
    useCases: []
  },
  {
    id: 'pt-serif',
    name: 'PT Serif',
    designer: 'ParaType',
    googleFontUrl: 'https://fonts.google.com/specimen/PT+Serif',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 266, y: 558 },
    useCases: []
  },
  {
    id: 'noticia-text',
    name: 'Noticia Text',
    designer: 'JM Solé',
    googleFontUrl: 'https://fonts.google.com/specimen/Noticia+Text',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 558 },
    useCases: []
  },
  {
    id: 'roboto-serif',
    name: 'Roboto Serif',
    designer: 'Commercial Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Roboto+Serif',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 798, y: 558 },
    useCases: []
  },
  {
    id: 'zilla-slab',
    name: 'Zilla Slab',
    designer: 'Typotheque',
    googleFontUrl: 'https://fonts.google.com/specimen/Zilla+Slab',
    weights: ['300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1064, y: 558 },
    useCases: []
  },
  {
    id: 'ovo',
    name: 'Ovo',
    designer: 'Nicole Fally',
    googleFontUrl: 'https://fonts.google.com/specimen/Ovo',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1330, y: 558 },
    useCases: []
  },
  {
    id: 'alfa-slab-one',
    name: 'Alfa Slab One',
    designer: 'JM Solé',
    googleFontUrl: 'https://fonts.google.com/specimen/Alfa+Slab+One',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1596, y: 558 },
    useCases: []
  },

  // Row 5
  {
    id: 'xanh-mono',
    name: 'Xanh Mono',
    designer: 'Yellow Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Xanh+Mono',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'monospace',
    position: { x: 0, y: 744 },
    useCases: []
  },
  {
    id: 'bellefair',
    name: 'Bellefair',
    designer: 'Nick Shinn & Liron Lavi Turkenich',
    googleFontUrl: 'https://fonts.google.com/specimen/Bellefair',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 266, y: 744 },
    useCases: []
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    designer: 'Sorkin Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Merriweather',
    weights: ['300', '400', '700', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 744 },
    useCases: []
  },
  {
    id: 'source-serif',
    name: 'Source Serif',
    designer: 'Frank Grießhammer',
    googleFontUrl: 'https://fonts.google.com/specimen/Source+Serif+4',
    weights: ['200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 798, y: 744 },
    useCases: []
  },
  {
    id: 'headland-one',
    name: 'Headland One',
    designer: 'Gary Lonergan',
    googleFontUrl: 'https://fonts.google.com/specimen/Headland+One',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1064, y: 744 },
    useCases: []
  },

  // Row 6
  {
    id: 'instrument-serif',
    name: 'Instrument Serif',
    designer: 'Rodrigo Fuenzalida',
    googleFontUrl: 'https://fonts.google.com/specimen/Instrument+Serif',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 0, y: 930 },
    useCases: []
  },
  {
    id: 'spectral',
    name: 'Spectral',
    designer: 'Production Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Spectral',
    weights: ['200', '300', '400', '500', '600', '700', '800'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 266, y: 930 },
    useCases: []
  },
  {
    id: 'newsreader',
    name: 'Newsreader',
    designer: 'Production Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Newsreader',
    weights: ['200', '300', '400', '500', '600', '700', '800'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 930 },
    useCases: []
  },
  {
    id: 'libre-baskerville',
    name: 'Libre Baskerville',
    designer: 'Impallari Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Libre+Baskerville',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 798, y: 930 },
    useCases: []
  },
  {
    id: 'lora',
    name: 'Lora',
    designer: 'Cyreal',
    googleFontUrl: 'https://fonts.google.com/specimen/Lora',
    weights: ['400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1064, y: 930 },
    useCases: []
  },
  {
    id: 'ibm-plex-serif',
    name: 'IBM Plex Serif',
    designer: 'Mike Abbink',
    googleFontUrl: 'https://fonts.google.com/specimen/IBM+Plex+Serif',
    weights: ['100', '200', '300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1330, y: 930 },
    useCases: []
  },
  {
    id: 'fraunces',
    name: 'Fraunces',
    designer: 'Undercase Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Fraunces',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1596, y: 930 },
    useCases: []
  },

  // Row 7
  {
    id: 'noto-serif-display',
    name: 'Noto Serif Display',
    designer: 'Google',
    googleFontUrl: 'https://fonts.google.com/specimen/Noto+Serif+Display',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 0, y: 1116 },
    useCases: []
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    designer: 'Claus Eggers Sørensen',
    googleFontUrl: 'https://fonts.google.com/specimen/Playfair+Display',
    weights: ['400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 266, y: 1116 },
    useCases: []
  },
  {
    id: 'bodoni-moda',
    name: 'Bodoni Moda',
    designer: 'Indestructible Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Bodoni+Moda',
    weights: ['400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 1116 },
    useCases: []
  },
  {
    id: 'suranna',
    name: 'Suranna',
    designer: 'Pria Ravichandran',
    googleFontUrl: 'https://fonts.google.com/specimen/Suranna',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 798, y: 1116 },
    useCases: []
  },
      {
    id: 'domine',
    name: 'Domine',
    designer: 'Impallari Type',
    googleFontUrl: 'https://fonts.google.com/specimen/Domine',
    weights: ['400', '500', '600', '700'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1064, y: 1116 },
    useCases: []
  },
  {
    id: 'dm-serif-display',
    name: 'DM Serif Display',
    designer: 'Colophon Foundry',
    googleFontUrl: 'https://fonts.google.com/specimen/DM+Serif+Display',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1330, y: 1116 },
    useCases: []
  },
  {
    id: 'abril-fatface',
    name: 'Abril Fatface',
    designer: 'TypeTogether',
    googleFontUrl: 'https://fonts.google.com/specimen/Abril+Fatface',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1596, y: 1116 },
    useCases: []
  },
  {
    id: 'chonburi',
    name: 'Chonburi',
    designer: 'Cadson Demak',
    googleFontUrl: 'https://fonts.google.com/specimen/Chonburi',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1862, y: 1116 },
    useCases: []
  },

  // Row 8
  {
    id: 'cormorant',
    name: 'Cormorant',
    designer: 'Christian Thalmann',
    googleFontUrl: 'https://fonts.google.com/specimen/Cormorant',
    weights: ['300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 0, y: 1302 },
    useCases: []
  },
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond',
    designer: 'Christian Thalmann',
    googleFontUrl: 'https://fonts.google.com/specimen/Cormorant+Garamond',
    weights: ['300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 266, y: 1302 },
    useCases: []
  },
  {
    id: 'eb-garamond',
    name: 'EB Garamond',
    designer: 'Georg Duffner',
    googleFontUrl: 'https://fonts.google.com/specimen/EB+Garamond',
    weights: ['400', '500', '600', '700', '800'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 1302 },
    useCases: []
  },
  {
    id: 'crimson-text',
    name: 'Crimson Text',
    designer: 'Sebastian Kosch',
    googleFontUrl: 'https://fonts.google.com/specimen/Crimson+Text',
    weights: ['400', '600', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 798, y: 1302 },
    useCases: []
  },
  {
    id: 'sorts-mill-goudy',
    name: 'Sorts Mill Goudy',
    designer: 'Barry Schwartz',
    googleFontUrl: 'https://fonts.google.com/specimen/Sorts+Mill+Goudy',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1064, y: 1302 },
    useCases: []
  },
  {
    id: 'linden-hill',
    name: 'Linden Hill',
    designer: 'Barry Schwartz',
    googleFontUrl: 'https://fonts.google.com/specimen/Linden+Hill',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1330, y: 1302 },
    useCases: []
  },
  {
    id: 'rosarivo',
    name: 'Rosarivo',
    designer: 'Pablo Ugerman',
    googleFontUrl: 'https://fonts.google.com/specimen/Rosarivo',
    weights: ['400'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 1596, y: 1302 },
    useCases: []
  },
  {
    id: 'ultra',
    name: 'Ultra',
    designer: 'Catherine Lobbecke',
    googleFontUrl: 'https://fonts.google.com/specimen/Ultra',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1862, y: 1302 },
    useCases: []
  },

  // Row 9
  {
    id: 'eczar',
    name: 'Eczar',
    designer: 'Rosetta',
    googleFontUrl: 'https://fonts.google.com/specimen/Eczar',
    weights: ['400', '500', '600', '700', '800'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 0, y: 1488 },
    useCases: []
  },
  {
    id: 'alike-angular',
    name: 'Alike Angular',
    designer: 'Cyreal',
    googleFontUrl: 'https://fonts.google.com/specimen/Alike+Angular',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 266, y: 1488 },
    useCases: []
  },
  {
    id: 'alike',
    name: 'Alike',
    designer: 'Cyreal',
    googleFontUrl: 'https://fonts.google.com/specimen/Alike',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 532, y: 1488 },
    useCases: []
  },
  {
    id: 'young-serif',
    name: 'Young Serif',
    designer: 'Bastien Sozeau',
    googleFontUrl: 'https://fonts.google.com/specimen/Young+Serif',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 798, y: 1488 },
    useCases: []
  },
  {
    id: 'oldenburg',
    name: 'Oldenburg',
    designer: 'Nicole Fally',
    googleFontUrl: 'https://fonts.google.com/specimen/Oldenburg',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1064, y: 1488 },
    useCases: []
  },
  {
    id: 'bhutuka-expanded-one',
    name: 'BhuTuka Expanded One',
    designer: 'Google',
    googleFontUrl: 'https://fonts.google.com/specimen/BhuTuka+Expanded+One',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1330, y: 1488 },
    useCases: []
  },

  // Row 10
  {
    id: 'montaga',
    name: 'Montaga',
    designer: 'Alejandra Rodriguez',
    googleFontUrl: 'https://fonts.google.com/specimen/Montaga',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 0, y: 1674 },
    useCases: []
  },
  {
    id: 'kurale',
    name: 'Kurale',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Kurale',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 266, y: 1674 },
    useCases: []
  },
  {
    id: 'gabriela',
    name: 'Gabriela',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Gabriela',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 532, y: 1674 },
    useCases: []
  },
  {
    id: 'inknut-antiqua',
    name: 'Inknut Antiqua',
    designer: 'Claus Eggers Sørensen',
    googleFontUrl: 'https://fonts.google.com/specimen/Inknut+Antiqua',
    weights: ['300', '400', '500', '600', '700', '800', '900'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 798, y: 1674 },
    useCases: []
  },
  {
    id: 'special-elite',
    name: 'Special Elite',
    designer: 'Astigmatic',
    googleFontUrl: 'https://fonts.google.com/specimen/Special+Elite',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1064, y: 1674 },
    useCases: []
  },
  {
    id: 'arbutus',
    name: 'Arbutus',
    designer: 'Karolina Lach',
    googleFontUrl: 'https://fonts.google.com/specimen/Arbutus',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1330, y: 1674 },
    useCases: []
  },

  // Row 12
  {
    id: 'elsie',
    name: 'Elsie',
    designer: 'Ale Paul',
    googleFontUrl: 'https://fonts.google.com/specimen/Elsie',
    weights: ['400', '900'],
    styles: ['normal'],
    category: 'display',
    position: { x: 0, y: 2046 },
    useCases: []
  },
  {
    id: 'elsie-swash-caps',
    name: 'Elsie Swash Caps',
    designer: 'Ale Paul',
    googleFontUrl: 'https://fonts.google.com/specimen/Elsie+Swash+Caps',
    weights: ['400', '900'],
    styles: ['normal'],
    category: 'display',
    position: { x: 266, y: 2046 },
    useCases: []
  },
  {
    id: 'almendra',
    name: 'Almendra',
    designer: 'Ana Sanfelippo',
    googleFontUrl: 'https://fonts.google.com/specimen/Almendra',
    weights: ['400', '700'],
    styles: ['normal', 'italic'],
    category: 'serif',
    position: { x: 532, y: 2046 },
    useCases: []
  },
  {
    id: 'luxurious-roman',
    name: 'Luxurious Roman',
    designer: 'Mans Greback',
    googleFontUrl: 'https://fonts.google.com/specimen/Luxurious+Roman',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 798, y: 2046 },
    useCases: []
  },
  {
    id: 'kotta-one',
    name: 'Kotta One',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Kotta+One',
    weights: ['400'],
    styles: ['normal'],
    category: 'serif',
    position: { x: 1064, y: 2046 },
    useCases: []
  },
  {
    id: 'diplomata',
    name: 'Diplomata',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Diplomata',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1330, y: 1674 },
    useCases: []
  },

  // Last Row (corrected)
  {
    id: 'bigelow-rules',
    name: 'Bigelow Rules',
    designer: 'Astigmatic',
    googleFontUrl: 'https://fonts.google.com/specimen/Bigelow+Rules',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 0, y: 1860 },
    useCases: []
  },
  {
    id: 'mountains-of-christmas',
    name: 'Mountains of Christmas',
    designer: 'Tart Workshop',
    googleFontUrl: 'https://fonts.google.com/specimen/Mountains+of+Christmas',
    weights: ['400', '700'],
    styles: ['normal'],
    category: 'display',
    position: { x: 266, y: 1860 },
    useCases: []
  },
  {
    id: 'emilys-candy',
    name: 'Emilys Candy',
    designer: 'Neapolitan',
    googleFontUrl: 'https://fonts.google.com/specimen/Emilys+Candy',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 532, y: 1860 },
    useCases: []
  },
  {
    id: 'paprika',
    name: 'Paprika',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Paprika',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 798, y: 1860 },
    useCases: []
  },
  {
    id: 'langar',
    name: 'Langar',
    designer: 'Typeland',
    googleFontUrl: 'https://fonts.google.com/specimen/Langar',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1064, y: 1860 },
    useCases: []
  },
  {
    id: 'diplomata-sc',
    name: 'Diplomata SC',
    designer: 'Eduardo Tunni',
    googleFontUrl: 'https://fonts.google.com/specimen/Diplomata+SC',
    weights: ['400'],
    styles: ['normal'],
    category: 'display',
    position: { x: 1330, y: 1860 },
    useCases: []
  },
];
