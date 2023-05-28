import { AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
      }}
    >
      <AuthNavLink to="/register">
        <span>Sign Up</span>
      </AuthNavLink>
      <AuthNavLink to="/login">
        <span>Log In</span>
      </AuthNavLink>
    </div>
  );
};
