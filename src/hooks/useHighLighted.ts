import { useEffect, useRef, useState } from "react";

export function useHighlighted(id:string) {
    const observer = useRef();
    const [activeId, setActiveId] = useState("");
   
    useEffect(() => {
      const handleObserver = (entries:any) => {
        entries.forEach((entry:any) => {
          if (entry?.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      };
   
      //@ts-ignore
      observer.current = new IntersectionObserver(handleObserver, {
        rootMargin: "0% 0% -35% 0px",
      });
   
      const elements = document.querySelectorAll("h2, h3, h4");
      //@ts-ignore
      elements.forEach((elem) => observer.current.observe(elem));
      //@ts-ignore
      return () => observer.current?.disconnect();
    }, []);
   
    return [activeId === id, setActiveId];
  }