import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  useEffect(() => {
    const getId = (url: string) => (url === "#" ? "home" : url.replace(/^#/, ""));

    // Prefer computing visible area for each section for robust detection.
    const thresholds = [0, 0.25, 0.5, 0.75, 1]
    const observer = new IntersectionObserver(
      () => {
        // When any intersection changes, recompute which section has the largest
        // visible area — this avoids relying on a single entry's ratio.
        updateActiveByVisibility()
      },
      { root: null, rootMargin: "0px", threshold: thresholds },
    )

    const observed: Element[] = []
    items.forEach((it) => {
      const id = getId(it.url)
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observed.push(el)
      }
    })

    const updateActiveByVisibility = () => {
      let bestName: string | null = null
      let bestArea = 0
      items.forEach((it) => {
        const id = getId(it.url)
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const visibleTop = Math.max(rect.top, 0)
        const visibleBottom = Math.min(rect.bottom, window.innerHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        if (visibleHeight > bestArea) {
          bestArea = visibleHeight
          bestName = it.name
        }
      })
      if (bestName) setActiveTab(bestName)
    }

    const onPop = () => {
      const hash = window.location.hash || "#home"
      const id = getId(hash)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "center" })
      }
      const found = items.find((it) => getId(it.url) === id)
      if (found) setActiveTab(found.name)
    }

    // Initial evaluation in case some sections are already visible.
    updateActiveByVisibility()

    window.addEventListener("popstate", onPop)

    return () => {
      observed.forEach((el) => observer.unobserve(el))
      observer.disconnect()
      window.removeEventListener("popstate", onPop)
    }
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault()
                const targetId = item.url === "#" ? "home" : item.url.replace(/^#/, "")
                const el = document.getElementById(targetId)
                // Scroll to center of viewport so the scroll-spy (which uses viewport center)
                // picks the intended section reliably.
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
                try {
                  history.pushState(null, "", item.url)
                } catch (err) {
                  // ignore
                }
                setActiveTab(item.name)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                isActive
                  ? "bg-muted text-black hover:text-black"
                  : "text-white/80 hover:text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
