import {
  constants,
} from './../../../../../config';

import {
  CreateUrlOnePath,
} from './../../../../../utils/url.formatter';

// constants
const {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,

  PATHS: {
    SERVICES,
  },
} = constants;

const url = CreateUrlOnePath(SERVICES);

const Services = [
  {
    background: `/static/images/${CATEGORY_1}/3.png`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: `
        lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/><br/>
      `,
      es: `
        lorem ipsum dolor sit amet, <strong>consectetuer adipiscing elit.</strong> lorem ipsum dolor sit amet, consectetuer adipiscing elit. lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/><br/>
      `,
    },
    ico: 'home',
    id: CATEGORY_1,
    image: {
      desktop: `/static/images/${CATEGORY_1}/3.png`,
      mobile: `/static/images/${CATEGORY_1}/3.png`,
    },
    images: [
      {
        desktop: `/static/images/${CATEGORY_1}/3.png`,
        mobile: `/static/images/${CATEGORY_1}/3.png`,
      },
      {
        desktop: `/static/images/${CATEGORY_1}/3.png`,
        mobile: `/static/images/${CATEGORY_1}/3.png`,
      },
    ],
    svg: '/static/svg/team_work.svg',
    title: {
      en: 'estetic dermatology',
      es: 'dermatología estética',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('estetic-dermatology', 'en'),
      es: url('dermatologia-estetica', 'es'),
    },
  },
  {
    background: `/static/images/${CATEGORY_2}/2.jpg`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    ico: 'cloud-download',
    id: CATEGORY_2,
    image: {
      desktop: `/static/images/${CATEGORY_2}/2.jpg`,
      mobile: `/static/images/${CATEGORY_2}/2.jpg`,
    },
    images: [
      {
        desktop: `/static/images/${CATEGORY_2}/2.jpg`,
        mobile: `/static/images/${CATEGORY_2}/2.jpg`,
      },
      {
        desktop: `/static/images/${CATEGORY_2}/2.jpg`,
        mobile: `/static/images/${CATEGORY_2}/2.jpg`,
      },
    ],
    svg: '/static/svg/team_work.svg',
    title: {
      en: 'clinic dermatology',
      es: 'dermatología clinica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('clinic-dermatology', 'en'),
      es: url('dermatologia-clinica', 'es'),
    },
  },
  {
    background: `/static/images/${CATEGORY_3}/3.png`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_3,
    image: {
      desktop: `/static/images/${CATEGORY_3}/3.png`,
      mobile: `/static/images/${CATEGORY_3}/3.png`,
    },
    title: {
      en: 'estética y spa clínico',
      es: 'estética y spa clínico',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('estetica-y-spa-clinico', 'en'),
      es: url('estetica-y-spa-clinico', 'es'),
    },
  },
  {
    background: `/static/images/${CATEGORY_4}/3.jpg`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_4,
    image: {
      desktop: `/static/images/${CATEGORY_4}/3.jpg`,
      mobile: `/static/images/${CATEGORY_4}/3.jpg`,
    },
    title: {
      en: 'nutricion',
      es: 'nutricion',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('nutricion', 'en'),
      es: url('nutricion', 'es'),
    },
  },
  {
    background: `/static/images/${CATEGORY_5}/3.jpg`,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#ef1e83',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'cloud-download',
    id: CATEGORY_5,
    image: {
      desktop: `/static/images/${CATEGORY_5}/3.jpg`,
      mobile: `/static/images/${CATEGORY_5}/3.jpg`,
    },
    title: {
      en: 'terapia fisica',
      es: 'terapia fisica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('terapia-fisica', 'en'),
      es: url('terapia-fisica', 'es'),
    },
  },
];

export default Services;
