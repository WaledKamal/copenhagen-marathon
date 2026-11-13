import React, { useState, useEffect } from "react";
import TopHeader from "./components/TopHeader";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ZonesPage from "./components/ZonesPage";
import UpdatesPage from "./components/UpdatesPage";
import TrackRunnerPage from "./components/TrackRunnerPage";
import DocsPage from "./components/DocsPage";

/**
 * Copenhagen Marathon Spectator PWA
 * - Full-viewport (`100dvh`, `overflow-hidden`, `overscroll-behavior-y: none`) native app layout.
 * - Supports direct URL routing to `/docs` (via `window.location.pathname` & History API)
 *   as well as in-app navigation across 'landing', 'home', 'updates', 'zones', 'track', and 'docs'.
 */
export default function App() {
  const getInitialScreen = () => {
    if (typeof window !== "undefined" && window.location.pathname === "/docs") {
      return "docs";
    }
    return "landing";
  };

  const [currentScreen, setCurrentScreen] = useState(getInitialScreen);
  const [lang, setLang] = useState("EN"); // 'EN' | 'DK'
  const [initialRunnerQuery, setInitialRunnerQuery] = useState("");

  const navigateTo = (screen) => {
    if (screen !== "track") {
      setInitialRunnerQuery("");
    }
    setCurrentScreen(screen);
    if (typeof window !== "undefined") {
      const targetPath = screen === "docs" ? "/docs" : "/";
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ screen }, "", targetPath);
      }
    }
  };

  const handleTrackSpecificRunner = (runnerNameOrBib) => {
    setInitialRunnerQuery(runnerNameOrBib);
    setCurrentScreen("track");
  };

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === "/docs") {
        setCurrentScreen("docs");
      } else {
        setCurrentScreen("landing");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (currentScreen === "docs") {
    return <DocsPage onBackToApp={() => navigateTo("landing")} />;
  }

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-[#121212] flex items-center justify-center">
      {/* Subtle ambient background for ultra-wide desktop screens */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,238,0,0.08)_0%,rgba(0,0,0,0.95)_75%)] pointer-events-none"
      />

      {/* Responsive App Container:
          - Mobile & Tablet: Full bleed 100% width & 100dvh height
          - Desktop (lg+): Centered tablet/mobile PWA frame with rounded-2xl shell matching SVG rx="26"
      */}
      <div className="relative w-full h-full lg:max-w-[834px] lg:max-h-[1194px] lg:rounded-[26px] lg:shadow-[0_25px_70px_rgba(0,0,0,0.75)] lg:ring-1 lg:ring-pureWhite/15 overflow-hidden flex flex-col bg-darkOverlay">
        {/* Shared Top Area: Quick screen switcher + White double-arrows logo */}

        {/* Active Screen */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {currentScreen === "landing" && (
            <LandingPage
              onStart={() => navigateTo("home")}
              lang={lang}
              onToggleLang={setLang}
            />
          )}

          {currentScreen === "home" && (
            <HomePage
              onNavigate={navigateTo}
              lang={lang}
              onToggleLang={setLang}
            />
          )}

          {currentScreen === "updates" && (
            <UpdatesPage
              onNavigate={navigateTo}
              onTrackRunner={handleTrackSpecificRunner}
              lang={lang}
              onToggleLang={setLang}
            />
          )}

          {currentScreen === "zones" && (
            <ZonesPage
              onNavigate={navigateTo}
              lang={lang}
              onToggleLang={setLang}
            />
          )}

          {currentScreen === "track" && (
            <TrackRunnerPage
              onNavigate={navigateTo}
              initialQuery={initialRunnerQuery}
              lang={lang}
              onToggleLang={setLang}
            />
          )}
        </div>
      </div>
    </div>
  );
}
