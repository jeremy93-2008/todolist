import { FaTimes } from "react-icons/fa";
import { Button } from "../button/button";
import { useEffect } from "react";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  isCloseOnOverlayClick?: boolean;
  isCloseOnEsc?: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  title?: string;
}

export function Modal(props: IModalProps) {
  const {
    children,
    isOpen = true,
    isCloseOnEsc = true,
    isCloseOnOverlayClick = true,
    onClose,
    width,
    height,
    title,
  } = props;

  useEffect(() => {
    if (!isCloseOnEsc) return;
    const handleEsc = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isCloseOnEsc, onClose]);

  return (
    isOpen && (
      <div
        onClick={() => isCloseOnOverlayClick && onClose()}
        className="fixed w-screen h-screen left-0 top-0 z-10 flex flex-1 justify-center items-center 
        bg-black bg-opacity-30"
      >
        <section
          onClick={(evt) => evt.stopPropagation()}
          className="relative flex flex-col w-[35vw] min-w-[300px] h-[82vh] px-4 py-4 bg-red-50 rounded-md"
          style={{ width, height }}
        >
          {title && (
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-1">{title}</h1>
              <hr />
            </div>
          )}
          <Button
            className="absolute top-2 right-2 border-transparent"
            onClick={() => onClose()}
            variant="secondary"
            centerIcon={<FaTimes />}
          />
          <div className="relative flex flex-1 flex-col min-h-0">
            {children}
          </div>
        </section>
      </div>
    )
  );
}
