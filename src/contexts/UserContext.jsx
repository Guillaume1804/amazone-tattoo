import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // Données auth
  const [profile, setProfile] = useState(null); // Données user_profiles
  const [loading, setLoading] = useState(true); // Chargement initial

  useEffect(() => {
    const getSession = async () => {
      console.log('🔁 Récupération de la session Supabase...');
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error('❌ Erreur lors de getSession:', sessionError.message);
      }

      const currentUser = session?.user || null;
      console.log('👤 Utilisateur actuel :', currentUser);
      setUser(currentUser);

      if (currentUser) {
        console.log('📥 Tentative de récupération du profil Supabase...');
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('*', { head: false })
          .eq('id', currentUser.id)
          .maybeSingle();

        if (profileError) {
          console.error('❌ Erreur lors de la récupération du profil :', profileError.message);
        } else if (!profileData) {
          console.warn('⚠️ Aucun profil trouvé pour cet utilisateur.');
        } else {
          console.log('✅ Profil récupéré :', profileData);
          setProfile(profileData);
        }
      }

      setLoading(false);
    };

    getSession();

    // Gestion du changement de session (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user || null;
      console.log('🔄 Changement de session détecté :', currentUser);
      setUser(currentUser);

      if (currentUser) {
        supabase
          .from('user_profiles')
          .select('*', { head: false })
          .eq('id', currentUser.id)
          .maybeSingle()
          .then(({ data, error }) => {
            if (error) {
              console.error('❌ Erreur dans onAuthStateChange (profil) :', error.message);
            } else if (!data) {
              console.warn('⚠️ Aucun profil trouvé lors du changement de session.');
            } else {
              console.log('✅ Profil mis à jour (onAuthStateChange) :', data);
              setProfile(data);
            }
          });
      } else {
        setProfile(null);
      }
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, profile, loading }}>
      {children}
    </UserContext.Provider>
  );
};
