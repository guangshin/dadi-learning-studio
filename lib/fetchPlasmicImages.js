// Reusable utility to fetch images by key from the Plasmic CMS imageAsset collection
export async function fetchImagesByKey(keys) {
  if (!Array.isArray(keys) || keys.length === 0) return {};
  const response = await fetch("/api/cms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection: "imageAsset",
      filters: { key: { $in: keys } },
    }),
  });
  if (!response.ok) throw new Error("Failed to fetch images");
  const data = await response.json();
  const imagesByKey = {};
  (data.rows || []).forEach((row) => {
    const key = row.data.key;
    imagesByKey[key] = {
      src: row.data.image?.url || "",
      alt: row.data.alt || key || "Image",
      width: row.data.image?.width || 600,
      height: row.data.image?.height || 400,
    };
  });
  return imagesByKey;
}
