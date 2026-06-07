import { useState, useEffect, useRef } from "react";
import { Car, CheckCircle, Scissors, ClipboardList, X, Check } from "lucide-react";

function BeforeAfterFeature() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="bg-card rounded-3xl p-6 shadow-sm border border-border h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 font-sans">Stress-Free Veterinary Visits</h3>
      
      <div 
        ref={containerRef}
        className="relative flex-1 rounded-2xl overflow-hidden cursor-ew-resize min-h-[250px] select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After (Pink) */}
        <div className="absolute inset-0 bg-primary/10 p-6 flex flex-col justify-center">
          <div className="space-y-4 max-w-[200px] ml-auto text-right">
            <h4 className="font-bold text-primary">With SCVC</h4>
            <ul className="space-y-3">
              {["Pet Taxi Included", "Easy Scheduling", "Clear Guidance"].map((item, i) => (
                <li key={i} className="flex items-center justify-end gap-2 text-sm font-medium">
                  {item} <Check className="w-4 h-4 text-primary" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before (Gray) */}
        <div 
          className="absolute inset-0 bg-muted p-6 flex flex-col justify-center border-r border-border"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <div className="space-y-4 max-w-[200px]">
            <h4 className="font-bold text-muted-foreground">Most Clinics</h4>
            <ul className="space-y-3 text-muted-foreground">
              {["Finding transportation", "Long waiting times", "Confusing communication"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium">
                  <X className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)]"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-border">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-3 bg-muted-foreground/30 rounded-full"></div>
              <div className="w-0.5 h-3 bg-muted-foreground/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsFeature() {
  const [activeStep, setActiveStep] = useState(0);
  
  const notifications = [
    { icon: Car, text: "Pet taxi is on its way", time: "Now", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: CheckCircle, text: "Vaccination completed", time: "2m ago", color: "text-green-500", bg: "bg-green-100" },
    { icon: Scissors, text: "Grooming session finished", time: "15m ago", color: "text-purple-500", bg: "bg-purple-100" },
    { icon: ClipboardList, text: "Doctor review ready", time: "1h ago", color: "text-primary", bg: "bg-primary/10" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % notifications.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-3xl p-6 shadow-sm border border-border h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 font-sans">Real-Time Care Updates</h3>
      <div className="flex-1 relative flex flex-col justify-center">
        <div className="relative h-[240px] w-full max-w-sm mx-auto">
          {notifications.map((notif, idx) => {
            // Calculate reverse index so newer items are on top
            // when we cycle, we want them to appear
            const isActive = idx <= activeStep;
            if (!isActive) return null;
            
            const position = activeStep - idx; // 0 is top, 1 is under, etc
            const yOffset = position * 15;
            const scale = Math.max(1 - position * 0.05, 0.8);
            const opacity = Math.max(1 - position * 0.3, 0);
            const zIndex = 10 - position;

            return (
              <div 
                key={idx}
                className="absolute left-0 right-0 bg-background rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border flex items-center gap-4 transition-all duration-500 ease-out"
                style={{ 
                  transform: `translateY(${yOffset}px) scale(${scale})`, 
                  opacity, 
                  zIndex,
                  top: '20px'
                }}
              >
                <div className={`w-10 h-10 rounded-full ${notif.bg} flex items-center justify-center shrink-0`}>
                  <notif.icon className={`w-5 h-5 ${notif.color}`} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{notif.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Update • {notif.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TestimonialFeature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const quotes = [
    { quote: "The team treated my cat like family.", name: "Sarah M.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { quote: "The pet taxi saved me so much time.", name: "James R.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { quote: "The doctors explained everything clearly.", name: "Priya S.", img: "https://randomuser.me/api/portraits/women/68.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-3xl p-6 shadow-sm border border-border h-full flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -top-10 -right-10 text-9xl text-primary/5 font-serif leading-none select-none">"</div>
      
      <h3 className="text-xl font-bold mb-8 font-sans relative z-10">What Clients Say</h3>
      
      <div className="flex-1 flex flex-col justify-center relative z-10 min-h-[160px]">
        {quotes.map((q, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ${idx === activeIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <p className="font-serif italic text-2xl text-foreground mb-6 leading-snug">"{q.quote}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <img src={q.img} alt={q.name} className="w-10 h-10 rounded-full object-cover border border-border" />
              <span className="font-bold text-sm text-foreground">{q.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2 mt-6 relative z-10">
        {quotes.map((_, idx) => (
          <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'}`} />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Reimagining Pet Healthcare</h2>
          <p className="text-muted-foreground text-lg">We've removed the friction from veterinary visits so you can focus on what matters most — your pet's wellbeing.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <BeforeAfterFeature />
          <NotificationsFeature />
          <TestimonialFeature />
        </div>
      </div>
    </section>
  );
}
