/** @jsx jsx */
import { useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import Modal, { CloseButton } from 'components/modal/modal';
import Image from 'components/image';
import videoBanner from 'assets/images/stores/2.jpeg';
import paint1 from 'assets/images/paint1.svg';
import { Link } from 'components/link';

const list = [
  'Carnicería',
  'Tienda de abarrotes',
  'Tortillería',
  'Papelería',
  'Ferretería',
  'Fondas'
];

const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
            </Modal>

            <Image
              src={videoBanner}
              width="795"
              height="557"
              className="video-banner"
              alt="video banner"
            />

          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Enfocados a ayudar al emprendedor
              <span sx={{ background: `url(${paint1})` }}>del sureste</span> a crecer su negocio y lograr sus metas a corto plazo
            </Heading>
            <Text sx={styles.summary} >
              Si cuentas con uno de los siguientes emprendimientos y quieres acelerar el crecimiento de tu negocio, <a href="https://api.whatsapp.com/send?phone=+5219811862261&text=Estoy Interesado en un crédito para mi negocio" style={{ color: '#A29BFE', fontWeight: 500, cursor: "pointer" }}>agenda una visita</a>.
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gap: '0 30px',
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '1fr 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    '.video-banner': {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, null, null, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ['center', null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 180px)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
