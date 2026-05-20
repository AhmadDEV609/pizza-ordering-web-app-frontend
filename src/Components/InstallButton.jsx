import React, { useEffect, useState } from 'react';

const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setVisible(true);
        };


        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', () => {
            setVisible(false);
            setDeferredPrompt(null);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setVisible(false);
            setDeferredPrompt(null);
        }
    };

    const handleClose = () => setVisible(false);

    if (!visible) return null;

    return (
        <div className="  w-80  fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-sm bg-white border border-gray-200 shadow-md rounded-lg px-4 py-3 z-50 text-sm animate-fadeIn transition-all  mb-10 lg:mb-2 ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="text-gray-800 font-medium  ">
                    📲 Install our <span className="font-semibold">Pizza App</span>!
                </div>
                <div className="flex gap-2 justify-end sm:justify-start">
                    <button
                        onClick={handleInstallClick}
                        className="px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-black rounded font-semibold transition text-xs sm:text-sm"
                    >
                        Install
                    </button>
                    <button
                        onClick={handleClose}
                        aria-label="Close"
                        className="text-gray-500 hover:text-gray-700 text-lg font-bold px-2 leading-none"
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallButton;
