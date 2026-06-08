import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attrKey: string, attrVal: string, content: string) {
  let el = document.querySelector(
    `meta[${attrKey}="${attrVal}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function SeoHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/opengraph.jpg",
  schema,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Safe Care Veterinary Clinic");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", ogTitle ?? title);
    setMeta("name", "twitter:description", ogDescription ?? description);
    setMeta("name", "twitter:image", ogImage);

    let canonicalEl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    const schemaId = "seo-schema-ld";
    let schemaEl = document.getElementById(schemaId);
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = schemaId;
        (schemaEl as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(
        Array.isArray(schema) ? schema : [schema]
      );
    } else if (schemaEl) {
      schemaEl.remove();
    }

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, schema]);

  return null;
}
