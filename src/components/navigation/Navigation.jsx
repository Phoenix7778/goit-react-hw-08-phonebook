import { useAuth } from 'hooks/useAuth';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '10px',
        paddingTop: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontSize: '24px',
        borderBottom: '1px solid #2a363b',
      }}
    >
      <nav
        style={{
          display: 'flex',
          gap: '30px',
        }}
      >
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
