import React, { useEffect, useRef } from "react";
import "../../assets/styles/cursor-follower.scss";

const CursorFollower = () => {
    const cursorRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });
    const requestRef = useRef(null);
    const isMoving = useRef(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            targetPosition.current = { x: event.clientX, y: event.clientY };
            
            if (!isMoving.current) {
                isMoving.current = true;
                animate();
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const animate = () => {
        position.current.x += (targetPosition.current.x - position.current.x) * 0.2;
        position.current.y += (targetPosition.current.y - position.current.y) * 0.2;

        if (cursorRef.current) {
            cursorRef.current.style.top = `${position.current.y}px`;
            cursorRef.current.style.left = `${position.current.x}px`;
        }

        // Check if the cursor has stopped moving
        if (Math.abs(position.current.x - targetPosition.current.x) < 0.1 &&
            Math.abs(position.current.y - targetPosition.current.y) < 0.1) {
            isMoving.current = false;
            return; // Stop animation when target is reached
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    return <div ref={cursorRef} className="cursor-follower" />;
};

export default CursorFollower;
