/*eslint import/no-unresolved: [2, { ignore: ['\\.img$'] }]*/

import { useContext } from 'react';
//
import { AuthContext } from '../contexts/AwsCognitoContext';
// ----------------------------------------------------------------------

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Auth context must be use inside AuthProvider');
  return context;
};

export default useAuth;
