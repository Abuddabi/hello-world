class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  // Asynchronous method for typewriting effect
  async typeWrite(elementId: string, speed: number = 100): Promise<void> {
    const element = document.getElementById(elementId);
    if (!element) return;

    const fullText = "Hello " + this.greeting;
    element.textContent = ""; // Clear text before starting

    // Initial delay before starting
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Loop through each letter
    for (let i = 0; i < fullText.length; i++) {
      element.textContent += fullText[i];
      // Wait specified time before next letter
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }
}

// Create object and start the animation
const greeter = new Greeter("World");
greeter.typeWrite("output", 150); // 150ms between letters
