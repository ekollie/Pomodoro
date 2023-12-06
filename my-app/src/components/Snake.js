import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const numRows = 10;
const numCols = 10;

const Snake = () => {
  const getRandomFoodPosition = () => {
    const row = Math.floor(Math.random() * numRows);
    const col = Math.floor(Math.random() * numCols);
    return { row, col };
  };

  const navigate = useNavigate();

  const [snake, setSnake] = useState([{ row: 0, col: 0 }]);
  const [food, setFood] = useState(getRandomFoodPosition());
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [timer, setTimer] = useState(60); // Initial timer value in seconds

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setDirection("UP");
        break;
      case "ArrowDown":
        setDirection("DOWN");
        break;
      case "ArrowLeft":
        setDirection("LEFT");
        break;
      case "ArrowRight":
        setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  const startGame = () => {
    setSnake([{ row: 0, col: 0 }]);
    setFood(getRandomFoodPosition());
    setDirection("RIGHT");
    setGameOver(false);
    setIsGameRunning(true);

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(intervalId);
          setIsGameRunning(false);
          navigate("/");
        }
        return prevTimer - 1;
      });
    }, 1000); // Update the timer every second
  };

  const moveSnake = () => {
    if (gameOver || !isGameRunning) return;

    const newSnake = snake.map((segment) => ({ ...segment }));
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.row -= 1;
        break;
      case "DOWN":
        head.row += 1;
        break;
      case "LEFT":
        head.col -= 1;
        break;
      case "RIGHT":
        head.col += 1;
        break;
      default:
        break;
    }

    // Check for collision with walls
    if (
      head.row < 0 ||
      head.row >= numRows ||
      head.col < 0 ||
      head.col >= numCols
    ) {
      setGameOver(true);
      setIsGameRunning(false);
      return;
    }

    // Check for collision with self
    if (
      newSnake.some(
        (segment) => segment.row === head.row && segment.col === head.col
      )
    ) {
      setGameOver(true);
      setIsGameRunning(false);
      return;
    }

    newSnake.unshift(head);

    // Check for collision with food
    if (head.row === food.row && head.col === food.col) {
      setFood(getRandomFoodPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const intervalId = setInterval(moveSnake, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [snake, direction, gameOver, isGameRunning]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isGameRunning]);

  return (
    <div>
      <div id="snakeBanner">
        <h1>{gameOver ? "Game Over" : "Snake Game"}</h1>
      </div>
      {isGameRunning && (
        <div id="snakeTimer">
          {" "}
          <p>Time remaining: {timer} seconds</p>
        </div>
      )}
      {!isGameRunning && (
        <button id="startButton" onClick={startGame}>
          Start Game
        </button>
      )}
      <div
        id="snake"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 30px)`,
        }}
      >
        {Array.from({ length: numRows * numCols }).map((_, index) => {
          const row = Math.floor(index / numCols);
          const col = index % numCols;

          const isSnakeSegment = snake.some(
            (segment) => segment.row === row && segment.col === col
          );
          const isFood = food.row === row && food.col === col;

          return (
            <div
              key={index}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: isSnakeSegment
                  ? "green"
                  : isFood
                  ? "red"
                  : "white",
                border: "1px solid black",
              }}
            />
          );
        })}
      </div>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default Snake;
