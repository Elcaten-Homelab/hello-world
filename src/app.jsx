export function App() {
  return (
    <main class="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <section class="flex w-full max-w-xl flex-col items-center py-12 text-center">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Preact + Tailwind CSS
          </p>
          <h1 class="text-5xl font-bold tracking-tight sm:text-7xl">Greetings</h1>
          <p class="mt-4 text-xl text-slate-300">hello world</p>
        </div>

        <figure class="mt-10 w-full overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 p-3 shadow-2xl shadow-cyan-950/50">
          <img
            class="aspect-[4/3] w-full rounded-xl object-cover"
            src="https://cataas.com/cat?width=640&height=480"
            alt="A random cat"
          />
        </figure>
      </section>
    </main>
  )
}
