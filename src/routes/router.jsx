import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import TopPlayers from "../components/TopPlayers";
import PlayGround from "../components/PlayGround";
import SignupForm from "../components/SignupForm";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {path : '/',
    element: <Layout />,
    children: [{path : '',element: <App/>},
    {path : 'signupForm',element: <SignupForm/>},
    {path : 'topScores',element: <TopPlayers />},
    {path : 'playGround/:names',element: <PlayGround />}
    ]
}
    



]);
export default router;