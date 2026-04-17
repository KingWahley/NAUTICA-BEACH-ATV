export default function MarqueeRow({ className, animationClassName, items }) {
  return (
    <div className={`flex gap-8 ${className}`}>
      <div className={`${animationClassName} flex gap-8 whitespace-nowrap shrink-0`}>
        <span>{items}</span>
        <span>{items}</span>
      </div>
      <div
        className={`${animationClassName} flex gap-8 whitespace-nowrap shrink-0`}
        aria-hidden="true"
      >
        <span>{items}</span>
        <span>{items}</span>
      </div>
    </div>
  );
}
