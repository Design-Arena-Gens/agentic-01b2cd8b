import type { ReactNode } from "react";
import clsx from "classnames";

interface CardProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, subtitle, action, className, children }: CardProps) => {
  return (
    <section
      className={clsx(
        "rounded-2xl border border-white/5 bg-surface/60 p-6 shadow-card backdrop-blur",
        className
      )}
    >
      {(title || subtitle || action) && (
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
            {subtitle && (
              <p className="text-sm text-white/60">{subtitle}</p>
            )}
          </div>
          {action && <div className="text-sm text-white/70">{action}</div>}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
};
