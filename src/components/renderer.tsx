import { useEffect, useRef, useState } from "react";

interface RendererProps {
  value: string;
}

const Renderer = ({ value }: RendererProps) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const rendererRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rendererRef.current) return;

    const container = rendererRef.current;

    try {
      const parsed = JSON.parse(value);
      // Quill Delta format - extract text
      if (parsed?.ops) {
        const text = parsed.ops
          .map((op: { insert?: string }) => op.insert || "")
          .join("");
        container.innerHTML = text.replace(/\n/g, "<br/>");
        setIsEmpty(text.trim().length === 0);
      } else {
        container.innerHTML = value;
        setIsEmpty(value.trim().length === 0);
      }
    } catch {
      container.innerHTML = value;
      setIsEmpty(value.trim().length === 0);
    }
  }, [value]);

  if (isEmpty) return null;

  return <div ref={rendererRef} className="ql-editor ql-renderer" />;
};

export default Renderer;

