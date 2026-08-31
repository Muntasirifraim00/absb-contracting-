import type { LucideIcon } from "lucide-react";
import blueprint from "@/assets/blueprint-villa.png.asset.json";

export type ImageAsset = { url: string };

export type Pillar = {
  icon: LucideIcon;
  title: string;
  sub: string;
  note: string;
  image: ImageAsset;
  alt: string;
};

/**
 * Stand-in artwork for every card in the Visual Integrity sections.
 * To swap a single card, point that item's `image` at another asset import.
 */
export const placeholderImage: ImageAsset = blueprint;
