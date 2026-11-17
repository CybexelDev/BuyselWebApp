
import React, { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (isStandalone) return;

    const mobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (!mobile) return;

    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));

    if (localStorage.getItem("buysel-install-dismissed")) {
      return;
    }

    const handleInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleInstalled = () => {
      setShowBanner(false);
      setInstallPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleInstallPrompt
    );

    window.addEventListener("appinstalled", handleInstalled);

    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener(
        "beforeinstallprompt",
        handleInstallPrompt
      );
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      installPrompt.prompt();

      const result = await installPrompt.userChoice;

      if (result.outcome === "accepted") {
        setShowBanner(false);
      }

      setInstallPrompt(null);
    } else {
      setShowInstructions(true);
    }
  };

  const handleClose = () => {
    setShowBanner(false);
    localStorage.setItem("buysel-install-dismissed", "true");
  };

  if (!showBanner) return null;

  return (
 <div
  className="fixed bottom-4 left-3 right-3 z-[9999] overflow-hidden
             rounded-[28px] border border-white/50
             bg-white/25 p-4
             backdrop-blur-2xl backdrop-saturate-[180%]
             shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.2)]
             sm:left-auto sm:right-5 sm:w-[400px]"
>
  {/* glass highlight (light reflection) */}
  <div className="pointer-events-none absolute inset-0 rounded-[28px]
                  bg-gradient-to-br from-white/60 via-white/5 to-white/20" />

  <div className="relative">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/buysel-192.png"
          alt="Buysel"
          className="h-12 w-12 rounded-2xl border border-white/60
                     bg-white/60 object-contain p-1
                     shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        />

        <div>
          <h3 className="font-semibold text-gray-900">Install Buysel</h3>
          <p className="text-xs text-gray-700/80">
            Get the app on your home screen
          </p>
        </div>
      </div>

      <button
        onClick={handleClose}
        aria-label="Close install banner"
        className="flex h-8 w-8 items-center justify-center rounded-full
                   border border-white/50 bg-white/30 text-lg leading-none
                   text-gray-700 backdrop-blur-md
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
                   transition active:scale-90"
      >
        ×
      </button>
    </div>

    {showInstructions && (
      <div
        className="mt-3 rounded-2xl border border-white/50 bg-white/30
                   p-3 text-sm text-gray-800 backdrop-blur-md
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
      >
        {isIOS ? (
          <>
            Tap the <b>Share</b> icon in Safari, then select{" "}
            <b>Add to Home Screen</b>.
          </>
        ) : (
          <>
            Open Chrome's three-dot menu and select <b>Install app</b> or{" "}
            <b>Add to Home screen</b>.
          </>
        )}
      </div>
    )}

    <button
      onClick={handleInstall}
      className="mt-4 flex w-full items-center justify-center gap-2
                 rounded-full border border-white/50
                 bg-[#75C222]/85 px-4 py-3 font-semibold text-white
                 backdrop-blur-md
                 shadow-[0_4px_16px_rgba(117,194,34,0.45),inset_0_1px_0_rgba(255,255,255,0.6)]
                 transition hover:bg-[#75C222] active:scale-[0.97]"
    >
      <span>↓</span>
      Add to Home Screen
    </button>
  </div>
</div>
  );
};

export default InstallPrompt;
