/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image
        width="187"
        height="37"
        src={logo}
        alt="Capital SoluFacil"
      />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      maxWidth: [150, '100%'],
    },
  },
};
