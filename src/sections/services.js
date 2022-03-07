/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import StatItem from 'components/cards/stat-item';
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
      icon: icon1,
      title: 'Interes preferencial',
      desc: `Contamos con una tasa de interes preferencial para nuestros clientes.`,
      link: '#',
    },
    {
      id: 2,
      icon: icon2,
      title: 'Apoyo al emprendimiento',
      desc: `Estamos enfocados en ayudar a los emprendedores campechanos.`,
      link: '#',
    },
    {
      id: 3,
      icon: icon3,
      title: 'Sin tiempos de espera',
      desc: `Recibiras la cantidad solicitada al momento de que firmes.`,
      link: '#',
    },
    {
      id: 4,
      icon: icon4,
      title: 'Solucion express',
      desc: `Olvidate de los largos procesos; con solo una visita en tu local el agente podra otorgarte tu credito.`,
      link: '#',
    },
    {
      id: 5,
      icon: icon5,
      title: 'Apoyo telefonico',
      desc: `Contamos con asesores para cualquier duda que tengas.`,
      link: '#',
    },
    {
      id: 6,
      icon: icon6,
      title: 'Sin salir de tu negocio',
      desc: `Tanto el credito como los abonos se otorgaran en tu negocio.`,
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
          title="¿Que nos hace diferentes?"
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
