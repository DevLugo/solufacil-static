/** @jsx jsx */
import { jsx, Label, Flex, Input, Button } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex sx={styles.form} {...props} style={{ textAlign: "middle" }}>
      <Button variant="primary" onClick={() => {
        location.href = 'https://api.whatsapp.com/send?phone=+529811332834&text=Estoy Interesado en un crédito para mi negocio';
      }}>{'Quiero mi crédito'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
