# Studio Demo Component - Visual Guide

## 🎨 Component Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                    STUDIO DEMO COMPONENT                        │
│                                                                 │
│  ┌─────────────┐  ┌───────────────────────────────────────┐   │
│  │   Header    │  │         Omniclip Video Editor          │   │
│  │   Section   │  │    Create Professional Video Ads       │   │
│  └─────────────┘  └───────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────┐  ┌───────────────────────────────────────┐   │
│  │  CHAPTERS   │  │                                        │   │
│  │             │  │                                        │   │
│  │ ▶ Import &  │  │         MAIN VIDEO AREA               │   │
│  │   Organize  │  │                                        │   │
│  │   0:00      │  │    [GIF Demo Playing Here]            │   │
│  │             │  │                                        │   │
│  │   Edit &    │  │    🔴 LIVE: Import & Organize         │   │
│  │   Compose   │  │                                        │   │
│  │   0:30      │  │                                        │   │
│  │             │  │    ⏮ ⏸ ⏭    💻 🔍                    │   │
│  │   Effects & │  │                                        │   │
│  │   Transtns  │  └───────────────────────────────────────┘   │
│  │   1:00      │                                              │
│  │             │  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Progress ▬▬▬▬▬▬▬▬▬▬▬      │
│  │   Export &  │                                              │
│  │   Share     │  ┌─────────────────────────────────────┐    │
│  │   1:30      │  │      CODE SNIPPET VIEWER             │    │
│  └─────────────┘  │  (Toggle with 💻 button)            │    │
│                   │                                      │    │
│                   │  import { Studio } from '@omni'      │    │
│                   │  const project = new Studio...       │    │
│                   └─────────────────────────────────────┘    │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │           TRANSITION GALLERY / MOSAIC VIEW               │ │
│  │                                                          │ │
│  │  [GIF 1]  [GIF 2]  [GIF 3]  [GIF 4]  [GIF 5]          │ │
│  │  Effect1  Effect2  Effect3  Effect4  Effect5           │ │
│  │                                                          │ │
│  │  [GIF 6]  [GIF 7]  [GIF 8]  [GIF 9]  [GIF 10]         │ │
│  │  Effect6  Effect7  Effect8  Effect9  Effect10          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                    CTA SECTION                           │ │
│  │                                                          │ │
│  │     Ready to Create Your First Video Ad?                │ │
│  │     [Start Free Trial]  [Watch Full Tutorial]           │ │
│  └──────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 User Interaction Flow

### Flow 1: Chapter Navigation
```
User clicks chapter → GIF starts playing → Progress bar updates
                   ↓
              Chapter highlighted → Description shows → Duration displays
```

### Flow 2: Video Controls
```
[Play/Pause] → Controls GIF rotation (3s intervals)
[Prev/Next]  → Jumps to adjacent chapter
[Fullscreen] → Expands video to full screen
[Code]       → Toggles code snippet viewer
```

### Flow 3: Gallery Interaction
```
User clicks transition → GIF loads in main area → Auto-plays
                       ↓
                  Gallery item highlights → Play icon appears on hover
```

---

## 📱 Responsive Layouts

### Desktop (>1024px)
```
┌─────────────────────────────────────────┐
│  [Chapter Sidebar]  [Main Video Area]  │
│                                         │
│  [................]  [................] │
│  [................]  [................] │
│  [................]  [................] │
│                                         │
│  [.... Transition Gallery 5-column ..] │
└─────────────────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌─────────────────────────────┐
│  [Chapter Sidebar]          │
│                             │
│  [Main Video Area]          │
│  [.......................]  │
│                             │
│  [Transition Gallery 3-col] │
└─────────────────────────────┘
```

### Mobile (<768px)
```
┌───────────────┐
│  [Chapters]   │
│  (Stacked)    │
│               │
│  [Video Area] │
│  [........]   │
│               │
│  [Gallery]    │
│  (2-column)   │
└───────────────┘
```

---

## 🎬 Animation States

### Idle State
- Chapter list visible
- Video paused (shows Play icon overlay)
- Controls hidden
- Progress bar shows current chapter

### Playing State
- GIF rotating every 3 seconds
- LIVE indicator pulsing
- Controls visible on hover
- Progress bar animated

### Hover State (Video Area)
- Controls fade in (opacity 0 → 1)
- Play/Pause button highlighted
- Fullscreen/Code buttons visible

### Hover State (Gallery)
- Transition card scales up (1 → 1.05)
- Play icon overlay appears
- Shadow intensifies

---

## 🎨 Visual Effects

### Glass Morphism
```css
Controls Bar:
- backdrop-blur-md
- bg-black/80
- border-white/10
```

### Gradient Overlays
```css
Video Area:
- bg-gradient-to-t from-black/60
- via-transparent to-black/20
```

### Shadow Effects
```css
Card Hover:
- shadow-xl
- transform: scale(1.05)
- transition: all 300ms
```

### Progress Indicator
```css
Completed: bg-primary
Current:   bg-primary animate-pulse
Pending:   bg-muted
```

---

## 📊 Data Flow

### Component State
```typescript
const [activeChapter, setActiveChapter] = useState('import')
const [isPlaying, setIsPlaying] = useState(false)
const [showCode, setShowCode] = useState(false)
const [currentGifIndex, setCurrentGifIndex] = useState(0)
```

### Auto-Rotation Logic
```typescript
useEffect(() => {
  if (!isPlaying) return;

  const interval = setInterval(() => {
    setCurrentGifIndex(prev =>
      prev >= gifs.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [isPlaying]);
```

### Chapter Data Structure
```typescript
{
  id: 'import',
  title: 'Import & Organize',
  description: 'Upload media assets...',
  icon: Upload,
  duration: '0:00',
  gifAssets: ['path1.gif', 'path2.gif'],
  codeExample: `import { Studio }...`
}
```

---

## 🎯 Key Features Visualization

### 1. Chapter Navigation
```
┌─────────────────┐
│ ▶ Chapter 1     │ ← Active (highlighted)
│   0:00          │
├─────────────────┤
│   Chapter 2     │ ← Inactive (gray)
│   0:30          │
├─────────────────┤
│   Chapter 3     │
│   1:00          │
└─────────────────┘
```

### 2. Video Controls
```
┌─────────────────────────────┐
│  [⏮]  [⏸]  [⏭]  |  [💻] [🔍] │
│  Prev  Play  Next   Code  FS │
└─────────────────────────────┘
```

### 3. Progress Bar
```
┌─────────────────────────────┐
│ ████ ████ ░░░░ ░░░░         │
│  Ch1  Ch2  Ch3  Ch4          │
└─────────────────────────────┘
```

### 4. Transition Gallery
```
┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 🎬 │ │ 🎬 │ │ 🎬 │ │ 🎬 │ │ 🎬 │
└────┘ └────┘ └────┘ └────┘ └────┘
Effect1 Effect2 Effect3 Effect4 Effect5
```

---

## 🔄 Component Lifecycle

### Initialization
```
1. Component mounts
2. Load first chapter (Import & Organize)
3. Display first GIF
4. Set playing state to false
5. Render chapter list
```

### User Interaction
```
User clicks chapter
  ↓
Update activeChapter state
  ↓
Reset currentGifIndex to 0
  ↓
Start auto-rotation (if playing)
  ↓
Update progress bar
```

### Auto-Rotation
```
isPlaying = true
  ↓
Start 3-second interval
  ↓
Increment currentGifIndex
  ↓
Loop back to 0 when end reached
  ↓
Display next GIF
```

---

## 🎨 Color Palette

### Primary Colors
- **Active State**: `bg-primary text-primary-foreground`
- **Hover State**: `hover:bg-accent hover:text-accent-foreground`
- **Muted Text**: `text-muted-foreground`

### Video Area
- **Background**: `bg-black`
- **Overlay**: `bg-black/80 backdrop-blur-md`
- **Border**: `border-white/10`

### Chapter Cards
- **Active**: `bg-primary shadow-lg scale-[1.02]`
- **Inactive**: `bg-card hover:bg-accent`
- **Icon BG**: `bg-primary/10` or `bg-primary-foreground/20`

### Gallery Cards
- **Base**: `bg-card border-border`
- **Hover**: `shadow-xl scale-105`
- **Overlay**: `bg-black/50 opacity-0 hover:opacity-100`

---

## 📐 Spacing & Sizing

### Main Container
- Max Width: `max-w-7xl`
- Padding: `px-4 py-12`
- Gap: `gap-6`

### Chapter Sidebar
- Width (Desktop): `300px`
- Padding: `p-4`
- Gap: `gap-2`

### Video Area
- Aspect Ratio: `aspect-video` (16:9)
- Border Radius: `rounded-2xl`
- Shadow: `shadow-2xl`

### Transition Gallery
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`
- Gap: `gap-4`
- Card Aspect: `aspect-video`

---

## 🚀 Performance Optimizations

### Image Loading
```typescript
<img loading="lazy" /> // Lazy load gallery items
```

### Single GIF Rendering
```typescript
// Only render current GIF, not all
<img src={gifAssets[currentGifIndex]} />
```

### Conditional Rendering
```typescript
{showCode && <CodeSnippet />} // Only when toggled
{isPlaying && <AutoRotation />} // Only when playing
```

### Cleanup
```typescript
useEffect(() => {
  // ...
  return () => clearInterval(interval); // Clean up
}, [isPlaying]);
```

---

## 🎯 Accessibility Features

- ✅ **Keyboard Navigation**: Tab through chapters
- ✅ **ARIA Labels**: Buttons have descriptive labels
- ✅ **Focus States**: Visible focus indicators
- ✅ **Alt Text**: Images have descriptive alt attributes
- ✅ **Heading Hierarchy**: Proper h1, h2, h3 structure
- ✅ **Color Contrast**: Meets WCAG AA standards

---

## 📱 Touch Interactions (Mobile)

- **Tap Chapter**: Select and play
- **Tap Play/Pause**: Toggle playback
- **Tap Transition**: Load in main area
- **Swipe Gallery**: Horizontal scroll on mobile

---

*This visual guide provides a comprehensive overview of the Studio Demo component's layout, interactions, and design patterns.*
