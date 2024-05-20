
import { Navigate } from 'react-router-dom';
import { selectLoggedInUser,setIsauthenticated } from '../redux/authSlice';
import { useSelector } from 'react-redux';


function ProtectedAdmin({ children }) {
  const user = useSelector(selectLoggedInUser);
  const isAuthenticated=useSelector(setIsauthenticated)

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (isAuthenticated && user.role!=='admin') {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  
  return children;
}

export default ProtectedAdmin;