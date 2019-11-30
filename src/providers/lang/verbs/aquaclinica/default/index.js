import LangProxy from '../../../../utils/lang.proxy';

import {
  constants,
  publics,
} from '../../../../config';

import categories from '../shared/categories';
import clerks from '../shared/clerks';
import forms from '../shared/forms';
import promos from '../shared/promos';
import services from '../shared/services';

const {
  LINK_CONTACT_FORM_1,
  LINK_SECTION_1,
  LINK_SECTION_2,
  LINK_SECTION_4,
  LINK_SECTION_5,
  LINK_SERVICES_1,
} = constants;

const Verbiage = {
  commons: {
    clerks_1: {
      clerks,
      title: {
        en: 'our specialists',
        es: 'nuestros especialistas',
      },
    },
    contact_1: {
      back: {
        en: '< previous',
        es: '< anterior',
      },
      categories,
      forms,
      id: LINK_CONTACT_FORM_1,
      services,
    },
    services_1: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      categories,
      id: LINK_SERVICES_1,
      services,
      title: {
        en: 'explore our specialities',
        es: 'explora nuestras especialidades',
      },
    },
  },
  components: {
    header: {
      cta: [
        {
          name: {
            en: 'get a quote',
            es: 'aprender más',
          },
        },
      ],
      logo: {
        desktop: '/static/images/logo.jpg',
        mobile: '/static/images/logo.jpg',
      },
      phone: {
        en: '(506) 9999-9999',
        es: '(506) 9999-9999',
      },
      phone_icon: 'phone',
      publics,
      social: [
        {
          icon: 'facebook',
          label: 'facebook',
          link: '#instagram',
        },
        {
          icon: 'facebook',
          label: 'facebook',
          link: '#facebook',
        },
        {
          icon: 'email',
          label: 'email',
          link: '#email',
        },
      ],
      title: {
        en: 'clinica aqua',
        es: 'clinica aqua',
      },

    },
  },
  err404: {
    index: {
      title: {
        en: 'page not found.',
        es: 'la página solicitada no fue encontrada.',
      },
    },
  },
  headers: {
    home: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'Clinica Aqua | Health Care | Welcome',
        es: 'Clinica Aqua | Salud | Bienvenido',
      },
    },
    services: {
      categories,
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      services,
      title: {
        en: 'Clinica Aqua | Healthcare | Healthcare Help',
        es: 'Clinica Aqua | Salud | Solicitar Ayuda',
      },
    },
  },
  home: {
    banner_1: {
      items: [
        {
          alt: {
            en: 'aetna insurance',
            es: 'aetna seguro',
          },
          logo: '/static/images/logos/aetna.png',
        },
        {
          alt: {
            en: 'ambetter insurance',
            es: 'ambetter seguro',
          },
          logo: '/static/images/logos/ambetter.png',
        },
        {
          alt: {
            en: 'blue cross insurance',
            es: 'blue cross seguro',
          },
          logo: '/static/images/logos/bluecross.png',
        },
        {
          alt: {
            en: 'cigna insurance',
            es: 'cigna seguro',
          },
          logo: '/static/images/logos/cigna.png',
        },
        {
          alt: {
            en: 'coventry insurance',
            es: 'coventry seguro',
          },
          logo: '/static/images/logos/coventry.png',
        },
        {
          alt: {
            en: 'florida blue insurance',
            es: 'florida blue seguro',
          },
          logo: '/static/images/logos/fblue.png',
        },
        {
          alt: {
            en: 'humana insurance',
            es: 'humana seguro',
          },
          logo: '/static/images/logos/humana.png',
        },
        {
          alt: {
            en: 'molina insurance',
            es: 'molina seguro',
          },
          logo: '/static/images/logos/molina.png',
        },
        {
          alt: {
            en: 'national general insurance',
            es: 'national general seguro',
          },
          logo: '/static/images/logos/ng.png',
        },
      ],
    },
    section_1: {
      background: '/static/images/d-bg-1.jpg',
      cta: {
        en: 'check available services',
        es: 'ver servicios disponibles',
      },
      id: LINK_SECTION_1,
      logo: {
        desktop: '/static/images/logo.jpg',
        mobile: '/static/images/logo.jpg',
      },
      subtitle: {
        en: '<span>we have the best plan for your health care needs and budget. <br/>get a free online quote for affordable health insurance</span>',
        es: '<span>health care finder. <br/>best affordable health  insurance in your area.</span>',
      },
      title: {
        en: '<span>welcome, we are clínica aqua</span>',
        es: '<span>bienvenido, somos clínica aqua</span>',
      },
    },
    section_2: {
      body: {
        en: 'with over 30 years of experience, we have helped tens of thousands of people get the right coverage to meet their needs. simply click the below button to get a no obligation quote.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      cta: {
        en: 'create your free quote',
        es: 'hacer consulta gratuita',
      },
      id: LINK_SECTION_2,
      subtitle: {
        en: '<span>Get our health services</br> information, quick and free.</span>',
        es: '<span>Obtén información sobre nuestros servicios</br> de salud, de manera fácil y gratuita.</span>',
      },
      svg: '/static/svg/team_work.svg',
      title: {
        en: 'We work with the best',
        es: 'Trabajamos con los mejores',
      },
    },
    section_4: {
      id: LINK_SECTION_4,
      svg: '/static/svg/team_work.svg',
      title: {
        en: 'we would love helping you to find the best attention and health threatments, make your free quote now.',
        es: 'queremos brindarte la mejor atención. <br/>consulta sobre nuestros servicios ahora mismo.',
      },
    },
    section_5: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      id: LINK_SECTION_5,
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 1',
            es: 'aprender más 1',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 1',
            es: 'item 1',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 2',
            es: 'aprender más 2',
          },
          ico: 'processor',
          image: {
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 2',
            es: 'item 2',
          },
          type: 'dental',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 3',
            es: 'aprender más 3',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 3',
            es: 'item 3',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 4',
            es: 'aprender más 4',
          },
          ico: 'print',
          image: {
            desktop: '/static/images/d-image-test.jpg',
            mobile: '/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 4',
            es: 'item 4',
          },
          type: 'boat',
        },
      ],
      title: {
        en: 'blog',
        es: 'conoce más <br/>en nuestro blog',
      },
    },
  },
  quote: {
    section_1: {
      back: {
        en: '< previous',
        es: '< anterior',
      },
      forms,
    },
  },
  services: {
    section_1: {
      back: {
        en: '< previous',
        es: '< anterior',
      },
      categories,
      promos,
      services,
    },
  },
};

export default function VerbiageSchema (id) {
  return LangProxy(Verbiage, id);
}