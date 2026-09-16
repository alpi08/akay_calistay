import { useState } from "react";
import { useLanguage } from "@/lib/akay/language";
import { cn } from "@/lib/utils";

/**
 * Schedule framework. `ScheduleSlot.details` stay empty until the real
 * program is announced; filling the array below is all that is needed later.
 */
type ScheduleSlot = {
  id: string;
  time: string | null;
  title: string | null;
  description: string | null;
  room: string | null;
  committee: string | null;
  speaker: string | null;
};

const SLOTS: ScheduleSlot[] = [
  { id: "s1", time: null, title: null, description: null, room: null, committee: null, speaker: null },
  { id: "s2", time: null, title: null, description: null, room: null, committee: null, speaker: null },
  { id: "s3", time: null, title: null, description: null, room: null, committee: null, speaker: null },
];

export function Schedule() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>(SLOTS[0]?.id ?? null);

  return (
    <section id="schedule" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="label-xs reveal">{t("schedule.label")}</p>
        <h2 className="reveal mt-4 font-display text-[clamp(1.8rem,4.6vw,3rem)] font-semibold tracking-tight">
          {t("schedule.title")}
        </h2>
        <p className="reveal mt-4 max-w-xl text-muted-foreground">{t("schedule.placeholder")}</p>

        <div className="mt-10 flex flex-col gap-3">
          {SLOTS.map((slot, i) => {
            const expanded = open === slot.id;
            return (
              <div
                key={slot.id}
                className={cn(
                  "glass-panel reveal overflow-hidden rounded-2xl transition-colors duration-500",
                  expanded && "border-glass-border-bright",
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : slot.id)}
                  aria-expanded={expanded}
                  aria-controls={`${slot.id}-panel`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label-xs tabular-nums">0{i + 1}</span>
                    <span className="font-display text-base text-foreground sm:text-lg">
                      {slot.title ?? t("soon")}
                    </span>
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="hidden font-display text-sm text-violet-soft sm:inline">
                      {slot.time ?? "--:--"}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-glass-border text-sm transition-transform duration-500",
                        expanded && "rotate-45 border-glass-border-bright text-violet-soft",
                      )}
                    >
                      +
                    </span>
                  </span>
                </button>
                <div
                  id={`${slot.id}-panel`}
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-4 border-t border-glass-border px-6 py-6 sm:grid-cols-2">
                      {(
                        [
                          ["schedule.time", slot.time],
                          ["schedule.room", slot.room],
                          ["schedule.committee", slot.committee],
                          ["schedule.speaker", slot.speaker],
                        ] as const
                      ).map(([key, value]) => (
                        <div key={key}>
                          <p className="label-xs">{t(key)}</p>
                          <p className="mt-1.5 text-sm text-muted-foreground">{value ?? t("soon")}</p>
                        </div>
                      ))}
                      <p className="text-sm text-muted-foreground sm:col-span-2">
                        {slot.description ?? t("schedule.placeholder")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
