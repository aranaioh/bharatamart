# Simple Design System Usage Guide

This guide shows how to use the simplified design system with your custom colors.

## Custom Colors

### Current Colors in `src/lib/design-system.ts`:
```typescript
export const colors = {
  orange: '#FF6F61',
  primaryBg: '#003262',
  secondaryBg: '#6A0DAD',
  greenBg: '#0E9035',
  skyBg: '#0B87AC',
  coldGrayBg: '#959595',
  homeBg: '#EDF7FC',
  pinkBg: '#F3E3F6',
  cuteBlue: '#EDF7FC',
  white: '#ffffff',
  black: '#000000',
  myNewColor: '#FF0000',
  brandColor: '#00FF00',
}
```

## How to Use Colors

### 1. **With Tailwind Classes**

Import the CSS file in your `index.css`:
```typescript
import '@/lib/design-tokens.css'
```

Then use the utility classes directly:

```jsx
// Background colors
<div className="bg-orange">Orange background</div>
<div className="bg-primary-bg">Primary background</div>
<div className="bg-secondary-bg">Secondary background</div>
<div className="bg-green-bg">Green background</div>
<div className="bg-sky-bg">Sky background</div>
<div className="bg-cold-gray-bg">Cold gray background</div>
<div className="bg-home-bg">Home background</div>
<div className="bg-pink-bg">Pink background</div>
<div className="bg-cute-blue">Cute blue background</div>

// Text colors
<h1 className="text-orange">Orange text</h1>
<p className="text-primary-bg">Primary text</p>
<span className="text-secondary-bg">Secondary text</span>
<div className="text-green-bg">Green text</div>
```

### 2. **With shadcn/ui Components**

```jsx
import { Button, Card, Badge } from '@/components/ui'

// Buttons with your colors
<Button className="bg-orange text-white hover:bg-orange/90">
  Orange Button
</Button>

<Button className="bg-primary-bg text-white hover:bg-primary-bg/90">
  Primary Button
</Button>

// Cards with your colors
<Card className="bg-home-bg border-orange">
  <CardHeader>
    <CardTitle className="text-primary-bg">Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-secondary-bg">Card content</p>
  </CardContent>
</Card>

// Badges with your colors
<Badge className="bg-green-bg text-white">Success</Badge>
<Badge className="bg-sky-bg text-white">Info</Badge>
<Badge className="bg-pink-bg text-white">Special</Badge>
```

### 3. **With JavaScript/TypeScript**

```jsx
import { colors } from '@/lib/design-system'

const MyComponent = () => (
  <div style={{ 
    backgroundColor: colors.orange,
    color: colors.white,
    padding: '1rem'
  }}>
    <h1 style={{ color: colors.primaryBg }}>
      My Component
    </h1>
    <p style={{ color: colors.secondaryBg }}>
      Using colors from design system
    </p>
  </div>
)
```

### 4. **Combining with Tailwind Utilities**

```jsx
// Background + Padding + Border Radius
<div className="bg-orange p-4 rounded-lg">
  Orange card with padding and rounded corners
</div>

// Text + Font + Spacing
<h1 className="text-primary-bg text-2xl font-bold mb-4">
  Large primary heading
</h1>

// Background + Text + Hover effects
<button className="bg-green-bg text-white px-6 py-2 rounded-md hover:bg-green-bg/90 transition-colors">
  Green button with hover effect
</button>

// Complex layouts
<div className="bg-home-bg p-6 rounded-xl shadow-lg">
  <div className="bg-white p-4 rounded-lg mb-4">
    <h2 className="text-primary-bg text-xl font-semibold mb-2">
      Section Title
    </h2>
    <p className="text-secondary-bg">
      Content with custom colors
    </p>
  </div>
  <div className="flex gap-2">
    <Badge className="bg-orange text-white">Tag 1</Badge>
    <Badge className="bg-sky-bg text-white">Tag 2</Badge>
  </div>
</div>
```

## Adding New Colors

### 1. **Add to TypeScript file** (`src/lib/design-system.ts`):
```typescript
export const colors = {
  // ... existing colors ...
  
  // Add your new colors here
  myNewColor: '#FF0000',
  brandColor: '#00FF00',
  customBlue: '#1E40AF',
  lightPink: '#FCE7F3',
}
```

### 2. **Add to CSS file** (`src/lib/design-tokens.css`):
```css
:root {
  /* ... existing variables ... */
  
  /* Add your new color variables */
  --color-my-new-color: #FF0000;
  --color-brand-color: #00FF00;
  --color-custom-blue: #1E40AF;
  --color-light-pink: #FCE7F3;
}

/* Add utility classes */
.bg-my-new-color { background-color: var(--color-my-new-color); }
.bg-brand-color { background-color: var(--color-brand-color); }
.bg-custom-blue { background-color: var(--color-custom-blue); }
.bg-light-pink { background-color: var(--color-light-pink); }

.text-my-new-color { color: var(--color-my-new-color); }
.text-brand-color { color: var(--color-brand-color); }
.text-custom-blue { color: var(--color-custom-blue); }
.text-light-pink { color: var(--color-light-pink); }
```

### 3. **Use the new colors**:
```jsx
<div className="bg-my-new-color text-white p-4">
  Using my new color
</div>

<Button className="bg-brand-color text-white">
  Brand Button
</Button>
```

## Real-World Examples

### **Navigation Bar**:
```jsx
<nav className="bg-primary-bg text-white p-4">
  <div className="flex items-center justify-between">
    <h1 className="text-xl font-bold">Logo</h1>
    <div className="flex gap-4">
      <a href="#" className="hover:text-orange transition-colors">Home</a>
      <a href="#" className="hover:text-orange transition-colors">About</a>
      <a href="#" className="hover:text-orange transition-colors">Contact</a>
    </div>
  </div>
</nav>
```

### **Hero Section**:
```jsx
<section className="bg-home-bg py-16">
  <div className="container mx-auto text-center">
    <h1 className="text-primary-bg text-4xl font-bold mb-4">
      Welcome to Our Site
    </h1>
    <p className="text-secondary-bg text-lg mb-8">
      Discover amazing features with our custom design system
    </p>
    <Button className="bg-orange text-white px-8 py-3 text-lg hover:bg-orange/90">
      Get Started
    </Button>
  </div>
</section>
```

### **Feature Cards**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  <Card className="bg-white border-orange">
    <CardHeader>
      <CardTitle className="text-primary-bg">Feature 1</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-secondary-bg">Description here</p>
    </CardContent>
  </Card>
  
  <Card className="bg-white border-sky-bg">
    <CardHeader>
      <CardTitle className="text-primary-bg">Feature 2</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-secondary-bg">Description here</p>
    </CardContent>
  </Card>
  
  <Card className="bg-white border-green-bg">
    <CardHeader>
      <CardTitle className="text-primary-bg">Feature 3</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-secondary-bg">Description here</p>
    </CardContent>
  </Card>
</div>
```

### **Status Indicators**:
```jsx
<div className="flex gap-2">
  <Badge className="bg-green-bg text-white">Active</Badge>
  <Badge className="bg-orange text-white">Pending</Badge>
  <Badge className="bg-cold-gray-bg text-white">Inactive</Badge>
</div>
```

## Setup Instructions

### 1. **Import CSS in your main file**:
```typescript
// In main.tsx or index.css
import '@/lib/design-tokens.css'
```

### 2. **Use colors in your components**:
```jsx
// Simple usage
<div className="bg-orange text-white p-4 rounded-lg">
  My component
</div>

// With shadcn/ui
<Button className="bg-primary-bg text-white">
  Custom Button
</Button>
```

## Best Practices

1. **Use Tailwind classes** for most styling (recommended)
2. **Use TypeScript colors** when you need dynamic styling
3. **Keep colors consistent** across your application
4. **Add new colors** to both TypeScript and CSS files
5. **Use semantic names** for colors (e.g., `primaryBg` instead of `blue`)

## File Structure

```
src/lib/
├── design-system.ts          # Your custom colors (TypeScript)
├── design-tokens.css         # CSS variables and utility classes
└── design-system-usage.md    # This usage guide
```

That's it! Simple, clean, and easy to use with your shadcn/ui components and Tailwind classes.