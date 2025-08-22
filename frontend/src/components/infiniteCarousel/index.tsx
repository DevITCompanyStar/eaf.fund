import React, { useEffect, useRef, useState, useCallback } from 'react';
import './style.css';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number; // швидкість прокрутки в пікселях за секунду
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  speed = 50,
  pauseOnHover = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Функція для анімації прокрутки
  const animate = useCallback(() => {
    if (!containerRef.current || isPaused || isDragging || isTransitioning) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const container = containerRef.current;
    const scrollAmount = speed / 60; // ділимо на 60 для плавності (60fps)

    // Якщо досягли кінця першої копії контенту
    if (container.scrollLeft >= contentWidth) {
      // Зупиняємо карусель на 1 секунду при переході
      setIsTransitioning(true);
      setTimeout(() => {
        container.scrollLeft = 0;
        setIsTransitioning(false);
      }, 1000);
    } else {
      container.scrollLeft += scrollAmount;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [speed, isPaused, isDragging, contentWidth, isTransitioning]);

  // Запуск анімації
  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.scrollWidth / 2; // половина ширини (без дублікату)
      setContentWidth(width);
    }
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Обробка наведення миші
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
    setIsDragging(false);
  };

  // Обробка початку перетягування
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  // Обробка перетягування
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // множимо на 2 для більш чутливого прокручування
    if (containerRef.current) {
      let newScrollLeft = scrollLeft - walk;
      
      // Якщо перетягуємо за межі першої копії контенту
      if (newScrollLeft < 0) {
        // Переходимо в кінець другої копії
        newScrollLeft = contentWidth * 2 + newScrollLeft;
      } else if (newScrollLeft >= contentWidth) {
        // Переходимо в початок першої копії, коли досягаємо кінця
        newScrollLeft = newScrollLeft - contentWidth;
      }
      
      // Додаткова перевірка: якщо ми майже досягли кінця першої копії
      if (newScrollLeft >= contentWidth - 10) {
        newScrollLeft = newScrollLeft - contentWidth;
      }
      
      containerRef.current.scrollLeft = newScrollLeft;
    }
  };

  // Обробка кінця перетягування
  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Плавно переходимо на початок, якщо ми в кінці другої копії
    if (containerRef.current && contentWidth > 0) {
      const currentScroll = containerRef.current.scrollLeft;
      if (currentScroll >= contentWidth) {
        containerRef.current.scrollLeft = currentScroll - contentWidth;
      } else if (currentScroll < 0) {
        containerRef.current.scrollLeft = currentScroll + contentWidth;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`infinite-carousel-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div ref={contentRef} className="infinite-carousel-content">
        {children}
        {/* Дублюємо контент для нескінченного ефекту */}
        {children}
      </div>
    </div>
  );
};

export default InfiniteCarousel; 