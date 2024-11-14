# Nuxt 3 Toast Notifications

A fully customizable toast notification system for Nuxt 3. This project includes a toast store, a toast component, and a demo component with buttons to trigger toasts.

<br />

## Features

- Customizable positions: `top-left`, `top-right`, `bottom-left`, `bottom-right`.
- Multiple themes: `dark`, `light`.
- Auto-dismissal after a configurable duration.
- Smooth animations.

<br />

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Josquin2/toasts.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
<br />

## Usage
### 1. Import and Add the Toast Component
Include the toast component in your app.vue or a global layout:
  ```vue
  <template>
    <div>
        <MainToaster />
        <NuxtPage />
      </div>
  </template>
```

### 2. Call the Toasts Store
Use the toast store to trigger notifications from anywhere in your application:
  ```js
  import { useToastsStore } from "@/store/toasts";

  const toastsStore = useToastsStore();

  toastsStore.toast("This is a message!", {
    duration: 3000,
    position: "top-right",
    theme: "dark",
  });
```


<br />

## Contributing
Feel free to submit issues or pull requests. All contributions are welcome!


