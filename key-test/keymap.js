const KEY_W = 44;
const KEY_H = 42;
const KEYBOARD_WIDTH = 638;
const KEYBOARD_HEIGHT = 322;
const STEP = 48;
const LEFT_X = 0;
const RIGHT_X = 350;
const ROW_Y = [24, 72, 120, 168];
const OUTER_Y = 222;
const THUMB_Y = 276;

const physicalKeys = [];

function addRow(labels, baseCodes, lowerLabels, lowerCodes, row, options = {}) {
  labels.forEach((label, index) => {
    const right = index >= 6;
    physicalKeys.push({
      id: `r${row}c${index}`,
      x: (right ? RIGHT_X : LEFT_X) + (right ? index - 6 : index) * STEP,
      y: ROW_Y[row],
      baseLabel: label,
      baseCode: baseCodes[index],
      lowerLabel: lowerLabels[index],
      lowerCode: lowerCodes[index],
      lowerInherited: options.inherited?.includes(index) ?? false,
      mouseButton: options.mouse?.[index] ?? null,
      internal: options.internal?.includes(index) ?? false,
    });
  });
}

addRow(
  ["Esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Del"],
  ["Escape", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Delete"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  0,
);

addRow(
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Home"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "Home"],
  ["Tab", "Home", "↑", "End", "R", "T", "중클릭", "Num 7", "Num 8", "Num 9", "+", "Bksp"],
  ["Tab", "Home", "ArrowUp", "End", "KeyR", "KeyT", null, "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "Backspace"],
  1,
  { inherited: [0, 4, 5], mouse: { 6: 1 } },
);

addRow(
  ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "PgUp"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "PageUp"],
  ["Caps", "←", "↓", "→", "F", "G", "우클릭", "Num 4", "Num 5", "Num 6", "−", "Num ,"],
  ["CapsLock", "ArrowLeft", "ArrowDown", "ArrowRight", "KeyF", "KeyG", null, "Numpad4", "Numpad5", "Numpad6", "NumpadSubtract", "NumpadComma"],
  2,
  { inherited: [0, 4, 5], mouse: { 6: 2 } },
);

addRow(
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "PgDn"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "PageDown"],
  ["BT CLR", "BT 1", "BT 2", "BT 3", "V", "B", "좌클릭", "Num 1", "Num 2", "Num 3", "×", "Num ."],
  [null, null, null, null, "KeyV", "KeyB", null, "Numpad1", "Numpad2", "Numpad3", "NumpadMultiply", "NumpadDecimal"],
  3,
  { inherited: [4, 5], internal: [0, 1, 2, 3], mouse: { 6: 0 } },
);

const fixedKeys = [
  { id: "left-ctrl", x: LEFT_X, baseLabel: "Ctrl", baseCode: "ControlLeft", lowerLabel: "Ctrl", lowerCode: "ControlLeft", inherited: true },
  { id: "left-alt", x: LEFT_X + STEP, baseLabel: "Alt", baseCode: "AltLeft", lowerLabel: "Alt", lowerCode: "AltLeft", inherited: true },
  { id: "left-gui", x: LEFT_X + STEP * 2, baseLabel: "GUI", baseCode: "MetaLeft", lowerLabel: "GUI", lowerCode: "MetaLeft", inherited: true },
  { id: "right-alt", x: RIGHT_X + STEP * 3, baseLabel: "Alt", baseCode: "AltRight", lowerLabel: "Num 0", lowerCode: "Numpad0" },
  { id: "right-ctrl", x: RIGHT_X + STEP * 4, baseLabel: "Ctrl", baseCode: "ControlRight", lowerLabel: "÷", lowerCode: "NumpadDivide" },
  { id: "right-end", x: RIGHT_X + STEP * 5, baseLabel: "End", baseCode: "End", lowerLabel: "Num Enter", lowerCode: "NumpadEnter" },
].map((item) => ({ ...item, y: OUTER_Y, lowerInherited: item.inherited ?? false }));

const thumbKeys = [
  { id: "thumb-lang", x: LEFT_X + STEP * 3, baseLabel: "한/영", baseCodes: ["Lang1", "HangulMode"], lowerLabel: "한/영", lowerCodes: ["Lang1", "HangulMode"] },
  { id: "thumb-space", x: LEFT_X + STEP * 4, baseLabel: "Space", baseCode: "Space", lowerLabel: "Space", lowerCode: "Space" },
  { id: "thumb-lower-left", x: LEFT_X + STEP * 5, baseLabel: "Lower", baseCode: null, lowerLabel: "Lower", lowerCode: null, internal: true },
  { id: "thumb-bksp", x: RIGHT_X, baseLabel: "Bksp", baseCode: "Backspace", lowerLabel: "Bksp", lowerCode: "Backspace" },
  { id: "thumb-enter", x: RIGHT_X + STEP, baseLabel: "Enter", baseCode: "Enter", lowerLabel: "Enter", lowerCode: "Enter" },
  { id: "thumb-lower-right", x: RIGHT_X + STEP * 2, baseLabel: "Lower", baseCode: null, lowerLabel: "Lower", lowerCode: null, internal: true },
].map((item) => ({ ...item, y: THUMB_Y, lowerInherited: true }));

const optionalB = {
  id: "optional-b",
  x: RIGHT_X - STEP,
  y: ROW_Y[3],
  baseLabel: "B",
  baseCode: "KeyB",
  lowerLabel: "B",
  lowerCode: "KeyB",
  optional: true,
  lowerInherited: true,
};

physicalKeys.push(...fixedKeys, ...thumbKeys, optionalB);

const codeAliases = new Map([
  ["OSLeft", "MetaLeft"],
  ["OSRight", "MetaRight"],
]);

const keyElements = [];
const inputStatus = document.querySelector("#input-status");
const activeCodes = new Set();
const activeMouseButtons = new Set();

function codesFor(item, layer) {
  const many = item[`${layer}Codes`];
  if (many) return many;
  const one = item[`${layer}Code`];
  return one ? [one] : [];
}

function createKey(item, layer) {
  const label = item[`${layer}Label`];
  const button = document.createElement("button");
  button.type = "button";
  button.className = "key";
  button.dataset.keyId = item.id;
  button.dataset.layer = layer;
  button.style.left = `${item.x}px`;
  button.style.top = `${item.y}px`;
  button.textContent = label;
  button.setAttribute("aria-label", `${layer === "base" ? "기본" : "Lower"} 키맵 ${label}`);
  button.setAttribute("aria-pressed", "false");

  const inherited = layer === "lower" && item.lowerInherited;
  if (inherited) button.classList.add("is-inherited");
  if (item.optional) button.classList.add("is-optional");
  if (item.internal || (layer === "lower" && item.internal)) button.dataset.internal = "true";
  if (item.mouseButton !== null && item.mouseButton !== undefined && layer === "lower") {
    button.dataset.mouseButton = String(item.mouseButton);
  }

  const codes = codesFor(item, layer);
  button.dataset.codes = codes.join(" ");

  const press = () => {
    button.classList.add("is-pressed");
    button.setAttribute("aria-pressed", "true");
    setStatus(`${label} 선택`, true);
  };
  const release = () => {
    button.classList.remove("is-pressed");
    button.setAttribute("aria-pressed", "false");
  };

  button.addEventListener("pointerdown", (event) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    press();
  });
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("lostpointercapture", release);

  keyElements.push({ button, codes, mouseButton: item.mouseButton, layer, label });
  return button;
}

function renderKeyboard(target, layer) {
  const leftLabel = document.createElement("p");
  leftLabel.className = "hand-label left";
  leftLabel.textContent = "왼손";
  const rightLabel = document.createElement("p");
  rightLabel.className = "hand-label right";
  rightLabel.textContent = "오른손";
  target.append(leftLabel, rightLabel);
  physicalKeys.forEach((item) => target.append(createKey(item, layer)));
}

function setStatus(message, active = false) {
  inputStatus.textContent = message;
  inputStatus.classList.toggle("is-active", active);
}

function normalizeCode(code) {
  return codeAliases.get(code) ?? code;
}

function updateCodeState(code, pressed) {
  const normalized = normalizeCode(code);
  if (pressed) activeCodes.add(normalized);
  else activeCodes.delete(normalized);

  let matches = 0;
  keyElements.forEach(({ button, codes }) => {
    if (!codes.length) return;
    const selected = codes.some((candidate) => normalizeCode(candidate) === normalized);
    if (selected) {
      button.classList.toggle("is-pressed", pressed);
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
      matches += 1;
    }
  });

  if (pressed) {
    setStatus(matches ? `${normalized} · ${matches}개 위치` : `${normalized} · 표시 위치 없음`, true);
  } else if (!activeCodes.size && !activeMouseButtons.size) {
    setStatus("입력 대기 중", false);
  }
}

function updateMouseState(buttonNumber, pressed) {
  if (pressed) activeMouseButtons.add(buttonNumber);
  else activeMouseButtons.delete(buttonNumber);

  let matches = 0;
  keyElements.forEach((entry) => {
    if (entry.layer !== "lower" || entry.mouseButton !== buttonNumber) return;
    entry.button.classList.toggle("is-pressed", pressed);
    entry.button.setAttribute("aria-pressed", pressed ? "true" : "false");
    matches += 1;
  });

  if (pressed) {
    const names = ["좌클릭", "중클릭", "우클릭"];
    setStatus(`${names[buttonNumber] ?? "마우스"} · ${matches}개 위치`, true);
  } else if (!activeCodes.size && !activeMouseButtons.size) {
    setStatus("입력 대기 중", false);
  }
}

function resetInputState() {
  activeCodes.clear();
  activeMouseButtons.clear();
  keyElements.forEach(({ button }) => {
    button.classList.remove("is-pressed");
    button.setAttribute("aria-pressed", "false");
  });
  setStatus("입력 대기 중", false);
}

renderKeyboard(document.querySelector("#default-keyboard"), "base");
renderKeyboard(document.querySelector("#lower-keyboard"), "lower");

const keyboardViewports = [...document.querySelectorAll(".keyboard-viewport")];

function fitKeyboards() {
  keyboardViewports.forEach((viewport) => {
    const keyboard = viewport.querySelector(".keyboard");
    const scale = Math.min(1, viewport.clientWidth / KEYBOARD_WIDTH);
    keyboard.style.transform = `scale(${scale})`;
    viewport.style.height = `${KEYBOARD_HEIGHT * scale + 2}px`;
  });
}

const resizeObserver = new ResizeObserver(fitKeyboards);
keyboardViewports.forEach((viewport) => resizeObserver.observe(viewport));
fitKeyboards();

const knownCodes = new Set(
  keyElements.flatMap(({ codes }) => codes.map((code) => normalizeCode(code))),
);
const scrollCodes = new Set([
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Space",
  "PageUp",
  "PageDown",
  "Home",
  "End",
]);

window.addEventListener("keydown", (event) => {
  const code = normalizeCode(event.code);
  if (knownCodes.has(code) || scrollCodes.has(code)) event.preventDefault();
  if (scrollCodes.has(code)) event.stopPropagation();
  if (event.repeat) return;
  updateCodeState(event.code, true);
}, { capture: true });

window.addEventListener("keyup", (event) => updateCodeState(event.code, false));
window.addEventListener("mousedown", (event) => {
  if (event.target.closest?.(".key")) return;
  updateMouseState(event.button, true);
});
window.addEventListener("mouseup", (event) => {
  if (event.target.closest?.(".key") && !activeMouseButtons.has(event.button)) return;
  updateMouseState(event.button, false);
});
window.addEventListener("blur", resetInputState);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) resetInputState();
});
