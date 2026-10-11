"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessagesSquare, Palette, Receipt } from "lucide-react";

// Mirrors the product color system used in ProductsSection and
// SolutionsShowcase (emerald/CRM, purple/ERP, orange/Color), so this little
// diagram reads as the same three products, not a new, unrelated visual.
const nodes = [
  {
    id: "crm",
    label: "CRM",
    icon: MessagesSquare,
    x: 50,
    y: 10,
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    glow: "bg-emerald-400/25",
  },
  {
    id: "erp",
    label: "ERP",
    icon: Receipt,
    x: 14,
    y: 82,
    badge:
      "bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
    glow: "bg-purple-400/25",
  },
  {
    id: "color",
    label: "Color",
    icon: Palette,
    x: 86,
    y: 82,
    badge:
      "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    glow: "bg-orange-400/25",
  },
] as const;

const edges = [
  { id: "crm-erp", from: nodes[0], to: nodes[1], color: "#10b981" },
  { id: "crm-color", from: nodes[0], to: nodes[2], color: "#f97316" },
  { id: "erp-color", from: nodes[1], to: nodes[2], color: "#a855f7" },
] as const;

// Three glowing particles loop around the full triangle perimeter, two
// going one way and a third going the other, each staggered so they never
// overlap, instead of a flat dash crawl.
const loopX = [nodes[0].x, nodes[1].x, nodes[2].x, nodes[0].x];
const loopY = [nodes[0].y, nodes[1].y, nodes[2].y, nodes[0].y];
const reverseLoopX = [nodes[0].x, nodes[2].x, nodes[1].x, nodes[0].x];
const reverseLoopY = [nodes[0].y, nodes[2].y, nodes[1].y, nodes[0].y];

export function ConnectedDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto h-64 w-full max-w-xs sm:h-72"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        {edges.map((edge, index) => (
          <motion.line
            key={edge.id}
            x1={edge.from.x}
            y1={edge.from.y}
            x2={edge.to.x}
            y2={edge.to.y}
            stroke={edge.color}
            strokeWidth={1.2}
            strokeOpacity={0.35}
            strokeDasharray="4 4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={shouldReduceMotion ? false : { pathLength: 0 }}
            whileInView={shouldReduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3 + index * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}

        {!shouldReduceMotion && (
          <>
            <motion.circle
              r={1.8}
              fill="#1ff5ff"
              style={{ filter: "drop-shadow(0 0 3px #1ff5ff)" }}
              initial={{ opacity: 0 }}
              animate={{
                cx: loopX,
                cy: loopY,
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                delay: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              r={1.8}
              fill="#e287ff"
              style={{ filter: "drop-shadow(0 0 3px #e287ff)" }}
              initial={{ opacity: 0 }}
              animate={{
                cx: reverseLoopX,
                cy: reverseLoopY,
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                delay: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              r={1.8}
              fill="#fb923c"
              style={{ filter: "drop-shadow(0 0 3px #fb923c)" }}
              initial={{ opacity: 0 }}
              animate={{
                cx: loopX,
                cy: loopY,
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                delay: 3.1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}
      </svg>

      {nodes.map(({ id, label, icon: Icon, x, y, badge, glow }, index) => (
        <motion.div
          key={id}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.4 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="relative flex size-14 items-center justify-center rounded-full">
            <span
              className={`pulse-glow absolute inset-0 rounded-full ${glow}`}
            />
            <span
              className={`relative flex size-14 items-center justify-center rounded-full ${badge}`}
            >
              <Icon aria-hidden="true" size={22} />
            </span>
          </span>
          <span className="text-navy text-xs font-semibold">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
