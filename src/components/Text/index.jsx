import React, { useEffect, useRef } from "react";

const sizeClasses = {
  txtSourceSansProBold48: "font-bold font-sourcesanspro",
  txtSourceSansProBold200: "font-bold font-sourcesanspro",
  txtInterSemiBold20: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const LetterLast = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const text = containerRef.current.textContent.trim();
    const lastLetter = text.charAt(text.length - 1);

    containerRef.current.textContent = text.slice(0, -1);

    // Создаем span для последней буквы и добавляем стили
    const lastLetterSpan = document.createElement('span');
    lastLetterSpan.textContent = lastLetter;
    lastLetterSpan.style.letterSpacing = 0; // Задайте нужные стили

    // Добавляем span в конец контейнера
    containerRef.current.appendChild(lastLetterSpan);
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
};


export { Text };
export { LetterLast };
