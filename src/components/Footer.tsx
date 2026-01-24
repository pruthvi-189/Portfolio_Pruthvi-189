import { useEffect, useRef, useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fullText = '<Pruthvi Narayana Reddy>'
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const timeoutRef = useRef<number | null>(null)

  const startTyping = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setIndex(0)
    setIsTyping(true)

    const typeNext = () => {
      setIndex((prev) => {
        if (prev >= fullText.length) {
          setIsTyping(false)
          return prev
        }

        timeoutRef.current = window.setTimeout(typeNext, 80)
        return prev + 1
      })
    }

    typeNext()
  }

  // Auto-type once on load
  useEffect(() => {
    startTyping()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Animated Brand */}
          <div
            className="font-mono text-sm text-primary cursor-pointer"
            onMouseEnter={startTyping}
          >
            {fullText.slice(0, index)}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} — Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
