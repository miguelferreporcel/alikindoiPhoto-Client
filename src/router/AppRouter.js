// Importa las funciones que definen las páginas
import { 
  PostsPage, 
  PostFormPage, 
  NotFoundPage, 
  LoginPage, 
  LogoutPage,
  PublicPage, 
  WellcomePage, 
  UsersPage,
  UserFormPage, 
  AdminPage,
  LinksPage,
  AccountPage,
  UnauthorizedPage
} from '../pages'

import { Layout } from '../layouts/Layout'
import { DashLayout } from '../layouts/DashLayout'
import RequireAuth from '../components/RequireAuth'

// Importa Componentes Routes y Route para definir y crear rutas
import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
  
  return (
    <Routes>
      {/* react pide que las rutas estén dentro de un <BrowserRouter /> esto se hace en index.js
       * <BrowserRouter> <App /> </BrowserRouter>
       */}
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />

        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "6425d92d0bef666a230851bc", "6425d92d0bef666a230851be",
              ]}
            />
          }
        >
          <Route path="/dash" element={<DashLayout />}>
            <Route index element={<WellcomePage />} />
            <Route path="links" element={<LinksPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="newPost" element={<PostFormPage />} />
            <Route path="posts/:id" element={<PostFormPage />} />
          </Route>
        </Route>

        <Route
          element={<RequireAuth allowedRoles={["6425d92d0bef666a230851be"]} />}
        >
          <Route path="admin" element={<AdminPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="newUser" element={<UserFormPage />} />
          <Route path="users/:id" element={<UserFormPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
