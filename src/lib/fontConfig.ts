import { NextFont } from 'next/dist/compiled/@next/font';
import { 
  Source_Code_Pro,
  Roboto_Mono,
  Noto_Sans_Mono,
  PT_Mono,
  Courier_Prime,
  IBM_Plex_Mono,
  Fira_Mono,
  Bitter,
  Aleo,
  Crete_Round,
  Arvo,
  Quattrocento,
  Coustard,
  PT_Serif,
  Noticia_Text,
  Roboto_Serif,
  Zilla_Slab,
  Ovo,
  Playfair_Display,
  Lora,
  IBM_Plex_Serif,
  Crimson_Text,
  EB_Garamond,
  Libre_Baskerville,
  Source_Serif_4,
  Merriweather,
  Instrument_Serif,
  Abril_Fatface,
  Cormorant,
  Bodoni_Moda,
  Fraunces,
  Newsreader,
  Cormorant_Garamond,
  Stint_Ultra_Condensed,
  Maiden_Orange,
  Slabo_27px,
  Bree_Serif,
  Josefin_Slab,
  Rokkitt,
  Imbue,
  Alfa_Slab_One,
  Xanh_Mono,
  Bellefair,
  Headland_One,
  Spectral,
  Suranna,
  Domine,
  DM_Serif_Display,
  Chonburi,
  Linden_Hill,
  Ultra,
  Eczar,
  Special_Elite,
  Arbutus,
  Emilys_Candy,
  Young_Serif,
  Oldenburg,
  Montaga,
  Kurale,
  BhuTuka_Expanded_One,
  Andada_Pro,
  Gabriela,
  Inknut_Antiqua,
  Bigelow_Rules,
  Mountains_of_Christmas,
  Paprika,
  Langar,
  Diplomata_SC,
  Alike,
  Alike_Angular,
  Elsie,
  Elsie_Swash_Caps,
  Almendra,
  Luxurious_Roman,
  Kotta_One,
  Diplomata
} from 'next/font/google';

// Monospace fonts configuration
export const sourceCodePro = Source_Code_Pro({ 
  subsets: ['latin'],
  weight: ['400', '700']
});
export const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700']
});
export const notoSansMono = Noto_Sans_Mono({ 
  subsets: ['latin'],
  weight: ['400']
});
export const ptMono = PT_Mono({ 
  subsets: ['latin'],
  weight: '400'
});
export const courierPrime = Courier_Prime({ 
  subsets: ['latin'],
  weight: ['400']
});
export const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500']
});
export const firaMono = Fira_Mono({ 
  subsets: ['latin'],
  weight: ['400']
});

// Serif fonts configuration
export const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '500']
});
export const aleo = Aleo({
  subsets: ['latin'],
  weight: ['400']
});
export const creteRound = Crete_Round({
  subsets: ['latin'],
  weight: '400'
});
export const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700']
});
export const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700']
});
export const coustard = Coustard({
  subsets: ['latin'],
  weight: ['400', '900']
});
export const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});
export const noticiaText = Noticia_Text({
  subsets: ['latin'],
  weight: ['400', '700']
});
export const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
export const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
export const ovo = Ovo({
  subsets: ['latin'],
  weight: '400'
});
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});
export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
export const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});
export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});
export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700']
});
export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
});
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400'
});
export const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400'
});
export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});
export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

// Add new font configurations
export const stintUltraCondensed = Stint_Ultra_Condensed({
  subsets: ['latin'],
  weight: '400'
});

export const maidenOrange = Maiden_Orange({
  subsets: ['latin'],
  weight: '400'
});

export const slabo27px = Slabo_27px({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  fallback: ['serif']
});

export const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: '400'
});

export const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const imbue = Imbue({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400'
});

export const xanhMono = Xanh_Mono({
  subsets: ['latin'],
  weight: '400'
});

export const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400'
});

export const headlandOne = Headland_One({
  subsets: ['latin'],
  weight: '400'
});

export const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const suranna = Suranna({
  subsets: ['latin'],
  weight: '400'
});

export const domine = Domine({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400'
});

export const chonburi = Chonburi({
  subsets: ['latin'],
  weight: '400'
});

export const lindenHill = Linden_Hill({
  subsets: ['latin'],
  weight: '400'
});

export const ultra = Ultra({
  subsets: ['latin'],
  weight: '400'
});

export const eczar = Eczar({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400'
});

export const arbutus = Arbutus({
  subsets: ['latin'],
  weight: '400'
});

export const emilysCandy = Emilys_Candy({
  subsets: ['latin'],
  weight: '400'
});

export const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400'
});

export const oldenburg = Oldenburg({
  subsets: ['latin'],
  weight: '400'
});

export const montaga = Montaga({
  subsets: ['latin'],
  weight: '400'
});

export const kurale = Kurale({
  subsets: ['latin'],
  weight: '400'
});

export const bhuTukaExpandedOne = BhuTuka_Expanded_One({
  subsets: ['latin'],
  weight: '400'
});

export const andadaPro = Andada_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400'
});

export const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const bigelowRules = Bigelow_Rules({
  subsets: ['latin'],
  weight: '400'
});

export const mountainsOfChristmas = Mountains_of_Christmas({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const paprika = Paprika({
  subsets: ['latin'],
  weight: '400'
});

export const langar = Langar({
  subsets: ['latin'],
  weight: '400'
});

export const diplomataSc = Diplomata_SC({
  subsets: ['latin'],
  weight: '400'
});

export const alike = Alike({
  subsets: ['latin'],
  weight: '400'
});

export const alikeAngular = Alike_Angular({
  subsets: ['latin'],
  weight: '400'
});

export const elsie = Elsie({
  subsets: ['latin'],
  weight: ['400', '900']
});

export const elsieSwashCaps = Elsie_Swash_Caps({
  subsets: ['latin'],
  weight: ['400', '900']
});

export const almendra = Almendra({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const luxuriousRoman = Luxurious_Roman({
  subsets: ['latin'],
  weight: '400'
});

export const kottaOne = Kotta_One({
  subsets: ['latin'],
  weight: '400'
});

export const diplomata = Diplomata({
  subsets: ['latin'],
  weight: '400'
});

// Map font names to their configurations
export const fontConfigs: { [key: string]: NextFont } = {
  // Monospace fonts
  'Source Code Pro': sourceCodePro,
  'Roboto Mono': robotoMono,
  'Noto Sans Mono': notoSansMono,
  'PT Mono': ptMono,
  'Courier Prime': courierPrime,
  'IBM Plex Mono': ibmPlexMono,
  'Fira Mono': firaMono,
  
  // Serif fonts
  'Bitter': bitter,
  'Aleo': aleo,
  'Crete Round': creteRound,
  'Arvo': arvo,
  'Quattrocento': quattrocento,
  'Coustard': coustard,
  'PT Serif': ptSerif,
  'Noticia Text': noticiaText,
  'Roboto Serif': robotoSerif,
  'Zilla Slab': zillaSlab,
  'Ovo': ovo,
  'Playfair Display': playfairDisplay,
  'Lora': lora,
  'IBM Plex Serif': ibmPlexSerif,
  'Crimson Text': crimsonText,
  'EB Garamond': ebGaramond,
  'Libre Baskerville': libreBaskerville,
  'Source Serif': sourceSerif,
  'Merriweather': merriweather,
  'Instrument Serif': instrumentSerif,
  'Abril Fatface': abrilFatface,
  'Cormorant': cormorant,
  'Bodoni Moda': bodoniModa,
  'Fraunces': fraunces,
  'Newsreader': newsreader,
  'Cormorant Garamond': cormorantGaramond,
  'Stint Ultra Condensed': stintUltraCondensed,
  'Maiden Orange': maidenOrange,
  'Slabo 27px': slabo27px,
  'Bree Serif': breeSerif,
  'Josefin Slab': josefinSlab,
  'Rokkitt': rokkitt,
  'Imbue': imbue,
  'Alfa Slab One': alfaSlabOne,
  'Xanh Mono': xanhMono,
  'Bellefair': bellefair,
  'Headland One': headlandOne,
  'Spectral': spectral,
  'Suranna': suranna,
  'Domine': domine,
  'DM Serif Display': dmSerifDisplay,
  'Chonburi': chonburi,
  'Linden Hill': lindenHill,
  'Ultra': ultra,
  'Eczar': eczar,
  'Special Elite': specialElite,
  'Arbutus': arbutus,
  'Emilys Candy': emilysCandy,
  'Young Serif': youngSerif,
  'Oldenburg': oldenburg,
  'Montaga': montaga,
  'Kurale': kurale,
  'BhuTuka Expanded One': bhuTukaExpandedOne,
  'Andada Pro': andadaPro,
  'Gabriela': gabriela,
  'Inknut Antiqua': inknutAntiqua,
  'Bigelow Rules': bigelowRules,
  'Mountains of Christmas': mountainsOfChristmas,
  'Paprika': paprika,
  'Langar': langar,
  'Diplomata SC': diplomataSc,
  'Alike': alike,
  'Alike Angular': alikeAngular,
  'Elsie': elsie,
  'Elsie Swash Caps': elsieSwashCaps,
  'Almendra': almendra,
  'Luxurious Roman': luxuriousRoman,
  'Kotta One': kottaOne,
  'Diplomata': diplomata
}; 