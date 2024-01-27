export const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1);

export const clamp = (value) => Math.max(0, value);

export const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;
