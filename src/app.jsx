import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";

// Lazy load components
const Header = lazy(() => import("./components/Header/Header"));
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const HowItWorks = lazy(() => import("./components/HowItWorks/HowItWorks"));
const Details = lazy(() => import("./components/Details/Details"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Loading fallback component
const LoadingFallback = () => <div className="loading-spinner">Loading...</div>;

const App = () => {
    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                <Header />
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <>
                            <HeroSection />
                            <div className="below-hero">
                                <div className="bottom-circle"></div>
                            </div>
                            <HowItWorks />
                        </>
                    </Suspense>
                ),
            },
            {
                path: "/details/:problems?/:location?/:insurance?/",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Details />
                    </Suspense>
                ),
            },
        ],
    },
]);

// Initialize app
const init = () => {
    const getRoot = document.getElementById("root");
    if (!getRoot) return;

    const root = ReactDOM.createRoot(getRoot);
    root.render(<RouterProvider router={routes} />);
};

// Start the app
init();
