import type { FindMatchesProps } from "./types";

export const FindMatches = ({ name, value }: FindMatchesProps) => {
  const normalizedValue = value.trim().toLowerCase()
  const regExp = new RegExp(`(${normalizedValue})`, "gi");
  const normalizedNames = name.split(regExp);

  return normalizedNames.map((part, index) =>
    part.toLowerCase() === normalizedValue ? (
      <mark key={index} style={{ background: "#3CB371" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};
