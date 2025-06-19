export default function FineTuningKnob() {
  const radius = 38;
  const diameter = radius * 2;

  return (
    <div className="relative">
      <div
        className="hover:cursor-pointer flex justify-center p-[3px] rounded-full bg-primary-800 border border-primary-700"
        style={{
          width: diameter,
          height: diameter,
        }}
        tabIndex={0}
      >
        <div className="bg-indigo-50 size-1.5 rounded-full" />
      </div>
    </div>
  );
}
