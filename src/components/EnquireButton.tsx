"use client";

export function openEnquireModal() {
  window.dispatchEvent(new CustomEvent("khq:open-enquire"));
}

export default function EnquireButton({
  className = "",
  children = "Enquire",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openEnquireModal} className={className}>
      {children}
    </button>
  );
}
