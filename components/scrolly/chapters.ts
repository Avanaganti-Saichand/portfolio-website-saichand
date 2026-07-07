export interface Chapter {
  id: string;
  index: string;
  kicker: string;
  title: string;
  accent: string;
  lines: string[];
  tags: string[];
}

export const chapters: Chapter[] = [
  {
    id: "surface",
    index: "01",
    kicker: "LAYER 01 · THE SURFACE",
    title: "Pixels that feel native — because they are.",
    accent: "#22d3ee",
    lines: [
      "Enterprise React Native on the New Architecture: Fabric renderer, concurrent React, TypeScript end to end.",
      "Shipped Ultopia to both stores with Reanimated 2 transitions and gesture-driven flows holding a flat 60fps.",
      "Next.js on the web side — SSR, ISR, and component libraries shared across client properties.",
    ],
    tags: ["React Native", "Fabric", "Reanimated 2", "Next.js", "TypeScript"],
  },
  {
    id: "bridge",
    index: "02",
    kicker: "LAYER 02 · THE BRIDGE",
    title: "Where JavaScript shakes hands with the machine.",
    accent: "#8b5cf6",
    lines: [
      "JSI-based TurboModules — synchronous, typed calls into native code with zero serialization overhead.",
      "One TypeScript-facing API contract, two native implementations, backward-compatible with legacy bridges mid-migration.",
      "This is the layer most teams fear. It's where I live.",
    ],
    tags: ["JSI", "TurboModules", "Codegen", "Typed Contracts"],
  },
  {
    id: "metal",
    index: "03",
    kicker: "LAYER 03 · THE METAL",
    title: "When the framework ends, I keep going.",
    accent: "#f97316",
    lines: [
      "Swift: AVFoundation camera capture, Keychain-secured credentials, hand-rolled native modules.",
      "Kotlin: Camera2 pipelines, Keystore-backed storage, background services — mirrored API, per-platform muscle.",
      "APNs and FCM pipelines that deep-link payloads straight to the right screen.",
    ],
    tags: ["Swift", "Kotlin", "AVFoundation", "Camera2", "Keychain", "Keystore"],
  },
  {
    id: "silicon",
    index: "04",
    kicker: "LAYER 04 · THE INTELLIGENCE",
    title: "AI that runs where the user is.",
    accent: "#f472b6",
    lines: [
      "TensorFlow Lite inference on-device via JSI — no server round-trip, query latency down 40%.",
      "RAG pipelines in production: LangChain, LlamaIndex, Azure OpenAI embeddings, vector search.",
      "Two peer-reviewed publications in deep learning and NLP behind it.",
    ],
    tags: ["TensorFlow Lite", "LangChain", "RAG", "Azure OpenAI", "On-Device ML"],
  },
];
