import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState } from "react";

const Admin = () => {
  const { user, profile } = useUser();
  console.log("🔐 Utilisateur connecté :", user);
  console.log("🧑‍💼 Profil :", profile);
  const navigate = useNavigate();
  const [view, setView] = useState("upload"); // 'upload' ou 'gallery'

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Espace Administrateur</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Déconnexion
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setView("upload")}
          className={`px-4 py-2 rounded ${
            view === "upload" ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Ajouter une image
        </button>
        <button
          onClick={() => setView("gallery")}
          className={`px-4 py-2 rounded ${
            view === "gallery" ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Galerie
        </button>
      </div>

      {view === "upload" && (
        <div>
          {/* Tu ajouteras ici le composant UploadImage */}
          <p>📤 Interface d'upload ici</p>
        </div>
      )}

      {view === "gallery" && (
        <div>
          {/* Tu ajouteras ici l'affichage dynamique des images */}
          <p>🖼️ Galerie dynamique ici</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
