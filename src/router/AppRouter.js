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
import RequireAdmin from '../components/RequireAdmin'


import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/dash" element={<DashLayout />}>
            <Route index allowedRoles={["user"]} element={<WellcomePage />} />
            <Route
              path="links"
              allowedRoles={["user"]}
              element={<LinksPage />}
            />
            <Route
              path="posts"
              allowedRoles={["user"]}
              element={<PostsPage />}
            />
            <Route
              path="account"
              allowedRoles={["user"]}
              element={<AccountPage />}
            />
            <Route
              path="newPost"
              allowedRoles={["user"]}
              element={<PostFormPage />}
            />
            <Route
              path="posts/:id"
              allowedRoles={["user"]}
              element={<PostFormPage />}
            />
            {/*<Route element={<RequireAdmin />}>*/}
            <Route
              path="admin"
              allowedRoles={["admin"]}
              element={<AdminPage />}
            />
            <Route
              path="users"
              allowedRoles={["admin"]}
              element={<UsersPage />}
            />
            <Route
              path="newUser"
              allowedRoles={["admin"]}
              element={<UserFormPage />}
            />
            <Route
              path="users/:id"
              allowedRoles={["admin"]}
              element={<UserFormPage />}
            />
            {/*</Route> */}
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}


/**
 *          <Route
              element={
                <RequireAdmin allowedRoles={["admin"]} />
              }
            >
              <Route path="admin" element={<AdminPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="newUser" element={<UserFormPage />} />
              <Route path="users/:id" element={<UserFormPage />} />
            </Route>
 */