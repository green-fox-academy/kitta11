// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

// The KeyDown event is triggered when the user presses a Key.
// The KeyUp event is triggered when the user releases a Key.
// The KeyPress event is triggered when the user presses & releases a Key. (onKeyDown followed by onKeyUp)

const text = document.querySelector('h1');

const printKey = (event) => {
  text.innerHTML = `Last pressed key: ${event.key}`
}

window.addEventListener('keypress', printKey);
