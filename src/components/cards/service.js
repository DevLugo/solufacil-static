/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import * as BsIcons from "react-icons/bs";


const Service = ({ service }) => {
  const Icon = BsIcons[service.icon];
  return (
    <Box sx={styles.service}>
      <Box as="figure">
        <Icon color='#f7a40c' size={"45px"} />
      </Box>
      <Heading as="h4">{service.title}</Heading>
      <Text as="p">{service.desc}</Text>

      .    </Box>
  );
};

export default Service;

const styles = {
  service: {
    textAlign: 'center',
    figure: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: [4, null, null, 6],
      minHeight: 64,
    },
    h4: {
      color: 'heading',
      fontWeight: 500,
      fontSize: '17px',
      lineHeight: 1.77,
      mb: [2, null, null, 3],
    },
    p: {
      color: 'text',
      fontSize: [1, null, null, '15px'],
      lineHeight: [1.83, null, null, 2],
      mb: [3, null, null, 4],
    },
    a: {
      fontSize: [1, null, null, '15px'],
    },
  },
};
