/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = {
  services: [
    {
      id: 1,
      icon: "BsHeart",
      title: 'Interés preferencial',
      desc: `Contamos con una tasa de interés preferencial para nuestros clientes.`,
      link: '#',
    },
    {
      id: 2,
      icon: "BsGraphUp",
      title: 'Apoyo al emprendimiento',
      desc: `Estamos enfocados a ayudar a los emprendedores a lograr sus metas en corto plazo.`,
      link: '#',
    },
    {
      id: 3,
      icon: "BsAlarm",
      title: 'Sin tiempos de espera',
      desc: `Recibirás la cantidad solicitada al momento de que firmes.`,
      link: '#',
    },
    {
      id: 4,
      icon: "BsLightning",
      title: 'Solución express',
      desc: `Olvídate de los largos procesos. Con solo una visita en tu local el agente podrá otorgarse tu crédito.`,
      link: '#',
    },
    {
      id: 5,
      icon: "BsPhone",
      title: 'Apoyo telefónico',
      desc: `Contamos con asesores para cualquier duda que tengas.`,
      link: '#',
    },
    {
      id: 6,
      icon: "BsGeo",
      title: 'Sin salir de tu negocio',
      desc: `Tanto el crédito como los abonos se realizarán en tu negocio.`,
      link: '#',
    },
  ],
  stats: [
    {
      id: 1,
      value: 254,
      suffix: '',
      title: 'Successful Project',
    },
    {
      id: 2,
      value: 3783,
      suffix: '',
      title: 'People Impacted',
    },
    {
      id: 3,
      value: 8,
      suffix: 'M',
      title: 'Money Donated',
    },
    {
      id: 4,
      value: 60,
      suffix: '+',
      title: 'Volunteer Involved',
    },
  ],
};

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Nuestros valores"
          title="¿Qué nos hace diferentes?"
        />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
        {/*<Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
          </Grid>*/}
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  serviceGrid: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
    borderRadius: 10,
    gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 250px)',
      null,
      null,
      'repeat(2, 260px)',
      'repeat(3, 258px)',
      'repeat(3, 300px)',
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 120px)',
      null,
      null,
      'repeat(4, 130px)',
      'repeat(4, 150px)',
    ],
    mt: [10],
  },
};
