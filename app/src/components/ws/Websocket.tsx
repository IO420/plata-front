"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Websocket() {
  const [number, setNumber] = useState(0);
  const [vnumber, setVnumber] = useState(0);
  const [vnumber2, setVnumber2] = useState(0);
  const [vote, setVote] = useState(false);
  const [vote2, setVote2] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    const handleConnect = () => console.log("Socket.IO connected");
    const handleVoto = (data: { number: number }) => setNumber(data.number);
    const handleVotos1 = (data: { number: number }) => setVnumber(data.number);
    const handleVotos2 = (data: { number: number }) => setVnumber2(data.number);

    newSocket.on("connect", handleConnect);
    newSocket.on("voto", handleVoto);
    newSocket.on("votos1", handleVotos1);
    newSocket.on("votos2", handleVotos2);

    return () => {
      newSocket.off("connect", handleConnect);
      newSocket.off("voto", handleVoto);
      newSocket.off("votos1", handleVotos1);
      newSocket.off("votos2", handleVotos2);
      newSocket.disconnect();
    };
  }, []);

  const plus = () => handleSendMessage(number + 1, "message");
  const minus = () => handleSendMessage(number - 1, "message");

  const toggleVote = (setVot: React.Dispatch<React.SetStateAction<boolean>>,currentVote: boolean, setVnumber: React.Dispatch<React.SetStateAction<number>>, event: string) => {
    setVot((prev) => !prev);
    setVnumber((n) => {
      const newValue = currentVote ? n - 1 : n + 1;
      socket?.emit(event, { number: newValue });
      return newValue;
    });
  };

  const opuest = () => toggleVote(setVote,vote, setVnumber, "setVote");
  const opuest2 = () => toggleVote(setVote2,vote2, setVnumber2, "setVote2");

  const handleSendMessage = (newNumber: number, message: string) => {
    socket?.emit(message, { number: newNumber });
  };

  return (
    <>
      <h1 className="title">WebSocket</h1>
      <h2>{number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>

      <div className="flex">
        <div>
          <h2>{vnumber}</h2>
          <button onClick={opuest}>{vote ? "true" : "false"}</button>
        </div>
        <div>
          <h2>{vnumber2}</h2>
          <button onClick={opuest2}>{vote2 ? "true" : "false"}</button>
        </div>
      </div>
    </>
  );
}
