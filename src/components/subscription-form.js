/** @jsx jsx */
import { jsx, Label, Flex, Input, Button } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor="email" variant="styles.srOnly">
        Correo Electrónico
      </Label>
      <Input type="email" id="email" placeholder="Ingresa tu correo electrónico" />
      <Button>{buttonLabel ?? 'Quiero ser contactado'}</Button>
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