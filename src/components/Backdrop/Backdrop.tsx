import type { TBackdropProps } from "./types";

export const Backdrop = ({ children, onClick }: TBackdropProps) => {
  return (
    <div
      className="fixed top-20 right-0 bottom-0 left-0 bg-[rgba(0.5,0.5,0.5,0.5)]"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
