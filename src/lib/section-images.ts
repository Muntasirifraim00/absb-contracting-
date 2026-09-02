import type { LucideIcon } from "lucide-react";
import blueprint from "@/assets/blueprint-villa.png.asset.json";
import preciseAlignment from "@/assets/precise-alignment.png.asset.json";
import flawlessFinish from "@/assets/flawless-finish.webp.asset.json";
import detailsThatMatter from "@/assets/details-that-matter.webp.asset.json";
import consistentAppearance from "@/assets/consistent-appearance.png.asset.json";
import builtToImpress from "@/assets/built-to-impress.png.asset.json";
import goodIsCommon from "@/assets/good-is-common.png.asset.json";
import drawingToReality from "@/assets/drawing-to-reality.png.asset.json";
import qualityAtEveryStep from "@/assets/quality-at-every-step.png.asset.json";
import documentedTraceable from "@/assets/documented-traceable.png.asset.json";
import engineeredSupervision from "@/assets/engineered-supervision.png.asset.json";
import zeroDeviation from "@/assets/zero-deviation-zero-compromise.png.asset.json";

export type ImageAsset = { url: string };

export type Pillar = {
  icon: LucideIcon;
  title: string;
  sub: string;
  note: string;
  image: ImageAsset;
  alt: string;
};

/** Stand-in artwork for cards without dedicated photography yet. */
export const placeholderImage: ImageAsset = blueprint;

export const sectionImages = {
  preciseAlignment,
  flawlessFinish,
  detailsThatMatter,
  consistentAppearance,
  builtToImpress,
  goodIsCommon,
  drawingToReality,
  qualityAtEveryStep,
  documentedTraceable,
  engineeredSupervision,
  zeroDeviation,
} satisfies Record<string, ImageAsset>;
