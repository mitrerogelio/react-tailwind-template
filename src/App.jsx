export const App = () => {
  return (
    <div className="grid justify-items-center gap-y-8 text-white text-2xl font-sans">
      <section className="flex items-center gap-x-8">
        <img className="w-16 animate-pulse" src="/vite.svg" alt="Vite.js logo" /> +
        <img className="w-16 animate-pulse" src="/react.svg" alt="React.js logo" /> +
        <img className="w-16 animate-pulse" src="/tailwindcss.svg" alt="Tailwind CSS logo" />
      </section>

      <h2 className="font-medium">Vite + React + Tailwind Template!</h2>
    </div>
  )
}