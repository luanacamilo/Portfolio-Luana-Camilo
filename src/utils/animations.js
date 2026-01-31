// Animation variants for Framer Motion

// Fade in from bottom
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Fade in from left
export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Fade in from right
export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Scale fade in
export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Stagger children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Stagger with faster timing
export const staggerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

// Hover scale effect
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
}

// Hover lift effect
export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
}

// Navigation link hover
export const navLinkHover = {
  scale: 1.1,
  color: "#00ff88",
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
}

// Button hover with glow
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 5px 25px rgba(0, 255, 136, 0.4)",
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
}

// Typing animation
export const typewriter = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.1
    }
  }
}

// Rotate in
export const rotateIn = {
  initial: { 
    opacity: 0, 
    rotate: -10,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Slide in from top
export const slideDown = {
  initial: { 
    opacity: 0, 
    y: -30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}
