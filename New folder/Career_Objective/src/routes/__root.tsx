import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="container text-center">
      <h1 style={{ fontSize: "4rem" }}>404</h1>
      <p className="page-subtitle">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Go home</a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="container text-center">
      <h1>Something went wrong</h1>
      <p className="page-subtitle">Please try again.</p>
      <button className="btn btn-primary" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Student Career Navigator" },
      { name: "description", content: "Discover careers, build skills, and land internships — your personalized career planning platform." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-shell">
        <Navbar />
        <main className="app-main"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
