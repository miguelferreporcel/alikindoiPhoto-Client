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

              <Route element={<RequireAuth allowedRoles={["user"]} />}>
                  <Route path="/dash" element={<DashLayout />}>
                      <Route index element={<WellcomePage />} />
                      <Route path="links" element={<LinksPage />} />
                      <Route path="posts" element={<PostsPage />} />
                      <Route path="account" element={<AccountPage />} />
                      <Route path="newPost" element={<PostFormPage />} />
                      <Route path="posts/:id" element={<PostFormPage />} />

                      <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                          <Route path="admin" element={<AdminPage />} />
                          <Route path="users" element={<UsersPage />} />
                          <Route path="newUser" element={<UserFormPage />} />
                          <Route path="users/:id" element={<UserFormPage />} />
                      </Route>
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