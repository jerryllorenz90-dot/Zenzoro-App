export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold text-neon drop-shadow-neon">
        ZENZORO
      </h1>

      <p className="text-gray-300 text-lg">
        The next-generation neon crypto analytics & portfolio platform.
      </p>

      <div className="mt-10 glass p-8 rounded-xl neon-border">
        <h2 className="text-2xl">Live Market Overview</h2>
        <p className="text-gray-400">Powered by WebSocket real-time feeds.</p>
      </div>
    </div>
  );
}