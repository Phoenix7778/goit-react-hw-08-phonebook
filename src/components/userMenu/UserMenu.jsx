import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'end' }}>
        Welcome, {user.name}!
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
