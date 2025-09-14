// components/ConfirmationModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-md p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-2xl"
          >
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            <p className="text-[color:var(--muted)] mb-6">{children}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="btn hover:bg-[color:var(--border)]"
              >
                Cancelar
              </button>
              <button
                onClick={onConfirm}
                className="btn bg-red-600 text-white hover:bg-red-700"
              >
                Confirmar Exclusão
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}