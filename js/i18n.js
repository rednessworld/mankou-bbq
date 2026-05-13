/* ============================================================
   MULTI-LANGUAGE SUPPORT — ManKou BBQ 满口香
   Spanish (ES) · Catalan (CA) · English (EN)
   Default: Spanish
   ============================================================ */

const LANG_KEY = 'preferred_lang';

const translations = {

  /* ── SPANISH ─────────────────────────────────────────────── */
  es: {
    /* A11y */
    'a11y.skip': 'Saltar al contenido',

    /* Nav */
    'nav.aria':    'Navegación principal',
    'nav.about':   'Nosotros',
    'nav.menu':    'Carta',
    'nav.gallery': 'Galería',
    'nav.reviews': 'Opiniones',
    'nav.findus':  'Encuéntranos',
    'nav.reserve': 'Reservar',
    'nav.open':    'Abrir menú',
    'nav.close':   'Cerrar menú',

    /* Hero */
    'hero.eyebrow': 'BBQ Premium · Barcelona · 满口香',
    'hero.title':   'El Arte del',
    'hero.title.em': 'Fuego y el Sabor',
    'hero.sub':     'Auténtica barbacoa china con los mejores cortes de carne. Una experiencia gastronómica única en el corazón de Barcelona.',
    'hero.cta.primary':   'Reservar mesa',
    'hero.cta.secondary': 'Ver la carta',
    'hero.scroll': 'Descubrir',

    /* About */
    'about.label':   '01 / Nuestra historia',
    'about.heading': 'Sabores que llenan la boca',
    'about.p1': 'ManKou BBQ (满口香, «Boca llena de fragancia») nació de la pasión por la barbacoa china auténtica. Seleccionamos cada corte con precisión, marinamos con recetas familiares transmitidas durante generaciones y los cocinamos sobre carbón de binchotan para un sabor puro e inigualable.',
    'about.p2': 'En pleno Eixample barcelonés, hemos creado un espacio donde el ambiente industrial y sofisticado potencia cada bocado. Ven a vivir una experiencia que fusiona la tradición culinaria china con la mejor materia prima del Mediterráneo.',
    'about.h1': 'Binchotan',
    'about.l1': 'Carbón japonés artesanal',
    'about.h2': 'Wagyu A5',
    'about.l2': 'La máxima calidad',
    'about.h3': '满口香',
    'about.l3': 'Boca llena de fragancia',

    /* Menu */
    'menu.label':   '02 / La Carta',
    'menu.heading': 'Cortes Selectos',
    'menu.sub':     'Cortes seleccionados, marinados en casa, cocinados a la brasa',

    /* Menu tabs */
    'menu.tab.carnes':   'Carnes',
    'menu.tab.mariscos': 'Mariscos',
    'menu.tab.verduras': 'Verduras',
    'menu.tab.extras':   'Extras',

    /* Carnes */
    'menu.wagyu.name':     'Wagyu A5 Japonés',
    'menu.wagyu.cn':       '和牛A5',
    'menu.wagyu.desc':     'Lomo de wagyu de Kagoshima, marmorado premium, 100g',
    'menu.wagyu.price':    '€38',

    'menu.costilla.name':  'Costilla de Ternera',
    'menu.costilla.cn':    '牛仔骨',
    'menu.costilla.desc':  'Costillas cortas en adobo de soja, jengibre y ajo, 200g',
    'menu.costilla.price': '€24',

    'menu.iberico.name':   'Secreto Ibérico',
    'menu.iberico.cn':     '伊比利亚里脊',
    'menu.iberico.desc':   'Cerdo ibérico de bellota, marinado en salsa de sésamo y miso',
    'menu.iberico.price':  '€18',
    'menu.iberico.chip':   'Favorito',

    'menu.pato.name':      'Pechuga de Pato',
    'menu.pato.cn':        '鸭胸片',
    'menu.pato.desc':      'Pato de Barbería glaseado con miel y soja envejecida',
    'menu.pato.price':     '€16',

    'menu.cerdo.name':     'Panceta de Cerdo',
    'menu.cerdo.cn':       '五花肉',
    'menu.cerdo.desc':     'Panceta de cerdo cortada fina, caramelizada a la brasa',
    'menu.cerdo.price':    '€14',

    /* Mariscos */
    'menu.gambas.name':    'Gambas Tigre',
    'menu.gambas.cn':      '虎虾',
    'menu.gambas.desc':    'Gambas de Palamós a la brasa con mantequilla de ajo y cebollino',
    'menu.gambas.price':   '€18',

    'menu.vieiras.name':   'Vieiras al Miso',
    'menu.vieiras.cn':     '味噌扇贝',
    'menu.vieiras.desc':   'Vieiras gallegas con pasta de miso blanco y mantequilla de yuzu',
    'menu.vieiras.price':  '€22',
    'menu.vieiras.chip':   'Chef',

    'menu.calamar.name':   'Calamar a la Brasa',
    'menu.calamar.cn':     '炭烤鱿鱼',
    'menu.calamar.desc':   'Calamar mediterráneo marinado en salsa de ostras y aceite de sésamo',
    'menu.calamar.price':  '€14',

    /* Verduras */
    'menu.maiz.name':      'Maíz a la Brasa',
    'menu.maiz.cn':        '烤玉米',
    'menu.maiz.desc':      'Maíz dulce con mantequilla de miso y furikake de sésamo negro',
    'menu.maiz.price':     '€7',

    'menu.setas.name':     'Setas Mixtas',
    'menu.setas.cn':       '什锦菇',
    'menu.setas.desc':     'Shiitake, enoki y seta ostra con salsa ponzu y aceite de trufa',
    'menu.setas.price':    '€9',

    'menu.berenjena.name': 'Berenjena con Miso',
    'menu.berenjena.cn':   '味噌茄子',
    'menu.berenjena.desc': 'Berenjenas japonesas glaseadas con pasta dengaku de miso rojo',
    'menu.berenjena.price':'€8',

    'menu.esparragos.name':'Espárragos Verdes',
    'menu.esparragos.cn':  '芦笋',
    'menu.esparragos.desc':'Espárragos de Navarra con vinagreta de sésamo negro y ralladura de yuzu',
    'menu.esparragos.price':'€8',

    /* Extras */
    'menu.arroz.name':     'Arroz Frito',
    'menu.arroz.cn':       '炒饭',
    'menu.arroz.desc':     'Arroz frito al wok con huevo, cebollino y salsa de soja',
    'menu.arroz.price':    '€8',

    'menu.kimchi.name':    'Kimchi de la Casa',
    'menu.kimchi.cn':      '泡菜',
    'menu.kimchi.desc':    'Kimchi de col china fermentado artesanalmente',
    'menu.kimchi.price':   '€5',

    'menu.salsabbq.name':  'Salsa BBQ Casera',
    'menu.salsabbq.cn':    '自制BBQ酱',
    'menu.salsabbq.desc':  'Salsa BBQ de receta secreta con especias chinas y toques ahumados',
    'menu.salsabbq.price': '€3',

    'menu.edamame.name':   'Edamame',
    'menu.edamame.cn':     '毛豆',
    'menu.edamame.desc':   'Vainas de soja al vapor con sal marina y aceite de sésamo',
    'menu.edamame.price':  '€5',

    'menu.cta': 'Reservar una mesa',

    /* Gallery */
    'gallery.label':   '03 / Galería',
    'gallery.heading': 'Cada Plato, una Obra',
    'gallery.sub':     'Fotografías reales de nuestra cocina',
    'gallery.cta':     'Síguenos en Instagram',

    /* Reviews */
    'reviews.label':   '04 / Opiniones',
    'reviews.heading': 'Lo que Dicen Nuestros Clientes',
    'reviews.count':   '234 opiniones en Google',
    'reviews.cta':     'Ver todas las opiniones',
    'reviews.leave':   'Deja tu opinión',

    /* Find Us */
    'findus.label':        '05 / Encuéntranos',
    'findus.heading':      'Visítanos en Barcelona',
    'findus.address.street': 'Carrer de la Diputació, 424',
    'findus.address.city':   '08013 Barcelona',
    'findus.address.country':'España',
    'findus.phone':        '+34 600 000 000',
    'findus.hours.label':  'Horario',
    'findus.hours.tues':   'Martes — Jueves',
    'findus.hours.tues.v': '13:00–16:00 · 20:00–23:30',
    'findus.hours.frisun': 'Viernes — Domingo',
    'findus.hours.frisun.v':'13:00–16:30 · 20:00–00:00',
    'findus.hours.mon':    'Lunes',
    'findus.hours.mon.v':  'Cerrado',
    'findus.whatsapp.heading': 'Reservar por WhatsApp',
    'findus.whatsapp.sub':     'Respuesta rápida · Sin esperas · Confirmación inmediata',
    'findus.whatsapp.cta':     'Reservar ahora',
    'findus.maplink':          'Ver en Google Maps ↗',

    /* Footer */
    'footer.tagline':   'Auténtica barbacoa china en el corazón de Barcelona.',
    'footer.nav.title': 'Navegación',
    'footer.contact.title': 'Contacto',
    'footer.link.about':   'Nosotros',
    'footer.link.menu':    'Carta',
    'footer.link.gallery': 'Galería',
    'footer.link.findus':  'Encuéntranos',
    'footer.link.privacy': 'Privacidad',
    'footer.copy':      '© 2026 ManKou BBQ 满口香 · Barcelona',

    /* Cookie */
    'cookie.text':    'Usamos cookies para analizar el tráfico y mejorar tu experiencia. Requerido por el RGPD.',
    'cookie.accept':  'Aceptar todo',
    'cookie.decline': 'Solo necesarias',
    'cookie.privacy': 'Política de privacidad',

    /* WhatsApp prefill */
    'whatsapp.message': 'Hola, me gustaría reservar una mesa en ManKou BBQ. ¿Tenéis disponibilidad?',

    /* Floating buttons */
    'btt.label':      'Volver al inicio',
    'whatsapp.aria':  'Reservar por WhatsApp',
  },

  /* ── CATALAN ─────────────────────────────────────────────── */
  ca: {
    'a11y.skip': 'Salta al contingut',

    'nav.aria':    'Navegació principal',
    'nav.about':   'Nosaltres',
    'nav.menu':    'Carta',
    'nav.gallery': 'Galeria',
    'nav.reviews': 'Opinions',
    'nav.findus':  'Troba\'ns',
    'nav.reserve': 'Reservar',
    'nav.open':    'Obrir menú',
    'nav.close':   'Tancar menú',

    'hero.eyebrow': 'BBQ Premium · Barcelona · 满口香',
    'hero.title':   'L\'Art del',
    'hero.title.em': 'Foc i el Sabor',
    'hero.sub':     'Autèntica barbacoa xinesa amb els millors talls de carn. Una experiència gastronòmica única al cor de Barcelona.',
    'hero.cta.primary':   'Reservar taula',
    'hero.cta.secondary': 'Veure la carta',
    'hero.scroll': 'Descobrir',

    'about.label':   '01 / La nostra història',
    'about.heading': 'Sabors que omplen la boca',
    'about.p1': 'ManKou BBQ (满口香, «Boca plena de fragància») va néixer de la passió per la barbacoa xinesa autèntica. Seleccionem cada tall amb precisió, marinem amb receptes familiars transmeses durant generacions i els cuinem sobre carbó de binchotan per a un sabor pur i inigualable.',
    'about.p2': 'En ple Eixample barceloní, hem creat un espai on l\'ambient industrial i sofisticat potencia cada mos. Vine a viure una experiència que fusiona la tradició culinària xinesa amb la millor matèria primera de la Mediterrània.',
    'about.h1': 'Binchotan',
    'about.l1': 'Carbó japonès artesanal',
    'about.h2': 'Wagyu A5',
    'about.l2': 'La màxima qualitat',
    'about.h3': '满口香',
    'about.l3': 'Boca plena de fragància',

    'menu.label':   '02 / La Carta',
    'menu.heading': 'Talls Selectes',
    'menu.sub':     'Talls seleccionats, marinats a casa, cuinats a la brasa',

    'menu.tab.carnes':   'Carns',
    'menu.tab.mariscos': 'Marisc',
    'menu.tab.verduras': 'Verdures',
    'menu.tab.extras':   'Extres',

    'menu.wagyu.name':     'Wagyu A5 Japonès',
    'menu.wagyu.cn':       '和牛A5',
    'menu.wagyu.desc':     'Llom de wagyu de Kagoshima, marmorat premium, 100g',
    'menu.wagyu.price':    '€38',
    'menu.costilla.name':  'Costella de Vedella',
    'menu.costilla.cn':    '牛仔骨',
    'menu.costilla.desc':  'Costelles curtes en adob de soja, gingebre i all, 200g',
    'menu.costilla.price': '€24',
    'menu.iberico.name':   'Secret Ibèric',
    'menu.iberico.cn':     '伊比利亚里脊',
    'menu.iberico.desc':   'Porc ibèric de bellota, marinat en salsa de sèsam i miso',
    'menu.iberico.price':  '€18',
    'menu.iberico.chip':   'Favorit',
    'menu.pato.name':      'Pit d\'Ànec',
    'menu.pato.cn':        '鸭胸片',
    'menu.pato.desc':      'Ànec de Barberia glassat amb mel i soja envellida',
    'menu.pato.price':     '€16',
    'menu.cerdo.name':     'Panxeta de Porc',
    'menu.cerdo.cn':       '五花肉',
    'menu.cerdo.desc':     'Panxeta de porc tallada fina, caramel·litzada a la brasa',
    'menu.cerdo.price':    '€14',

    'menu.gambas.name':    'Gambes Tigre',
    'menu.gambas.cn':      '虎虾',
    'menu.gambas.desc':    'Gambes de Palamós a la brasa amb mantega d\'all i cebollí',
    'menu.gambas.price':   '€18',
    'menu.vieiras.name':   'Vieres al Miso',
    'menu.vieiras.cn':     '味噌扇贝',
    'menu.vieiras.desc':   'Vieres gallegues amb pasta de miso blanc i mantega de yuzu',
    'menu.vieiras.price':  '€22',
    'menu.vieiras.chip':   'Chef',
    'menu.calamar.name':   'Calamar a la Brasa',
    'menu.calamar.cn':     '炭烤鱿鱼',
    'menu.calamar.desc':   'Calamar mediterrani marinat en salsa d\'ostres i oli de sèsam',
    'menu.calamar.price':  '€14',

    'menu.maiz.name':      'Blat de Moro a la Brasa',
    'menu.maiz.cn':        '烤玉米',
    'menu.maiz.desc':      'Blat de moro dolç amb mantega de miso i furikake de sèsam negre',
    'menu.maiz.price':     '€7',
    'menu.setas.name':     'Bolets Mixtos',
    'menu.setas.cn':       '什锦菇',
    'menu.setas.desc':     'Shiitake, enoki i gírgola amb salsa ponzu i oli de tòfona',
    'menu.setas.price':    '€9',
    'menu.berenjena.name': 'Albergínia amb Miso',
    'menu.berenjena.cn':   '味噌茄子',
    'menu.berenjena.desc': 'Albergínies japoneses glasades amb pasta dengaku de miso vermell',
    'menu.berenjena.price':'€8',
    'menu.esparragos.name':'Espàrrecs Verds',
    'menu.esparragos.cn':  '芦笋',
    'menu.esparragos.desc':'Espàrrecs de Navarra amb vinagreta de sèsam negre i ratlladura de yuzu',
    'menu.esparragos.price':'€8',

    'menu.arroz.name':     'Arròs Fregit',
    'menu.arroz.cn':       '炒饭',
    'menu.arroz.desc':     'Arròs fregit al wok amb ou, cebollí i salsa de soja',
    'menu.arroz.price':    '€8',
    'menu.kimchi.name':    'Kimchi de la Casa',
    'menu.kimchi.cn':      '泡菜',
    'menu.kimchi.desc':    'Kimchi de col xinesa fermentat artesanalment',
    'menu.kimchi.price':   '€5',
    'menu.salsabbq.name':  'Salsa BBQ Casolana',
    'menu.salsabbq.cn':    '自制BBQ酱',
    'menu.salsabbq.desc':  'Salsa BBQ de recepta secreta amb espècies xineses i tocs fumats',
    'menu.salsabbq.price': '€3',
    'menu.edamame.name':   'Edamame',
    'menu.edamame.cn':     '毛豆',
    'menu.edamame.desc':   'Beines de soja al vapor amb sal marina i oli de sèsam',
    'menu.edamame.price':  '€5',

    'menu.cta': 'Reservar una taula',

    'gallery.label':   '03 / Galeria',
    'gallery.heading': 'Cada Plat, una Obra',
    'gallery.sub':     'Fotografies reals de la nostra cuina',
    'gallery.cta':     'Segueix-nos a Instagram',

    'reviews.label':   '04 / Opinions',
    'reviews.heading': 'El que Diuen els Nostres Clients',
    'reviews.count':   '234 opinions a Google',
    'reviews.cta':     'Veure totes les opinions',
    'reviews.leave':   'Deixa la teva opinió',

    'findus.label':        '05 / Troba\'ns',
    'findus.heading':      'Visita\'ns a Barcelona',
    'findus.address.street': 'Carrer de la Diputació, 424',
    'findus.address.city':   '08013 Barcelona',
    'findus.address.country':'Espanya',
    'findus.phone':        '+34 600 000 000',
    'findus.hours.label':  'Horari',
    'findus.hours.tues':   'Dimarts — Dijous',
    'findus.hours.tues.v': '13:00–16:00 · 20:00–23:30',
    'findus.hours.frisun': 'Divendres — Diumenge',
    'findus.hours.frisun.v':'13:00–16:30 · 20:00–00:00',
    'findus.hours.mon':    'Dilluns',
    'findus.hours.mon.v':  'Tancat',
    'findus.whatsapp.heading': 'Reservar per WhatsApp',
    'findus.whatsapp.sub':     'Resposta ràpida · Sense esperes · Confirmació immediata',
    'findus.whatsapp.cta':     'Reservar ara',
    'findus.maplink':          'Veure a Google Maps ↗',

    'footer.tagline':   'Autèntica barbacoa xinesa al cor de Barcelona.',
    'footer.nav.title': 'Navegació',
    'footer.contact.title': 'Contacte',
    'footer.link.about':   'Nosaltres',
    'footer.link.menu':    'Carta',
    'footer.link.gallery': 'Galeria',
    'footer.link.findus':  'Troba\'ns',
    'footer.link.privacy': 'Privadesa',
    'footer.copy':      '© 2026 ManKou BBQ 满口香 · Barcelona',

    'cookie.text':    'Fem servir cookies per analitzar el tràfic i millorar la teva experiència. Requerit pel RGPD.',
    'cookie.accept':  'Acceptar tot',
    'cookie.decline': 'Només necessàries',
    'cookie.privacy': 'Política de privadesa',

    'whatsapp.message': 'Hola, m\'agradaria reservar una taula a ManKou BBQ. Teniu disponibilitat?',

    /* Floating buttons */
    'btt.label':      'Tornar a l\'inici',
    'whatsapp.aria':  'Reservar per WhatsApp',
  },

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    'a11y.skip': 'Skip to content',

    'nav.aria':    'Main navigation',
    'nav.about':   'About',
    'nav.menu':    'Menu',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.findus':  'Find Us',
    'nav.reserve': 'Reserve',
    'nav.open':    'Open menu',
    'nav.close':   'Close menu',

    'hero.eyebrow': 'Premium BBQ · Barcelona · 满口香',
    'hero.title':   'The Art of',
    'hero.title.em': 'Fire & Flavour',
    'hero.sub':     'Authentic Chinese barbecue with the finest cuts. A unique gastronomic experience in the heart of Barcelona.',
    'hero.cta.primary':   'Reserve a table',
    'hero.cta.secondary': 'View the menu',
    'hero.scroll': 'Discover',

    'about.label':   '01 / Our Story',
    'about.heading': 'Flavours That Fill the Mouth',
    'about.p1': 'ManKou BBQ (满口香, "Mouth Full of Fragrance") was born from a passion for authentic Chinese barbecue. We select every cut with precision, marinate with family recipes passed down through generations, and cook over binchotan charcoal for a pure, unrivalled flavour.',
    'about.p2': 'In the heart of Barcelona\'s Eixample, we\'ve created a space where the sophisticated industrial atmosphere enhances every bite. Come and experience a fusion of Chinese culinary tradition with the finest Mediterranean ingredients.',
    'about.h1': 'Binchotan',
    'about.l1': 'Pure Japanese charcoal',
    'about.h2': 'Wagyu A5',
    'about.l2': 'The finest quality',
    'about.h3': '满口香',
    'about.l3': 'Mouth full of fragrance',

    'menu.label':   '02 / The Menu',
    'menu.heading': 'Curated Cuts',
    'menu.sub':     'Handpicked cuts, house-marinated, cooked over live fire',

    'menu.tab.carnes':   'Meats',
    'menu.tab.mariscos': 'Seafood',
    'menu.tab.verduras': 'Vegetables',
    'menu.tab.extras':   'Extras',

    'menu.wagyu.name':     'Japanese A5 Wagyu',
    'menu.wagyu.cn':       '和牛A5',
    'menu.wagyu.desc':     'Kagoshima wagyu sirloin, premium marbling, 100g',
    'menu.wagyu.price':    '€38',
    'menu.costilla.name':  'Beef Short Ribs',
    'menu.costilla.cn':    '牛仔骨',
    'menu.costilla.desc':  'Short ribs in soy, ginger and garlic marinade, 200g',
    'menu.costilla.price': '€24',
    'menu.iberico.name':   'Ibérico Secret Cut',
    'menu.iberico.cn':     '伊比利亚里脊',
    'menu.iberico.desc':   'Acorn-fed Ibérico pork, sesame and miso marinade',
    'menu.iberico.price':  '€18',
    'menu.iberico.chip':   'Favourite',
    'menu.pato.name':      'Duck Breast',
    'menu.pato.cn':        '鸭胸片',
    'menu.pato.desc':      'Barbary duck glazed with honey and aged soy sauce',
    'menu.pato.price':     '€16',
    'menu.cerdo.name':     'Pork Belly',
    'menu.cerdo.cn':       '五花肉',
    'menu.cerdo.desc':     'Thinly sliced pork belly, caramelised over live coals',
    'menu.cerdo.price':    '€14',

    'menu.gambas.name':    'Tiger Prawns',
    'menu.gambas.cn':      '虎虾',
    'menu.gambas.desc':    'Palamós prawns grilled with garlic butter and chive',
    'menu.gambas.price':   '€18',
    'menu.vieiras.name':   'Miso Scallops',
    'menu.vieiras.cn':     '味噌扇贝',
    'menu.vieiras.desc':   'Galician scallops with white miso paste and yuzu butter',
    'menu.vieiras.price':  '€22',
    'menu.vieiras.chip':   'Chef',
    'menu.calamar.name':   'Grilled Squid',
    'menu.calamar.cn':     '炭烤鱿鱼',
    'menu.calamar.desc':   'Mediterranean squid marinated in oyster sauce and sesame oil',
    'menu.calamar.price':  '€14',

    'menu.maiz.name':      'Grilled Sweet Corn',
    'menu.maiz.cn':        '烤玉米',
    'menu.maiz.desc':      'Sweet corn with miso butter and black sesame furikake',
    'menu.maiz.price':     '€7',
    'menu.setas.name':     'Mixed Mushrooms',
    'menu.setas.cn':       '什锦菇',
    'menu.setas.desc':     'Shiitake, enoki and oyster mushrooms with ponzu and truffle oil',
    'menu.setas.price':    '€9',
    'menu.berenjena.name': 'Miso Aubergine',
    'menu.berenjena.cn':   '味噌茄子',
    'menu.berenjena.desc': 'Japanese aubergine glazed with red miso dengaku paste',
    'menu.berenjena.price':'€8',
    'menu.esparragos.name':'Green Asparagus',
    'menu.esparragos.cn':  '芦笋',
    'menu.esparragos.desc':'Navarrese asparagus with black sesame vinaigrette and yuzu zest',
    'menu.esparragos.price':'€8',

    'menu.arroz.name':     'Fried Rice',
    'menu.arroz.cn':       '炒饭',
    'menu.arroz.desc':     'Wok-fried rice with egg, chive and soy sauce',
    'menu.arroz.price':    '€8',
    'menu.kimchi.name':    'House Kimchi',
    'menu.kimchi.cn':      '泡菜',
    'menu.kimchi.desc':    'Artisanally fermented Chinese cabbage kimchi',
    'menu.kimchi.price':   '€5',
    'menu.salsabbq.name':  'House BBQ Sauce',
    'menu.salsabbq.cn':    '自制BBQ酱',
    'menu.salsabbq.desc':  'Secret recipe BBQ sauce with Chinese spices and smoky notes',
    'menu.salsabbq.price': '€3',
    'menu.edamame.name':   'Edamame',
    'menu.edamame.cn':     '毛豆',
    'menu.edamame.desc':   'Steamed soybean pods with sea salt and sesame oil',
    'menu.edamame.price':  '€5',

    'menu.cta': 'Reserve a Table',

    'gallery.label':   '03 / Gallery',
    'gallery.heading': 'Every Dish, a Masterpiece',
    'gallery.sub':     'Real photography from our kitchen',
    'gallery.cta':     'Follow us on Instagram',

    'reviews.label':   '04 / Reviews',
    'reviews.heading': 'What Our Guests Say',
    'reviews.count':   '234 reviews on Google',
    'reviews.cta':     'Read all reviews',
    'reviews.leave':   'Leave a review',

    'findus.label':        '05 / Find Us',
    'findus.heading':      'Visit Us in Barcelona',
    'findus.address.street': 'Carrer de la Diputació, 424',
    'findus.address.city':   '08013 Barcelona',
    'findus.address.country':'Spain',
    'findus.phone':        '+34 600 000 000',
    'findus.hours.label':  'Opening Hours',
    'findus.hours.tues':   'Tuesday — Thursday',
    'findus.hours.tues.v': '1:00–4:00pm · 8:00–11:30pm',
    'findus.hours.frisun': 'Friday — Sunday',
    'findus.hours.frisun.v':'1:00–4:30pm · 8:00pm–midnight',
    'findus.hours.mon':    'Monday',
    'findus.hours.mon.v':  'Closed',
    'findus.whatsapp.heading': 'Reserve via WhatsApp',
    'findus.whatsapp.sub':     'Fast response · No waiting · Instant confirmation',
    'findus.whatsapp.cta':     'Reserve now',
    'findus.maplink':          'View on Google Maps ↗',

    'footer.tagline':   'Authentic Chinese barbecue in the heart of Barcelona.',
    'footer.nav.title': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.link.about':   'About',
    'footer.link.menu':    'Menu',
    'footer.link.gallery': 'Gallery',
    'footer.link.findus':  'Find Us',
    'footer.link.privacy': 'Privacy',
    'footer.copy':      '© 2026 ManKou BBQ 满口香 · Barcelona',

    'cookie.text':    'We use cookies to analyse traffic and improve your experience. Required by GDPR for EU visitors.',
    'cookie.accept':  'Accept all',
    'cookie.decline': 'Necessary only',
    'cookie.privacy': 'Privacy policy',

    'whatsapp.message': 'Hello, I\'d like to reserve a table at ManKou BBQ. Do you have availability?',

    /* Floating buttons */
    'btt.label':      'Back to top',
    'whatsapp.aria':  'Reserve via WhatsApp',
  },
};

/* ── Public API ─────────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'es';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Swap innerHTML (preserves child elements like <em>, <a>, <strong>) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Swap aria-label attributes */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* Update <html lang> */
  document.documentElement.lang = lang === 'ca' ? 'ca' : lang === 'es' ? 'es' : 'en';

  /* Sync lang-btn active states */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Update WhatsApp FAB link */
  const waFab = document.getElementById('whatsapp-fab');
  if (waFab && t['whatsapp.message']) {
    const phone = waFab.dataset.phone.replace(/\D/g, '');
    waFab.href = `https://wa.me/${phone}?text=${encodeURIComponent(t['whatsapp.message'])}`;
  }

  /* Update WhatsApp card button */
  const waCard = document.getElementById('whatsapp-card-btn');
  if (waCard && t['whatsapp.message']) {
    const phone = waCard.dataset.phone.replace(/\D/g, '');
    waCard.href = `https://wa.me/${phone}?text=${encodeURIComponent(t['whatsapp.message'])}`;
  }

  localStorage.setItem(LANG_KEY, lang);
}

function initLang() {
  applyLang(getLang());
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

initLang();
