type ProgressWithBubbleProps = {
  value: number; // 0 - 100
};

export default function ProgressWithBubble({ value }: ProgressWithBubbleProps) {
  return (
    <div className="relative w-full mt-8">
      {/* Bubble */}
      <div
        className="absolute -top-10 transition-all duration-500 ease-out"
        style={{ left: `calc(${value}% - 18px)` }}
      >
        <div className="relative">
          <div className="bg-emerald-400 text-black text-xs px-2 py-1 rounded-md font-medium shadow">
            {value}%
          </div>
          <div className="w-2 h-2 bg-emerald-400 rotate-45 absolute left-1/2 -bottom-1 -translate-x-1/2" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-3 rounded-full border border-emerald-400 overflow-hidden">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${value}%`,
            backgroundColor: '#6EE7B7', // och yashil
          }}
        />
      </div>
    </div>
  );
}
