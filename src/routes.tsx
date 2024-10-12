import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { contactsLoader, ContactsPage } from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";
import { RootLayouot } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { contactDetailsLoader } from "./pages/ContactDetail";
import ContactDetail from "./pages/ContactDetail";
import { ContactNotFound } from "./pages/ContactNotFound";
// import { <ContactDetail</ContactDetaiT> } from './pages/ContactDetail';

// const dfa = createBrowserRouter([
//   {
//     path: "",
//     element: <RootLayouot />,
//     errorElement: <PageNotFound />,
//     children: [
//       {
//         path: "",
//         element: <HomePage />,
//       },
//       {
//         path: "contacts",
//         element: <ContactsPage />,
//       },
//       {
//         path: "contacts/:contactId",
//         element: <ContactDetail />,
//       },
//     ],
//   },
// ]);

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayouot />} errorElement={<PageNotFound />}>
      <Route index={true} element={<HomePage />}></Route>
      <Route
        path="/contacts"
        element={<ContactsPage />}
        loader={contactsLoader}
      />
      <Route
        path="contacts/:contactId"
        element={<ContactDetail />}
        loader={contactDetailsLoader}
        errorElement={<ContactNotFound/>}
      />
    </Route>
  )
);

export default appRouter;
