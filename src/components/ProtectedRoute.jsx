// src/components/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        setUser(null);
        setChecking(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Erreur de rôle:', error.message);
        setUser(null);
      } else {
        setUser({ ...user, role: data?.role });
      }

      setChecking(false);
    };

    getUser();
  }, []);

  if (checking) return null; // ou un spinner

  if (!user) return <Navigate to="/login" />;

  if (requireAdmin && user.role !== 'admin') return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
