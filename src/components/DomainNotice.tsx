"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "fundusnap-domain-notice-dismissed";

export default function DomainNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bleached-cedar/40 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-fundusnap-white rounded-2xl shadow-2xl border border-angel-blue/30 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-fundusnap" />

        <div className="px-6 pt-5 pb-6">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">📢</span>
              <h3 className="font-display font-semibold text-bleached-cedar text-lg leading-snug">
                Domain &amp; Email Migration Notice
              </h3>
            </div>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="mt-0.5 shrink-0 p-1.5 rounded-full text-fundusnap-gray hover:text-bleached-cedar hover:bg-angel-blue/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-sm text-bleached-cedar/70 mb-4">
            From <span className="font-semibold text-bleached-cedar">May 30th, 2026</span>,
            Fundusnap will transition to new domains as{" "}
            <code className="font-mono text-xs bg-angel-blue/20 text-venice-blue px-1.5 py-0.5 rounded">
              fundusnap.com
            </code>{" "}
            will not be renewed:
          </p>

          <ul className="space-y-2.5 text-sm">
            {[
              {
                icon: "🌐",
                label: "Website",
                href: "https://fundusnap.faizath.com",
                display: "fundusnap.faizath.com",
                formerly: "fundusnap.com",
              },
              {
                icon: "⚙️",
                label: "API",
                href: "https://fundusnap-api.faizath.com",
                display: "fundusnap-api.faizath.com",
                formerly: "api.fundusnap.com",
              },
              {
                icon: "📧",
                label: "Email",
                href: "mailto:contact@fundusnap.faizath.com",
                display: "contact@fundusnap.faizath.com",
                formerly: "contact@fundusnap.com",
              },
              {
                icon: "🛰️",
                label: "CDN",
                href: undefined,
                display: "fundusnap-cdn.faizath.com",
                formerly: "cdn.fundusnap.com",
              },
              {
                icon: "📈",
                label: "Status Pages",
                href: "https://status.faizath.com/status/fundusnap",
                display: "status.faizath.com/status/fundusnap",
                formerly: "status.fundusnap.com",
              },
            ].map(({ icon, label, href, display, formerly }) => (
              <li key={label} className="flex items-baseline gap-2">
                <span className="shrink-0">{icon}</span>
                <span>
                  <span className="font-medium text-bleached-cedar">{label}:</span>{" "}
                  {href ? (
                    <a
                      href={href}
                      className="text-venice-blue hover:underline font-medium"
                    >
                      {display}
                    </a>
                  ) : (
                    <span className="text-venice-blue font-medium">{display}</span>
                  )}{" "}
                  <span className="text-fundusnap-gray text-xs">
                    (formerly <em>{formerly}</em>)
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-end">
            <button
              onClick={dismiss}
              className="px-5 py-2 bg-venice-blue text-white text-sm font-medium rounded-full hover:bg-venice-blue/90 transition-all hover:shadow-lg hover:shadow-venice-blue/25"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
