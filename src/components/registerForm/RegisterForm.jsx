import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2>Sign Up</h2>
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
          Username
          <Input type="text" name="name" placeholder="Enter user name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder="Enter email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="Enter password" />
        </Label>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};
