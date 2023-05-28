import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2>Log In</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
          width: '500px',
          padding: '20px',
          gap: '20px',
        }}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <Label>
          Email
          <Input type="email" name="email" placeholder="Enter email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="Enter password" />
        </Label>
        <Button type="submit">Log In</Button>
      </form>
    </>
  );
};
