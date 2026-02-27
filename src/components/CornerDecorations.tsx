export function CornerDecorations() {
  return (
    <div className="fixed z-20 pointer-events-none inset-0">
      <div className="absolute top-8 left-8 w-8 h-8 md:w-12 md:h-12 border-t border-l border-black/10" />
      <div className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 border-t border-r border-black/10" />
      <div className="absolute bottom-8 left-8 w-8 h-8 md:w-12 md:h-12 border-b border-l border-black/10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 md:w-12 md:h-12 border-b border-r border-black/10" />
    </div>
  );
}
