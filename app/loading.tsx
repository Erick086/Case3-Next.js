export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="flex flex-col items-center justify-center gap-4 py-32">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-meta-cyan" />
        <p className="text-meta-dark/60 font-medium">carregando chamados...</p>
      </div>
    </main>
  );
}