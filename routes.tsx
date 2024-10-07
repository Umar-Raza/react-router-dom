import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ContactsPage } from "./src/pages/Contacts";
import PageNotFound from "./src/pages/PageNotFound";
import { RootLayouot } from "./src/pages/Root";
import { HomePage } from "./src/pages/Home";
import { ContactDetail } from "./src/pages/ContactDetail";

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
      <Route path="" element={<HomePage />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/contacts/:contactId" element={<ContactDetail />}></Route>
    </Route>
  )
);

export default appRouter;
